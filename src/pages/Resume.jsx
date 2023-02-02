import ResumeDoc from '../assets/Resume.pdf'

const Resume = (props) => {
  return ( 
    <>
    <h1>Resume</h1>
    <a href={ResumeDoc} download>Download resume</a>
    </>
  );
}

export default Resume;