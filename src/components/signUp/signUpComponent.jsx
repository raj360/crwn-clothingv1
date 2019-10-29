import React, { useState } from "react";
import { connect } from "react-redux";
import CustomButton from "../customButton/customButtomComponent";
import FormInput from "../formInput/formInputComponent";
import { signUpStart } from "../../redux/user/userActions";

import "./signUpStyles.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredetials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredetials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword)
      return alert("passwords provided dont match each other");

    signUpStart({ displayName, email, password });
  };
  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredetials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h1 className="title">I do not have an account </h1>
      <span>SIGN UP HERE</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="confirm password"
          required
        />
        <CustomButton type="submit"> SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredetials => dispatch(signUpStart(userCredetials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
