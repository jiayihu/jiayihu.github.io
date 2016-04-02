import React, { PropTypes } from 'react';

export default class Tooltip extends React.Component {
  render() {
    const { childText, hintText, isAnimated, position } = this.props;
    let className = position ? `hint--${position}` : 'hint--top';
    className += isAnimated ? ' hint--bounce' : '';

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
