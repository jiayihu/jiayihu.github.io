import React from 'react';
import PubSub from 'pubsub-js';
import Jump from 'jump.js';

export default class Logo extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    PubSub.subscribe('bg-change', this.subscriber.bind(this.section));
  }

  handleClick() {
    if (window.location.pathname === '/') {
      this.scrollTop();
    } else {
      this.context.router.push({
        pathname: '/',
      });
    }
  }

  scrollTop() {
    const jump = new Jump();
    jump.jump('body', { duration: 1000 });
  }

  subscriber(topic, data) {
    const direction = data.direction;
    const color = data.color;
    const classList = this.classList;
    const isBgBlack = ((direction === 'down') && (color === 'black')) || ((direction === 'up') && (color === 'white'));

    if (isBgBlack) {
      classList.add('white');
    } else {
      classList.remove('white');
    }
  }

  render() {
    return (
      <header
        className="logo container"
        ref={ (c) => (this.section = c) }
      >
        <div className="logo__clickable" onClick={this.handleClick}>
          <h1 className="logo__name">Jiayi Hu</h1>
          <h3 className="logo__job">Front-end developer</h3>
        </div>
      </header>
    );
  }
}

Logo.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
