import React from "react";
import "./Product.css";
import { ContextValue } from "../../StateProvider/BsaketState";

function Products({ id, title, price, rating, image }) {
  const [, dispatch] = ContextValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="product1" />
      <button className="product__button" onClick={addToBasket}>
        Add To Basket
      </button>
    </div>
  );
}

export default Products;
