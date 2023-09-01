import { NavLink } from 'react-router-dom';
import LogoImage from './LogoImage';
import '../styles/Nav.css';

const NavBar = () => {
  const activeLink = {
    textDecoration: 'underline',
  };
  return (
    <nav>
      <div className="logo-name">
        <LogoImage />
        <p>Space Travelers&apos; Hub</p>
      </div>
      <ul className="nav-links">
        <li className="link">
          <NavLink to="/" style={({ isActive }) => (isActive ? activeLink : undefined)}>Rockets</NavLink>
        </li>
        <li className="link">
          <NavLink to="/Missions" style={({ isActive }) => (isActive ? activeLink : undefined)}>Missions</NavLink>
        </li>
        <span>|</span>
        <li className="link">
          <NavLink to="/MyProfile" style={({ isActive }) => (isActive ? activeLink : undefined)}>MyProfile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
