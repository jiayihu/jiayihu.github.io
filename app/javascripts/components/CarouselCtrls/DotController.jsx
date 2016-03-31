import React, { PropTypes } from 'react';

export default class DotController extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    let className = 'carousel-dots__dot';
    className += this.props.isActive ? ' carousel-dots__dot--active' : '';

    return (
      <li>
        <button className={className} onClick={this.handleClick} />
      </li>
    );
  }
}

DotController.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
