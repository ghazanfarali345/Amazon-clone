import React, { useState, useEffect } from "react";
import "./Payment.css";
import { ContextValue } from "../../StateProvider/BsaketState";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../Reducers/BasketReducer";
import CurrencyFormatter from "react-currency-format";
import axios from "../../axios";

function Payment() {
  const [{ basket, user }, dispatch] = ContextValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [processing, setProcessing] = useState(null);
  const [succeeded, setSucceeded] = useState(null);
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
    console.log("client scret >>> ", clientSecret);
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
        dispatch({
          type: "EMPTY_BASKET",
        });
      });
  };
  const handleChange = (event) => {
    setError(event.error ? event.error.message : "");
    setDisable(event.empty);
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout <Link to="/checkout">({basket.length})</Link>
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Addres</h3>
          </div>
          <div className="payment__address">
            {user?.email}
            <p>Saima Arabian Villas</p>
            <p>Compound 7</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Addres</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, i) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormatter
                  renderText={(value) => {
                    return <h3>Total Orders : {value}</h3>;
                  }}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disable || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
