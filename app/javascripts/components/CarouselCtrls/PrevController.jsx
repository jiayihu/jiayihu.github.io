import React, { PropTypes } from 'react';

export default class PrevController extends React.Component {
  shouldComponentUpdate() {
    return this.props.currentSlide === 0;
  }

  render() {
    let className = 'arrow arrow--prev';
    className += this.props.currentSlide === 0 ? ' arrow--disabled' : '';

    return (
      <button className={className} onClick={this.props.previousSlide} />
    );
  }
}

PrevController.propTypes = {
  currentSlide: PropTypes.number,
  previousSlide: PropTypes.func,
};
