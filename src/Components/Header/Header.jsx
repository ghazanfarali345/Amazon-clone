import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { ContextValue } from "../../StateProvider/BsaketState";
import { Link } from "react-router-dom";
import { auth } from "../../firbase";

export const Header = () => {
  const [{ basket, user }] = ContextValue();
  console.log(">>> user", user);
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
          alt="Aamazon"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} onClick={handleSignOut}>
          <div className="header__navOption">
            <span className="header__optionLineOne">
              {/* Hello */}
              {user ? user.email : "Hello"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__navOption">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">Order</span>
        </div>
        <div className="header__navOption">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__basketIcon">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
