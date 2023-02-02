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
            
          </p>
        </div>
      </div>
    </>
   );
}
 
export default Bio;