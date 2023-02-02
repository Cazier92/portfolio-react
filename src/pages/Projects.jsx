import DisplayProjects from "../components/DisplayProjects";
import { projectData } from "../data/projectData";

import './Projects.css'

const Projects = (props) => {

  return ( 
    <>
      <DisplayProjects projectData={projectData} setProjectPage={props.setProjectPage}/>
    </>
  );
}

export default Projects;