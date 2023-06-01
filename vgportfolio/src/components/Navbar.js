import React from 'react';
import '../styles/Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <button className="brand-button">Gregorio Villagran</button>
      <div className="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
        <a href="#funstuff">FUN STUFF</a>
      </div>
    </nav>
  );
}

export default Navbar;
