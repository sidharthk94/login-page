import React, { useState } from "react";
import "./SignUp.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BiLogoLinkedin, BiLockAlt } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, seterrors] = useState({})


  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = (username, email, password) => {
    const error = {};
    const isNameValid = username.length >= 4 && username.length <= 20;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      );

    if (!isNameValid) {
      error.username = "Name should be 4-20 characters long.";
    }
    if (!isEmailValid) {
      error.email = "Must be a valid email";
    }
    if (!isPasswordValid) {
      error.password = " Password should contain at least one capital letter, one number  one symbol and be 8 characters long"
    }
    seterrors(error);
    return error;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   const formValidation = validateForm(username, email, password);
    if(Object.keys(formValidation).length === 0){
      const formData = {
        name: username,
        email: email,
        password: password,
      };
      console.log(formData);
    }
   
  };

  const isFormValid = username !== "" && email !== "" && password !== "";
  return (
    <div className="signUpmain">
      <h1 className="createAcoount">Create Account</h1>
      <div className="mediaIcons">
        <div className="socialMedia">
          <FaFacebookF />
        </div>
        <div className="socialMedia">
          <AiOutlineGooglePlus />
        </div>
        <div className="socialMedia">
          <BiLogoLinkedin />
        </div>
      </div>
      <p className="emailText">or use your email for registration:</p>

      <form onSubmit={handleSubmit}>
        <div className="formInputs">
          <div className="inputs">
            <div className="inputIcon">
              <BsPerson />
            </div>
            <input
              type="text"
              className="inputBox"
              placeholder="Name"
              value={username}
              onChange={handleNameChange}
            />
          </div>
          {errors.username && (<p className="validationMessage">{errors.username}</p>)}
          <div className="inputs">
            <div className="inputIcon">
              <CiMail />
            </div>
            <input
              type="text"
              className="inputBox"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {errors.email && (<p className="validationMessage">{errors.email}</p>)}
          <div className="inputs">
            <div className="inputIcon">
              <BiLockAlt />
            </div>
            <input
              type="text"
              className="inputBox"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {errors.password && (<p className="validationMessage">{errors.password}</p>)}
          <button className={isFormValid ? "signUp1" : "disabled"} disabled={!isFormValid}>
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
