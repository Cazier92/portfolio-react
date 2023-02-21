import DisplayProjects from "../components/DisplayProjects";
import { projectData } from "../data/projectData";

import './Projects.css'

const Projects = (props) => {

  return ( 
    <>
    <div className="display-projects-div">
      <DisplayProjects projectData={projectData} setProjectPage={props.setProjectPage}/>

    </div>
    </>
  );
}

export default Projects;