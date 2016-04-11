import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default class Modal extends React.Component {
  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal(e) {
    if (e.type === 'keydown' && e.keyCode !== 27) {
      return;
    }

    this.props.toggleModal(false);
  }

  render() {
    const className = classnames('modal', this.props.className, 'modal--fade', {
      'modal--show': this.props.isOpen,
    });

    return (
      <div>
        <div className={className}>
          <div className="modal__content">
            <h3 className="modal__heading">{this.props.title}</h3>
            <div>
              {this.props.children}
            </div>
            <button className="modal__close" onClick={this.closeModal}>&times;</button>
          </div>
        </div>
        <div className="modal-overlay" onClick={this.closeModal} />
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
