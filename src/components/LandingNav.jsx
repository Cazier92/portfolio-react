import { NavLink } from 'react-router-dom';
import './Nav.css'
import Logo from '../assets/Bryce-no-text.svg'

const Nav = (props) => {
  return ( 
    <header className='nav-bar'>
      <h1 className='link' onClick={() => props.bioScroll()}>About</h1>
      <p className='division'>|</p>
      <h1 className='link' onClick={() => props.projectsScroll()}>Projects</h1>
      <img src={Logo} alt="" className='logo' id='logo-icon' onClick={() => props.logoScroll()}/>

      <h1 className='link' onClick={() => props.contactScroll()}>Contact</h1>
      <p className='division'>|</p>
      <h1 className='link' onClick={() => props.resumeScroll()}>Resume</h1>
    </header>
  );
}

export default Nav;