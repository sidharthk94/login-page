import React from "react";
import "./SignIn.css";
import { IoLogoDribbble } from "react-icons/io";


const SignIn = () => {
  return (
    <div>
      <div className="compnyLogo">
        <div className="logoMain">
          <IoLogoDribbble/>
        </div>
        <p>Diprella</p>
      </div>
      <div className="second">
        <h1 className="welcome">Welcome Back!</h1>
        <div className="loginText">
          <p>
            To keep connected with us please
            <br />
            login with your persoanl info
          </p>
        </div>
        <button className="signIn1">SIGN IN</button>
      </div>
    </div>
  );
};

export default SignIn;
