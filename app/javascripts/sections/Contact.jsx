import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <section className="contact container" >
        <div>
          <h2 ref={ (c) => (this.heading = c) }>CONTACT</h2>
          <p>If you are interested in sharing your your ideas or talking with me for any
          reason, feel free to contact me sending a pigeon post or using one of the following links.</p>
          <p>
            <a className="link" href="mailto:contact@jiayihu.me" target="_blank">Email</a>
            <a className="link" href="https://github.com/jiayihu" target="_blank">Github</a>
            <a className="link" href="https://twitter.com" target="_blank">Twitter</a>
          </p>
        </div>
      </section>
    );
  }
}
