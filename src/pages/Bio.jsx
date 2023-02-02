import BioImage from '../assets/CE13BA46-71B4-4CDE-841F-EA906B9B4B13_1_105_c.jpeg'

import './Bio.css'

const Bio = (props) => {
  return ( 
    <>
      <div className='bio-body'>
        <h1>About</h1>
        <div className='bio-img-text'>
          <img src={BioImage} alt="" className='bio-img'/>
            <p className='bio-text'>
              Hello! My name is Bryce Cazier, welcome to my portfolio. I'm a Fullstack Developer, experienced in HTML, CSS, JavaScript, Node.js, Express, Mongoose, MongoDB, and React. In my Projects section, you'll find links to various apps I've developed. 
              <br /> 
              <br />
              My dog, Kaia is the most important thing in the world to me. She goes everywhere with me! She's a Siberian Husky puppy and a real handful, but I love her despite all the trouble she gets into, which has granted her the nickname "Miss Mayhem".
              <br />
              <br />
              
            </p>
        </div>
      </div>
    </>
  );
}

export default Bio;