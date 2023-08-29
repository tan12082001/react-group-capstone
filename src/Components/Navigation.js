import { NavLink } from 'react-router-dom';
import LogoImage from './LogoImage';

const NavBar = () => {
  const activeLink = {
    textDecoration: 'underline',
  };
  return (
    <nav>
      <LogoImage />
      <h1>Space Traveler&apos;s Hub</h1>
      <ul>
        <li className="link">
          <NavLink to="/" style={({ isActive }) => (isActive ? activeLink : undefined)}>Rockets</NavLink>
        </li>
        <li className="link">
          <NavLink to="/Missions" style={({ isActive }) => (isActive ? activeLink : undefined)}>Missions</NavLink>
        </li>
        <li className="link">
          <NavLink to="/MyProfile" style={({ isActive }) => (isActive ? activeLink : undefined)}>MyProfile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
