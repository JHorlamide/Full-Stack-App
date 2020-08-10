import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  // const newPorjects = projects;
  // const latestprojects = newPorjects ?(
  //   newPorjects.map((project) => {
  //     return (
  //       <div key={project.id}>
  //         <ProjectSummary project={project} key={project.id}/>
  //       </div>
  //     )
  //   })
  // ) : (
  //     <div className='container'>You do not have any project left... </div>
  // );
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project) => {
          return (
            <Link to={`/project/${project.id}`} key={project.id}>
              <ProjectSummary project={project} key={project.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
