import ResumeDoc from '../assets/Resume.pdf'

import './Resume.css'

const Resume = (props) => {
  return ( 
    <>
    <div className='resume-div'>
      <h1>Resume</h1>
      <a href={ResumeDoc} download className='download'>Download resume</a>
    </div>
    </>
  );
}

export default Resume;