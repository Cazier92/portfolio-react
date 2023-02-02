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
    <h1 className="project-name">{projectPage.name}</h1>
    <a target='_blank' rel='noopener noreferrer' href={projectPage.deploy}>Deploy</a>
    <a target='_blank' rel='noopener noreferrer' href={projectPage.gitHub}>GitHub</a>
    <p className="project-info">{projectPage.info}</p>
    <img src={projectPage.image} alt="" className="project-image"/>
    </>
  );
}

export default ProjectDetails;