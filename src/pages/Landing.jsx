import Logo from '../assets/Bryce-fullname.svg'
import './Landing.css'

const Landing = (props) => {
  return ( 
    <>
    <div className='landing-body'>
      <img src={Logo} alt="" />
    </div>
    </>
  );
}

export default Landing;