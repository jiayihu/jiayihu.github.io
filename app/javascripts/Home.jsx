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
  componentDidMount() {
    this.home.classList.add('fade-appear');
  }

  render() {
    return (
      <div ref={ (c) => (this.home = c) }>
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
