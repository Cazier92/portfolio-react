import Logo from '../assets/Bryce-fullname.svg'
import './Landing.css'

import { useEffect, useState } from 'react';

import Bio from './Bio';
import Projects from './Projects';
import Contact from './Contact'
import Resume from './Resume'
import LandingNav from '../components/LandingNav'

const Landing = ({projectPage, setProjectPage}) => {
  const [bio, setBio] = useState()
  const [projects, setProjects] = useState()
  const [contact, setContact] = useState()
  const [resume, setResume] = useState()
  const [logo, setLogo] = useState()


  useEffect(() => {
    setBio(document.getElementById('bio'))
    setProjects(document.getElementById('projects'))
    setContact(document.getElementById('contact'))
    setResume(document.getElementById('resume'))
    setLogo(document.getElementById('logo'))
  }, [])

  function bioScroll() {
    console.log(bio)
    bio?.scrollIntoView(true)
  }

  
  function projectsScroll() {
    console.log('Working')
    projects?.scrollIntoView(true)
  }

  function contactScroll() {
    console.log('Working')
    contact?.scrollIntoView(true)
  }

  function resumeScroll() {
    console.log('Working')
    resume?.scrollIntoView(true)
  }

  function logoScroll() {
    logo?.scrollIntoView(true)
  }



  return ( 
    <>
    <LandingNav bioScroll={bioScroll} projectsScroll={projectsScroll} contactScroll={contactScroll} resumeScroll={resumeScroll} logoScroll={logoScroll}/>
    <div className='landing-body' id='logo'>
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