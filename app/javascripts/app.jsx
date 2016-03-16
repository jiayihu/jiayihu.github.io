'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Ciao,</h1>
        <p className="subtitle">
          My name is <strong>Jiayi</strong> and I'm a <strong>front-end developer</strong> currently studying Computer Science at Padova's University in Italy.
        </p>
        <p>My website is under development for the time being, but you can contact me anytime.</p>
        <p className="social">
          <a href="mailto:steph.jiayi@gmail.com">Mail</a>
          <a href="http://github.com/jiayihu">Github</a>
          <a href="http://twitter.com/steph_jiayi">Twitter</a>
        </p>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementsByClassName('app')[0]
);
