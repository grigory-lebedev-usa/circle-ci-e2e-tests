import PropTypes from 'prop-types';

import { Modal as MuiModal } from '@mui/material';

import classes from './modal.module.css';
import { MODAL_SIZE, modalClasses } from './modal.constants';

function Modal({ children, isOpened, closeModal, size, hasCloseIcon }) {
  return (
    <MuiModal open={isOpened} onClose={closeModal}>
      <div role="alert" className={`${classes.modal__container} ${modalClasses[size]}`}>
        {hasCloseIcon && (
          <button type="button" className={classes.modal__close} onClick={closeModal}>
            +
          </button>
        )}
        {children}
      </div>
    </MuiModal>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  size: PropTypes.oneOf(Object.values(MODAL_SIZE)),
  hasCloseIcon: PropTypes.bool
};

Modal.defaultProps = {
  size: MODAL_SIZE.MEDIUM,
  hasCloseIcon: true
};

export default Modal;
