import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navigationReal">
    <div>
      <h2>Math Magician</h2>
    </div>
    <Link to="/" className="Navi">Home</Link>
    <Link to="/Calculator" className="Navi">Calculator</Link>
    <Link to="/Quota">Quota</Link>
  </nav>
);

export default Nav;
