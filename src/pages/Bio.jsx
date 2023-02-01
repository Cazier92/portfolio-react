import BioImage from '../assets/CE13BA46-71B4-4CDE-841F-EA906B9B4B13_1_105_c.jpeg'
import './Bio.css'

const Bio = (props) => {
  return ( 
    <>
      <div className='bio-body'>
        <h1>About</h1>
        <img src={BioImage} alt="" className='bio-img'/>
        <p>Bio Here:</p>
      </div>
    </>
   );
}
 
export default Bio;