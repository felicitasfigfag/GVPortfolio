import React from 'react';
import '../styles/Sass/Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <button className="brand-button">GREGORIO VILLAGRÁN</button>
      <div className="nav-links">
        <a href="#about" className="navText">ABOUT</a>
        <a href="#contact" className="navText">CONTACT</a>
        <a href="#funstuff" className="navText">FUN STUFF</a>
      </div>
    </nav>
  );
}

export default Navbar;
