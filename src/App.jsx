import React from 'react';
import Header from './components/Header';

import Home_Page from './pages/Home_Page';
import About_Me from './pages/About_Me';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Work_Experience from './pages/Work_Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <section id="home"><Home_Page /></section>
        <section id="about"><About_Me /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Work_Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

export default App;
