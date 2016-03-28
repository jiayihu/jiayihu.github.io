import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          <img src="/images/react.svg" alt="Made with React" />
          <img src="/images/love.svg" alt="Made with love" />
        </p>
        <p>This website is made with React.js, love and crazy stuff.</p>
        <p className="copy">Giovanni Jiayi Hu © 2016. All rights reserved.</p>
      </footer>
    );
  }
}
