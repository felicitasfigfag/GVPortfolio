import React from 'react';
import Hero from './Main/Hero';
import AboutMe from './Main/AboutMe';
import FunStuff from './Main/FunStuff';
import '../styles/Sass/Main.scss';

function Main() {
  return (
    <main className="main">
      <div classname="main-central">
        <Hero />
        <AboutMe />
      </div>
      <FunStuff />
    </main>
  );
}

export default Main;
