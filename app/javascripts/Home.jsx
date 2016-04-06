import React from 'react';
import Intro from './sections/Intro';
import About from './sections/About';
import Skills from './sections/Skills';
import Reading from './sections/Reading';
import Hobbies from './sections/Hobbies';
import Showcase from './sections/Showcase';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Intro />
        <About />
        <Skills />
        <Reading />
        <Hobbies />
        <Showcase />
        <Contact />
        <Footer />
      </div>
    );
  }
}
