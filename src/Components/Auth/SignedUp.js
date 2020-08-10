import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import  {signUp}  from "../../store/Actions/authActions";

const SignedUp = (props) => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setSignup({
      ...signUp,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signup(signup);
  };

  const { auth, authError } = props;
  if (auth.uid) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="lastName">First Name</label>
          <input type="text" id="lastName" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="firstName">Last Name</label>
          <input type="text" id="firstName" onChange={handleChange} />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">SignUp</button>
        </div>
        <div className="red-text center">
          {authError ? <p>{authError}</p> : null}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedUp);
