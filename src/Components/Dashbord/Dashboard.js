import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

/*** FirestoreConnect to connect to a single collection in the database collections ***/

import { firestoreConnect } from "react-redux-firebase";

/*** Custom Component from PorjectList and Notifications ***/
import Notifications from "./Notifications";
import ProjectList from "../Projects/ProjectList";
import { Redirect } from "react-router-dom";

const Dashboard = (props) => {
  const { projects, auth, notifications } = props;
  
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5">
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.project,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "project", orderBy: ["createAt", 'desc'] },
    { collection: "notifications", limit: 3, orderBy: ["time", 'desc'] },
  ])
)(Dashboard);
