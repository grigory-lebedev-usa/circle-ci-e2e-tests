import React from 'react';
import classes from './Modal.module.css';

const Modal = ({children, visible, setVisible}) => {
  return (
		<div className={visible ? `${classes.modal__container} ${classes.modal__container_active}` : classes.modal__container} onClick={() => setVisible(false)}>
			<div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>
				<button className={classes.modal__close} onClick={() => setVisible(false)}></button>
				{children}
			</div>
		</div>
	)
}

export default Modal;