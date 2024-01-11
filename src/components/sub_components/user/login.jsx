import React from "react";
import "./login.scss";

export default function login() {
  return (
    <div className="lgin">
      <form action="#" className="loin_form">
        <input
          placeholder="Enter YOur Email"
          type="email"
          className="email item"
          name="email"
        />
        <input
          placeholder="Enter your Password"
          type="password"
          className="password item"
          name="password"
        />
        <button type="submit" className="submit item">
          START MINING
        </button>
      </form>
      <a href="#" className="forgot_password">
        Forgot your password?
      </a>
    </div>
  );
}
