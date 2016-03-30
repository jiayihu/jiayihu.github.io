import React from 'react';
import Logo from './components/Logo';
import Intro from './sections/Intro';
import About from './sections/About';
import Skills from './sections/Skills';
import Showcase from './sections/Showcase';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <Intro />
        <About />
        <Skills />
        <Showcase />
        <Contact />
        <Footer />
      </div>
    );
  }
}
