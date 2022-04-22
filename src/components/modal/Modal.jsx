import React from 'react';
import classes from './Modal.module.css';

function Modal({ children, isOpened, closeModal }) {
  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      role="alertdialog"
      className={`${classes.modal__container} ${isOpened ? classes.modal__container_active : ''}`}
      onClick={closeModal}>
      <div role="alert" className={classes.modal__content} onClick={handleStopPropagation}>
        <button type="button" className={classes.modal__close} onClick={closeModal}>
          +
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
