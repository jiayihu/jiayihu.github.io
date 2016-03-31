import React, { PropTypes } from 'react';

export default class NextController extends React.Component {
  shouldComponentUpdate() {
    return this.props.currentSlide === this.props.slideCount - 1;
  }

  render() {
    let className = 'carousel-ctrl carousel-ctrl--next';
    className += this.props.currentSlide === this.props.slideCount - 1 ? ' carousel-ctrl--disabled' : '';

    return (
      <button className={className} onClick={this.props.nextSlide} />
    );
  }
}

NextController.propTypes = {
  currentSlide: PropTypes.number,
  nextSlide: PropTypes.func,
  slideCount: PropTypes.number,
};
