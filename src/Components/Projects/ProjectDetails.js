import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) {
    return (
      <Redirect to='/signin' />
    )
  };
  
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card">
          <div className="card-content">
            <h5 className="cardotitle">{project.title}</h5>
            <p>{project.content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>
              Posted by {`${project.authorFirstName} ${project.authorLastName}`}
            </div>
            <div>{moment(project.createAt.toDate().toString()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Project...</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.project
  const project = projects ? projects[id] : null
  return {
    project,
    auth: state.firebase.auth
  };
};


export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "project" }])
)(ProjectDetails);
