import React, { PropTypes } from 'react';

export default class PrevController extends React.Component {
  shouldComponentUpdate() {
    return this.props.currentSlide === 0;
  }

  render() {
    let className = 'carousel-ctrl carousel-ctrl--prev';
    className += this.props.currentSlide === 0 ? ' carousel-ctrl--disabled' : '';

    return (
      <button className={className} onClick={this.props.previousSlide} />
    );
  }
}

PrevController.propTypes = {
  currentSlide: PropTypes.number,
  previousSlide: PropTypes.func,
};
