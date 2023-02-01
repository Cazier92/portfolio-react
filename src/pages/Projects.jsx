import DisplayProjects from "../components/DisplayProjects";
import { projectData } from "../data/projectData";

const Projects = (props) => {

  return ( 
    <>
    <DisplayProjects projectData={projectData} />
    </>
  );
}

export default Projects;