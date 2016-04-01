import React, { PropTypes } from 'react';

export default class NextController extends React.Component {
  shouldComponentUpdate() {
    return this.props.currentSlide === this.props.slideCount - 1;
  }

  render() {
    let className = 'arrow arrow--next';
    className += this.props.currentSlide === this.props.slideCount - 1 ? ' arrow--disabled' : '';

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
