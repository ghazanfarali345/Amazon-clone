import React, { useState } from "react";
import "./Login.css";
import { auth } from "../../firbase";
import { useHistory } from "react-router-dom";

function Login() {
  const HISTORY = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const SignIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        HISTORY.push("/");
      })
      .catch((error) => {
        console.log(error, "signin");
      });
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        HISTORY.push("/");
      })
      .catch((error) => {
        console.log(error, "registration");
        // ..
      });
  };

  return (
    <div className="login">
      <img
        className="login_logoImage"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="logo_image"
      />
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={SignIn}>Sign In</button>
        </form>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam est
          aspernatur quae accusamus sapiente! Sed, quis iure! Commodi quas
          dolorum numquam facilis minima neque? Doloremque qui porro maxime iure
          accusamus!
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}
export default Login;
