import React from 'react';
import Waypoint from 'Waypoint';

function animateScroll() {
  const intro = document.querySelector('.intro');
  const logo = document.querySelector('.logo');

  intro.classList.toggle('fade');
  logo.classList.toggle('black');
}

export default class About extends React.Component {
  componentDidMount() {
    const waypoint = new Waypoint({
      element: this.section,
      handler: animateScroll,
      offset: '50%',
    });
  }

  render() {
    return (
      <section
        className="about container"
        ref={ function ref(c) {
          this.section = c;
        }.bind(this) }
      >
        <div className="col-md-4">
          <p>CIAO,</p>
          <p>I’m Jiayi [dʒʌɪ], 20y/o passionate front-end developer and student of Computer Science
          based in Padua, Italy.</p>
          <p>I’m currently eagerly looking for a project involving web applications to sharpen my skills.</p>
        </div>
        <div className="col-md-4">
          <p>CIAO,</p>
          <p>I’m Jiayi [dʒʌɪ], 20y/o passionate front-end developer and student of Computer Science
          based in Padua, Italy.</p>
          <p>I’m currently eagerly looking for a project involving web applications to sharpen my skills.</p>
        </div>
        <div className="col-md-4">
          <p>CIAO,</p>
          <p>I’m Jiayi [dʒʌɪ], 20y/o passionate front-end developer and student of Computer Science
          based in Padua, Italy.</p>
          <p>I’m currently eagerly looking for a project involving web applications to sharpen my skills.</p>
        </div>
      </section>
    );
  }
}
