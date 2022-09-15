import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
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
