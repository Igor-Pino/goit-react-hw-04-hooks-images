import { createPortal } from 'react-dom';
import {useEffect} from 'react';
import propTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal (props) {

useEffect(()=>{
  window.addEventListener('keydown', hendelKeyDown);
  document.body.style.overflow = 'hidden';

  return ()=> {
    window.removeEventListener('keydown', hendelKeyDown);
    document.body.style.overflow = null;
  }
  },)

  const hendelKeyDown = e => {
    if (e.code === 'Escape') {
      props.showModal();
    }
  };

  const hendelBeckdropClick = e => {
    if (e.currentTarget === e.target) {
      props.showModal();
    }
  };

  
    return createPortal(
      <div className={s.Overlay} onClick={hendelBeckdropClick}>
        <div className={s.Modal}>{props.children}</div>
      </div>,
      modalRoot,
    );
  
}

Modal.propTypes = {
  showModal: propTypes.func.isRequired,
};


