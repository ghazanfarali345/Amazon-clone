import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { ContextValue } from "../../StateProvider/BsaketState";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Chekout() {
  const [{ basket }] = ContextValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="product"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item, i) => {
            return (
              <CheckoutProduct
                key={i}
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
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Chekout;
