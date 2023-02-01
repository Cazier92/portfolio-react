import { NavLink } from 'react-router-dom';
import './Nav.css'
import Logo from '../assets/Bryce-no-text.svg'

const Nav = (props) => {
  return ( 
    <header className='nav-bar'>
      <NavLink to='/' id='logo'><img src={Logo} alt="" className='logo'/></NavLink>
    </header>
   );
}
 
export default Nav;