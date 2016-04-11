import React from 'react';
import Waypoint from 'Waypoint';
import PubSub from 'pubsub-js';
import theaterJS from 'theaterjs';

export default class About extends React.Component {
  componentDidMount() {
    const theater = theaterJS({
      autoplay: false,
    });

    theater
      .addActor('me', 1, '.me')
      .addScene(2000)
      .addScene('me:Student of Computer Science')
      .addScene(3000)
      .addScene('me:Addicted book reader')
      .addScene(3000)
      .addScene('me:Tardis traveller')
      .addScene(theater.replay);

    this.waypoint = new Waypoint({
      continuous: false,
      element: this.section,
      handler: (direction) => this.inViewHandler(direction, theater),
      offset: '50%',
    });
  }

  componentWillUnmount() {
    this.waypoint.destroy();
  }

  inViewHandler(direction, theater) {
    PubSub.publish('bg-change', {
      direction,
      color: 'white',
    });
    theater.play();
  }

  render() {
    return (
      <section
        className="about container"
        ref={ (c) => (this.section = c) }
      >
        <div className="row">
          <div className="about-general col-sm-4">
            <p className="greeting">CIAO,</p>
            <p>I’m Jiayi <small>[dʒʌɪ]</small>, 20y/o passionate <strong>front-end developer</strong>
            &nbsp;and <span className="me"></span> based in Padua, Italy.</p>
            <p>I’m currently eagerly looking for a project involving <strong>web applications</strong> to
            sharpen my skills.</p>
          </div>
          <div className="about-detailed col-sm-8">
            <div className="col-lg-6">
              <p>
              My love for web development started 2 years ago, when I signed a contract for endless
              late-night codes and coffees with the two notorious words: <em>“Hello World”</em>. But it took me
              some more time to understand why I enjoy Javascript so much.</p>
              <blockquote>
                The wand chooses the wizard, Mr. Potter.
              </blockquote>
              <p>
                I'm basically a <strong>curious guy</strong> and I love being a web developer because I can analyse and
                build websites/applications like the ones I visit every day. Moreover I really get
                along with Javascript because it's young, powerful and has a very active community.<br />
                Its pace is rapid, but I'm greedy about learning and maybe one day I will be able to
                master it.
              </p>
            </div>
            <div className="col-lg-6">
              <p>Anyway despite my excitement for new and fancy technologies, I find it important
              to <strong>remain human</strong>. <br /> I rationally and carefully choose the frameworks,
              techniques and tools for my Agile workflow, picking the best option in terms of
              stability, innovation and power.</p>
              <p>
              In addition to my fondness for web development, I keep a <strong>sincere interest for UI
                Design & User Experience</strong> since the ability to think like users do and build usable
              interfaces is the key to make products meet people needs.</p>
              <p>
              I’m currently aiming for projects involving web application built with vanilla JS or
              ReactJS. <strong>I would also be very glad to collaborate/connect</strong> with some professional
              developer or designer while completing my studies at the University.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
