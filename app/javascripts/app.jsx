import React, { PropTypes } from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import Logo from './components/Logo';

export default class App extends React.Component {
  render() {
    return (
      <TransitionGroup
        component="div"
        transitionAppear
        transitionAppearTimeout={1000}
        transitionName="fade"
        transitionEnterTimeout={1000}
        transitionLeave={false}
      >
        <Logo key={`${this.props.location.pathname}logo`} />
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname,
        })}
      </TransitionGroup>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
