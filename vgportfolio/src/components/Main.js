import React from 'react';
import Hero from './Main/Hero';
import AboutMe from './Main/AboutMe';
import FunStuff from './Main/FunStuff';
import '../styles/Sass/Main.scss';

function Main() {
  return (
    <main className="main">
      <div className="main-central">
        <Hero />
        <AboutMe />
        <FunStuff />
      </div>
    </main>
  );
}

export default Main;
