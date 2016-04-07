import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class PrevController extends React.Component {
  shouldComponentUpdate() {
    return this.props.currentSlide === 0;
  }

  render() {
    const className = classnames('arrow', 'arrow--prev', {
      'arrow--disabled': this.props.currentSlide === 0,
    });

    return (
      <button className={className} onClick={this.props.previousSlide} />
    );
  }
}

PrevController.propTypes = {
  currentSlide: PropTypes.number,
  previousSlide: PropTypes.func,
};
