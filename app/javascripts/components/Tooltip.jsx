import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class Tooltip extends React.Component {
  render() {
    const { childText, hintText, isAnimated, position } = this.props;
    const className = classnames({
      [`hint--${position}`]: position,
      'hint--top': !position,
      'hint--bounce': isAnimated,
    });

    return (
      <span
        className={className}
        data-hint={hintText}
      >
        {childText}
      </span>
    );
  }
}

Tooltip.propTypes = {
  childText: PropTypes.string,
  hintText: PropTypes.string.isRequired,
  isAnimated: PropTypes.bool,
  position: PropTypes.string,
};
