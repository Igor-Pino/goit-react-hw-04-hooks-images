import { createPortal } from 'react-dom';
import { Component } from 'react';
import propTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendelKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendelKeyDown);
    document.body.style.overflow = null;
  }

  hendelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.showModal();
    }
  };

  hendelBeckdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.showModal();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.hendelBeckdropClick}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  showModal: propTypes.func.isRequired,
};

export default Modal;
