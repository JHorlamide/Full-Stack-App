import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/Actions/projectActions";
import { Redirect } from "react-router-dom";

const CreateProject = (props) => {
  const [createProj, setcreateProj] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setcreateProj({
      ...createProj,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProject(createProj);
    props.history.push("/");
  };

  const { auth } = props;
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create New Project</h5>

        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            onChange={handleChange}
            className="materialize-textarea"
          ></textarea>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => {
      dispatch(createProject(project));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
