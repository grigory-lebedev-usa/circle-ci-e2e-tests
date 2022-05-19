import React from 'react';

import PropTypes from 'prop-types';

import classes from './modal.module.css';

function Modal({ children, isOpened, closeModal, className }) {
  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      role="alertdialog"
      className={`${classes.modal__container} ${isOpened ? classes.modal__container_active : ''}`}
      onClick={closeModal}>
      <div
        role="alert"
        className={`${classes.modal__content} ${className}`}
        onClick={handleStopPropagation}>
        <button type="button" className={classes.modal__close} onClick={closeModal}>
          +
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  className: PropTypes.string
};

Modal.defaultProps = {
  className: ''
};

export default Modal;
