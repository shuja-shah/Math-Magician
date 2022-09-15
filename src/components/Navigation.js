import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navigationReal">
    <div>
      <h2 className="title-intro">Math Magician</h2>
    </div>
    <div className="Naviii">
      <Link to="/">Home</Link>
      <Link to="/Calculator" className="Navi">Calculator</Link>
      <Link to="/Quota">Quota</Link>
    </div>
  </nav>
);

export default Nav;
