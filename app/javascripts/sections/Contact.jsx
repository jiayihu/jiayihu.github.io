import React from 'react';
import Waypoint from 'Waypoint';
import PubSub from 'pubsub-js';

function inViewHandler(direction, PubSub) {
  PubSub.publish('bg-change', 'black');
}

export default class Contact extends React.Component {
  componentDidMount() {
    const waypoint = new Waypoint({
      element: this.section,
      handler: (direction) => inViewHandler(direction, PubSub),
      offset: '10%',
    });
  }

  render() {
    return (
      <section
        className="contact container"
        ref={ (c) => (this.section = c) }
      >
        <div>
          <h2>CONTACT</h2>
          <p>If you are interested in sharing your your ideas or talking with me for any
          reason, feel free to contact me sending a pigeon post or using one of the following links.</p>
          <p>
            <a href="mailto:contact@jiayihu.me" target="_blank">Email</a>
            <a href="https://github.com/jiayihu" target="_blank">Github</a>
            <a href="https://twitter.com" target="_blank">Twitter</a>
          </p>
        </div>
      </section>
    );
  }
}
