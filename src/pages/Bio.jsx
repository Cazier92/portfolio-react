import BioImage from '../assets/CE13BA46-71B4-4CDE-841F-EA906B9B4B13_1_105_c.jpeg'

import './Bio.css'

const Bio = () => {
  return ( 
    <>
      <div className='bio-body'>
        <h1>About</h1>
        <div className='bio-img-text'>
          <img src={BioImage} alt="" className='bio-img'/>
            <p className='bio-text'>
              Hello! My name is Bryce Cazier, welcome to my portfolio. I'm a Fullstack Developer, experienced in HTML, CSS, JavaScript, Node.js, Express, Mongoose, MongoDB, Sequelize, PostgreSQL, React, and TypeScript. In my Projects section, you'll find links to various apps I've developed. 
              <br /> 
              <br />
              I’m highly creative, while simultaneously being analytical. I also speak Spanish and have a love of languages. I found a career that allows me to combine all of these! In my former job as a manufacturing technician I worked in a creative environment where I needed to be focused on producing a consistent product that not only was fully functional, but aesthetically pleasing. I was involved in the development process and editing of materials and products to make production more efficient. I often had to work under pressure to meet deadlines, while keeping product at a uniform standard. This started me on the track to forge a career for myself that utilized these skills. Several of my close friends in the industry felt strongly that I would thrive as a software engineer, and after researching and trying some things out for myself, I made the dive in and I couldn’t be happier.
              <br />
              <br />
              My dog, Kaia is the most important thing in the world to me. She goes everywhere with me! She's a Siberian Husky puppy and a real handful, but I love her despite all the trouble she gets into, which has granted her the nickname "Miss Mayhem".
              <br />
              <br />
              I also paint with watercolor in my pastime, a hobby I started several years ago. My creativity has had a major impact on the way I approach problems. In watercolor, you need to think carefully about the big picture. Unlike oil paints and acrylics, you can't just paint over a mistake. Things show through! And overworking the paint will quickly muddy the paint and give a sub-par result. I need to be precise and efficient with the way I paint, giving each brush stroke meaning. In the same way, I like to think about the big picture with my code. What am I trying to achieve? What's the end result? How can I get from Point A to Point B in the fewest number of steps, and the fastest way, to make sure things run smoothly and efficiently and I keep my code dry.
            </p>
        </div>
      </div>
    </>
  );
}

export default Bio;