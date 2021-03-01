import React, { useState } from "react";
import "./Home.css";
import SignInThrough from "../../components/SignInThrough";

function Home() {
  const [click, setClick] = useState(false);
  return (
    <div className="container">
      <form
        action="#"
        className={
          !click ? "form-container signin" : "form-container signin slide-right"
        }
      >
        <h1>Sign in</h1>
        <SignInThrough />
        <span>or use your account</span>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm Password"
        />
        <span>Forgot your password?</span>
        <button type="submit">SIGN IN</button>
      </form>
      {/* <form action="#" className={!click ? "hide" : "form-container signup"}> */}
      <form
        action="#"
        className={
          click ? "form-container signup active" : "form-container signup"
        }
      >
        <h1>Create Account</h1>
        sign in through facebook, gmail, github
        <span>or use your email for registration</span>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
      </form>
      <div className="overlay-container">
        <div className="overlay-right">
          <h1>Hello, Friend</h1>
          <span>
            Enter in your personal details and create an account to begin
          </span>
          <button onClick={() => setClick(!click)}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
