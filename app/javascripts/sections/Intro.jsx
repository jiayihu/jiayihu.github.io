import React from 'react';
import PubSub from 'pubsub-js';
import Jump from 'jump.js';

function subscriber(topic, data) {
  if (data === 'white') {
    this.classList.toggle('fade');
  }
}

export default class Intro extends React.Component {
  componentDidMount() {
    PubSub.subscribe('bg-change', subscriber.bind(this.section));
  }

  scrollPage() {
    const jump = new Jump();

    jump.jump('.about', {
      duration: 1000,
    });
  }

  render() {
    return (
      <section
        className="intro"
        ref={ (c) => (this.section = c) }
      >
        <figure className="little-prince container">
          <blockquote>
            A rock pile ceases to be a rock pile the moment a single man contemplates it,
            bearing within him the image of a cathedral.
          </blockquote>
          <figcaption>― Antoine de Saint-Exupéry, The Little Prince</figcaption>
        </figure>
        <svg className="scroll" onClick={this.scrollPage} width="32" height="56" viewBox="0 0 32 56" xmlns="http://www.w3.org/2000/svg">
          <title>scroll icon</title>
          <g fill="none" fill-rule="evenodd" title="Scroll">
            <rect strokeOpacity=".7" stroke="#FFF" strokeWidth="2" width="32" height="56" rx="8" />
            <circle fillOpacity=".7" fill="#FFF" cx="16" cy="15" r="3" />
            <circle fillOpacity=".7" fill="#FFF" cx="16" cy="25" r="3" />
          </g>
        </svg>
      </section>
    );
  }
}
