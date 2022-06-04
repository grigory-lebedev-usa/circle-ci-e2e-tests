import PropTypes from 'prop-types';

import { Modal as MuiModal } from '@mui/material';

import classes from './modal.module.css';

function Modal({ children, isOpened, closeModal }) {
  return (
    <MuiModal open={isOpened} onClose={closeModal}>
      <div role="alert" className={classes.modal__content}>
        <button type="button" className={classes.modal__close} onClick={closeModal}>
          +
        </button>
        {children}
      </div>
    </MuiModal>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default Modal;
