import React from 'react';
import Intro from './sections/Intro';
import About from './sections/About';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Intro />
        <About />
      </div>
    );
  }
}
