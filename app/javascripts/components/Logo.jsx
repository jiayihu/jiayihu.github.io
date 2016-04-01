import React from 'react';
import PubSub from 'pubsub-js';
import Jump from 'jump.js';

function subscriber(topic, data) {
  console.log(data);
  const direction = data.direction;
  const color = data.color;
  const classList = this.classList;

  if (direction === 'down') {
    if (color === 'white') {
      classList.add('black');
    } else {
      classList.remove('black');
    }
  } else {
    if (color === 'white') {
      classList.remove('black');
    } else {
      classList.add('black');
    }
  }
}

export default class Logo extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    PubSub.subscribe('bg-change', subscriber.bind(this.section));
  }

  handleClick() {
    if (window.location.pathname === '/') {
      this.scrollTop();
    } else {
      this.context.router.push({
        pathname: '/',
        hash: '#showcase',
      });
    }
  }

  scrollTop() {
    const jump = new Jump();
    jump.jump('body', { duration: 1000 });
  }

  render() {
    return (
      <header
        className="logo container"
        ref={ (c) => (this.section = c) }
      >
        <h1 className="logo__name"><span onClick={this.handleClick}>Jiayi Hu</span></h1>
        <h3 className="logo__job">Front-end developer</h3>
      </header>
    );
  }
}

Logo.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
