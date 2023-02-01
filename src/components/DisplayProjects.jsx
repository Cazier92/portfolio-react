import { Link } from "react-router-dom";
import mazeImg from '../assets/maze-raider.png'

const DisplayProjects = (props) => {
  return ( 
    <>
      {props.projectData.map((project, idx) => (
        <>
        <Link to={`/projects/${idx}`}>
          <h1>{project.name}</h1>
        </Link>
        <Link to={`/projects/${idx}`}>
          <img src="../assets/maze-raider.png" alt="" />
        </Link>
        </>
      ))}
    </>
  );
}

export default DisplayProjects;