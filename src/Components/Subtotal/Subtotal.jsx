import React from "react";
import CurrencyFormatter from "react-currency-format";
import "./Subtotal.css";
import { ContextValue } from "../../StateProvider/BsaketState";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../../Reducers/BasketReducer";

function Subtotal() {
  const [{ basket }] = ContextValue();
  const HISTORY = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormatter
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift ">
                <input type="checkbox" /> this order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => HISTORY.push("/payment")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
