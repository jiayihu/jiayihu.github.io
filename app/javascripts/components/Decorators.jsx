import React, { PropTypes } from 'react';

class PrevController extends React.Component {
  shouldComponentUpdate() {
    return this.props.currentSlide === 0;
  }

  render() {
    console.log(this.props);
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

class NextController extends React.Component {
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

const Decorators = [
  {
    component: PrevController,
    position: 'CenterLeft',
  },
  {
    component: NextController,
    position: 'CenterRight',
  },
];

export default Decorators;
