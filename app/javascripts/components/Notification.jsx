import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class Notification extends React.Component {
  componentDidUpdate() {
    if (this.props.show) {
      window.setTimeout(this.props.close, 6000);
    }
  }

  render() {
    const className = classnames('notif', 'notif--scale', {
      'notif--show': this.props.show,
      'notif--hide': !this.props.show,
      'notif--error': this.props.isError,
    });

    return (
      <div className={className}>
        <span>{this.props.text}</span>
      </div>
    );
  }
}

Notification.propTypes = {
  close: PropTypes.func,
  isError: PropTypes.bool,
  show: PropTypes.bool,
  text: PropTypes.string,
};
