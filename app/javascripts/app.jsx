import React, { PropTypes } from 'react';

export default class App extends React.Component {
  render() {
    return this.props.children;
  }
}

App.propTypes = {
  children: PropTypes.node,
};
