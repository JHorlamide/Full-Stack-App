import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/Actions/authActions";
import { Redirect } from 'react-router-dom';

const SignedUp = (props) => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignIn({
      ...signIn,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn(signIn);
  };

  const { authError, auth } = props;

  if (auth.uid) {
    return (
      <Redirect to='/'/>
    )
  };

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
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
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedUp);
