import React from "react";
import Products from "../Products/Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Home"
        />
        <div className="home__row">
          <Products
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Products
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="12321354"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED"
            price={39.5}
            rating={5}
            image="https://m.media-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg"
          />
          <Products
            id="49538011"
            title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light,..."
            price={35.5}
            rating={4}
            image="https://m.media-amazon.com/images/I/41QztBTooxL._AC_SY200_.jpg"
          />
          <Products
            id="49238011"
            title="RUNMUS Gaming Headset for PS4, Xbox One, PC Headset w/Surround Sound, Noise Canceling Over Ear Headphones with Mic & LED..."
            price={31.5}
            rating={5}
            image="https://m.media-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
