import React from "react";
import "./CheckoutProduct.css";
import { ContextValue } from "../../StateProvider/BsaketState";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [, dispatch] = ContextValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" alt="product_image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p key={_?.id}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove to basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
