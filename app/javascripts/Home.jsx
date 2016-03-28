import React from 'react';
import Intro from './sections/Intro';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Intro />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}
