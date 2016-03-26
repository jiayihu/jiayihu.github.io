import React, { PropTypes } from 'react';
import Logo from './components/Logo';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};
