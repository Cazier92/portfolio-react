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
          <div className="single-project">
            <div className="project-name-img">
                <h1 className="project-name">{project.name}</h1>
                <img src={project.image} alt=""  className="project-pre-image"/>
            </div>
            <div className="project-details">
              <p className="project-summary">{project.info}</p>
              <a target='_blank' rel='noopener noreferrer' href={project.deploy} className='deploy'>Go to Deployed App</a>
              <br />
              <br />
              <a target='_blank' rel='noopener noreferrer' href={project.gitHub} className='github'>GitHub Documentation</a>
            </div>
          </div>
          </>
        ))}
      </div>
    </>
  );
}

export default DisplayProjects;