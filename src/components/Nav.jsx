import { NavLink } from 'react-router-dom';
import './Nav.css'
import Logo from '../assets/Bryce-no-text.svg'

const Nav = (props) => {
  return ( 
    <header className='nav-bar'>
      <NavLink to='/bio' className='link'>About</NavLink>
      <p>|</p>
      <NavLink to='/projecs' className='link'>Projects</NavLink>
      <NavLink to='/' id='logo'>
        <img src={Logo} alt="" className='logo'/>
      </NavLink>
      <NavLink to='/contact' className='link'>Contact</NavLink>
      <p>|</p>
      <NavLink to='/resume' className='link'>Resume</NavLink>
    </header>
   );
}
 
export default Nav;