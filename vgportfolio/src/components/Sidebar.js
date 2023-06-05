import React from 'react';
import '../styles/Sass/Sidebar.scss';
import InstagramIcon from '../Assets/Icons/instagram.png' 
import BehanceIcon from '../Assets/Icons/behance.png' 
import LinkedinIcon from '../Assets/Icons/linkedin.png' 

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-main">
      <div className='sidebar-main-logo'>
            <p>ART & DESIGN</p>
        </div>
        <div className='sidebar-main-links'>

            <a href= "https://instagram.com" className='sidebar-main-links-icon'>
             <img src={InstagramIcon} alt="Instagram"/>
            </a>
            <a href= "#contact" className='sidebar-main-links-icon' >
            <img src={BehanceIcon} alt="Instagram"/>
            </a>
            <a href= "#funstuff"  className='sidebar-main-links-icon' >
            <img src={LinkedinIcon} alt="Instagram"/>
            </a>
        </div>
        
      </div>
    </nav>
  );
}

export default Sidebar;
