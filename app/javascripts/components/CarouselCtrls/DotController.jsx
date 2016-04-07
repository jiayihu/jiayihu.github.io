import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class DotController extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    const className = classnames('carousel-dots__dot', {
      'carousel-dots__dot--active': this.props.isActive,
    });

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
