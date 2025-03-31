import logo from './logo.jpg';

import { Link } from 'react-router-dom';

function Header() {
    return (
      <div> 
        <header className="header">
          <img src={logo} alt="LMS Logo" className="header-logo" />
        </header>
        <nav className="header-nav" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Link to="/" className="nav">Home</Link>
          <Link to="/courses" className="nav">Courses</Link>
          <Link to="/login" className="nav">Login</Link>
        </nav>
        </div>
    );
}

export default Header;