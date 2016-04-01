import React from 'react';
import Radar from '../components/Radar';

export default class Skills extends React.Component {
  render() {
    return (
      <section
        className="skills"
        ref={ (c) => (this.section = c) }
      >
        <div className="container">
          <h2>SKILLS</h2>
          <div className="col-sm-5">
            <h3>DEVELOPMENT</h3>
            <ul className="skills-list">
              <li>ES6 Javascript</li>
              <li>React + Redux</li>
              <li>ESLint</li>
              <li>SCSS</li>
              <li>Gulp + Browserify</li>
              <li>Mocha + Chai</li>
            </ul>
            <h3>DESIGN</h3>
            <ul className="skills-list">
              <li>Sketch</li>
              <li>Photoshop</li>
            </ul>
            <h3>OTHERS</h3>
            <ul className="skills-list">
              <li>Git VCS</li>
              <li>Team Foundation VCS</li>
              <li>Oh my ZSH</li>
            </ul>
          </div>
          <div className="col-sm-7 col-lg-6 col-lg-offset-1">
            <Radar />
          </div>
        </div>
      </section>
    );
  }
}
