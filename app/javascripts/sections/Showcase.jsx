import React from 'react';
import Waypoint from 'Waypoint';
import PubSub from 'pubsub-js';
import Projects from '../components/Projects';

export default class Showcase extends React.Component {
  componentDidMount() {
    this.waypoint = new Waypoint({
      continuous: false,
      element: this.section,
      handler: (direction) => this.inViewHandler(direction, PubSub),
      offset: '10%',
    });
    const height = - this.section.getBoundingClientRect().height;
    this.waypoint2 = new Waypoint({
      continuous: false,
      element: this.section,
      handler: (direction) => this.outViewHandler(direction, PubSub),
      offset: height,
    });
  }

  componentWillUnmount() {
    this.waypoint.destroy();
  }

  inViewHandler(direction, PubSub) {
    PubSub.publish('bg-change', {
      direction,
      color: 'black',
    });
  }

  outViewHandler(direction, PubSub) {
    PubSub.publish('bg-change', {
      direction,
      color: 'white',
    });
  }

  render() {
    return (
      <section
        id="showcase"
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
