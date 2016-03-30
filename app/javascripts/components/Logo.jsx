import React from 'react';
import PubSub from 'pubsub-js';
import Jump from 'jump.js';

function subscriber() {
  this.classList.toggle('black');
}

export default class Logo extends React.Component {
  componentDidMount() {
    PubSub.subscribe('bg-change', subscriber.bind(this.section));
  }

  scrollTop(e) {
    e.preventDefault();
    const jump = new Jump();
    jump.jump('body', { duration: 1000 });
  }

  render() {
    return (
      <header
        className="logo container"
        ref={ (c) => (this.section = c) }
      >
        <h1 className="logo__name"><a href="/" onClick={this.scrollTop}>Jiayi Hu</a></h1>
        <h3 className="logo__job">Front-end developer</h3>
      </header>
    );
  }
}
