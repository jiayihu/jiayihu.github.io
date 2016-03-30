import React from 'react';
import Waypoint from 'Waypoint';
import PubSub from 'pubsub-js';
import Projects from '../components/Projects';

function inViewHandler(direction, PubSub) {
  console.log(direction);
  PubSub.publish('bg-change', 'black');
}

export default class Showcase extends React.Component {
  componentDidMount() {
    const waypoint = new Waypoint({
      element: this.section,
      handler: (direction) => inViewHandler(direction, PubSub),
      offset: '30%',
    });
  }

  render() {
    return (
      <section
        className="showcase"
        ref={ (c) => (this.section = c) }
      >
        <div className="container">
          <h2>PROJECTS</h2>
          <Projects />
        </div>
      </section>
    );
  }
}
