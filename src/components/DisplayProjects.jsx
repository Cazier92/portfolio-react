import { Link } from "react-router-dom";
import mazeImg from '../assets/maze-raider.png'

import { projectData } from "../data/projectData";

const DisplayProjects = (props) => {
  const handleSetProjectPage = (idx) => {
    props.setProjectPage(projectData[idx])
  }

  return ( 
    <>
      {props.projectData.map((project, idx) => (
        <>
        <Link onClick={() => handleSetProjectPage(idx)} to={`/projects/details`}>
          <h1>{project.name}</h1>
        </Link>
        <Link to={`/projects/details`}>
          <img src={project.image} alt=""  className="project-image"/>
        </Link>
        <p>{project.info}</p>
        </>
      ))}
    </>
  );
}

export default DisplayProjects;