import { Link } from "react-router-dom";


import { projectData } from "../data/projectData";

import './DisplayProjects.css'

const DisplayProjects = (props) => {
  const handleSetProjectPage = (idx) => {
    props.setProjectPage(projectData[idx])
  }

  return ( 
    <>
      <div className="display-project-div">
        {props.projectData.map((project, idx) => (
          <>
            <Link 
            onClick={() => handleSetProjectPage(idx)} 
            to={`/projects/details`}
            className="project-name">
              <h1>{project.name}</h1>
            </Link>
            <Link to={`/projects/details`}>
              <img src={project.image} alt=""  className="project-pre-image"/>
            </Link>
            <p className="project-summary">{project.summary}</p>
          </>
        ))}
      </div>
    </>
  );
}

export default DisplayProjects;