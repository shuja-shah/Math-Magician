import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="navigationReal">
    <h2>Math Magician</h2>
    <ul>
      <li>
        <NavLink className="Navi" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="Navi" to="/Calculate">Calculator</NavLink>
      </li>
      <li>
        <NavLink to="/Qouta">Quota</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
