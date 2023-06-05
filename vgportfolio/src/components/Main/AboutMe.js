import React from 'react';
import '../../styles/Sass/Main/AboutMe.scss';

function AboutMe() {
  return (
    <section className="about">
      <header className= "about-intro">
        <h1 className= "about-title sectionTitle"> About:</h1>
        <i>Artist, graphic & digital designer</i>
      </header>
      <hr/>
      <div className='about-main'>
       
        <div className='about-main-left'>
          <div className= "about-main-left-intro about-section">
            <h3>Gregorio Villagrán</h3>
            <i>🇦🇷 From Argentina</i>
            <p>1992</p>
          </div>
        
          <div className = "about-main-left-experience about-section">
            <h4 className = "about-section-title sectionTitle"> EXPERIENCE </h4>
            <b className= "about-main-left-experience-line">2021 | OARO - Canada/Spain (Current)</b>
            <p className= "about-main-left-experience-line">2020 | George & Saul - U.S.A.</p>
            <p className= "about-main-left-experience-line">2019 | SANA Digital - Argentina/Spain</p>
            <p className= "about-main-left-experience-line">2018 | Minerva Estudio- Argentina</p>
          </div>

          <div className= "about-main-left-background about-section">
          <h4 className = "about-section-title"> BACKGROUND </h4>
          <ul>
            <li><b> | Licence (4 years) in Graphic Design</b></li>
              <i>Universidad del Norte Santo Tomás de Aquino - Argentina</i>
              <li><b>| Ethnography applied to design of products and services</b></li>
              <i>Estudio Racimo</i>
              <li><b>| Introduction to UX/UI</b></li>
              <i>Christian Vizcarra & Ethan Parry</i>
              <li><b>| Art direction for motion graphics</b></li>
              <i>Helio Vega</i>
              <li><b>| Introduction to After Effects</b></li>
              <i>Carlos Albarrán</i>
              <li><b>| Typography & Branding</b></li>
              <i>Quique Ollervides</i>
              <li><b>| Illustration for printed media</b></li>
              <i>Óscar Lloréns</i>
              <li><b>| Freelance Career management</b></li>
              <i>Estudio Martina Flor</i>
              <li><b>| Licence (5 years, unfinished) in psychology</b></li>
              <i>Universidad Nacional de Tucumán - Argentina</i>
          </ul>
          </div>

          <div className= "about-main-left-languages about-section">
            <h4 className = "about-section-title"> LANGUAGES </h4>
            <b>Spanish (Native)</b>
            <b>English (Fluent)</b>
            <b>Italian (Beginner)</b>
          </div>
        </div>
        <aside className= "about-main-summary">
          <p>
          Hello! I’m Gregorio, and I’m based in Italy. I appreciate 
          you taking the time to see my work.
          I hope you like it and look forward
          to working together soon!
          </p>
          <div className="about-image-shape"></div>
        </aside>
      </div>
     
     
  
    </section>
  );
}

export default AboutMe;
