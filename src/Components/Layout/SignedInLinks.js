import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from "../../store/Actions/authActions";


const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <Link to='/signin' onClick={() => {props.signOut();}}>Log Out</Link>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => { dispatch(signOut()) }
  }
};


export default connect(null, mapDispatchToProps)(SignedInLinks);
