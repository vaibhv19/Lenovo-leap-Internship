import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <NavLink to="/" className="logo-link" onClick={closeMenu}>
          <Compass className="logo-icon" size={32} strokeWidth={2.5} />
          <span>Skill<span className="text-gradient">Path</span></span>
        </NavLink>

        {/* Mobile menu toggle */}
        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
