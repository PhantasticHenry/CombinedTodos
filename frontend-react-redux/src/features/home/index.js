import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <form action="#" className="form-container login">
        <h1>Sign in</h1>
        sign in through facebook, gmail, github
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
      <div className="overlay-conatainer">
        <h1>Hello, Friend</h1>
        <span>
          Enter in your personal details and create an account to begin
        </span>
        <button>SIGN UP</button>
      </div>
      {/* <form action="#" className="form-container signup">
        <h1>Create Account</h1>
        sign in through facebook, gmail, github
        <span>or use your email for registration</span>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
      </form> */}
    </div>
  );
}

export default Home;
