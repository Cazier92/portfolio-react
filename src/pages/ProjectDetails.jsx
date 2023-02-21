import { Link } from "react-router-dom";


import './ProjectDetails.css'

const ProjectDetails = ({projectPage}) => {
  if (!projectPage) {
    return (
      <Link to='/projects'>Return to Projects</Link>
    )
  }


  return ( 
    <>
    <div className="project-details-div" id='details'>
      <h1 className="project-name">{projectPage.name}</h1>
      <a target='_blank' rel='noopener noreferrer' href={projectPage.deploy}>Go to deployed app</a>
      <br />
      <a target='_blank' rel='noopener noreferrer' href={projectPage.gitHub}>GitHub Documentation</a>
      <br />
      <img src={projectPage.image} alt="" className="project-image"/>
      <p className="project-info">{projectPage.info}</p>
    </div>
    </>
  );
}

export default ProjectDetails;