import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class NextController extends React.Component {
  shouldComponentUpdate() {
    return this.props.currentSlide === this.props.slideCount - 1;
  }

  render() {
    const className = classnames('arrow', 'arrow--next', {
      'arrow--disabled': this.props.currentSlide === this.props.slideCount - 1,
    });

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
