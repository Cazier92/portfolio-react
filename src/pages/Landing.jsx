import Logo from '../assets/Bryce-fullname.svg'
import './Landing.css'

import Bio from './Bio';
import Projects from './Projects';
import Contact from './Contact'
import Resume from './Resume'
import LandingNav from '../components/LandingNav'

const Landing = ({projectPage, setProjectPage}) => {
  const bio = document.getElementById('bio')
  const projects = document.getElementById('projects')
  const contact = document.getElementById('contact')
  const resume = document.getElementById('resume')

  function bioScroll() {
    bio?.scrollIntoView(false)
  }

  
  function projectsScroll() {
    projects?.scrollIntoView(true)
  }

  function contactScroll() {
    contact?.scrollIntoView(true)
  }

  function resumeScroll() {
    resume?.scrollIntoView(true)
  }



  return ( 
    <>
    <LandingNav bioScroll={bioScroll} projectsScroll={projectsScroll} contactScroll={contactScroll} resumeScroll={resumeScroll}/>
    <div className='landing-body'>
      <img src={Logo} alt="" />
    <div className='bio-div' id='bio'>
      <Bio />
    </div>
    <div id='projects'>
      <h1>My Projects:</h1>
    </div>
    <div className='projects-div'>
      <Projects setProjectPage={setProjectPage}/>
    </div>
    <div id='contact'>
      
    </div>
    <div className='contact-div'>
      <Contact />
    </div>
    
    <div className='resume-div' id='resume'>
      <Resume />
    </div>
    </div>
    {/* <div className='end'></div> */}
    </>
  );
}

export default Landing;