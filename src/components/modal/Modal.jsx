import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ children, isOpened, closeModal }) => {

	const handleStopPropagation = (e) => {
		e.stopPropagation();
	}

	return (
		<div className={`${classes.modal__container} ${isOpened ? classes.modal__container_active : ''}`} onClick={closeModal}>
			<div className={classes.modal__content} onClick={handleStopPropagation}>
				<button className={classes.modal__close} onClick={closeModal}>+</button>
				{children}
			</div>
		</div>
	)
}

export default Modal;