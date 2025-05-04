import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';
import logoImg from '../assets/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="navbar-logo">
            <img src={logoImg} alt="MRV Mali Danışmanlık Logo" className="logo-img" />
          </Link>
          
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          
          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
                Ana Sayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/hakkimizda" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
                Hakkımızda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/hizmetlerimiz" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
                Hizmetlerimiz
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/iletisim" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
                İletişim
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 