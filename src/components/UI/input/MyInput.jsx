import React, { useState } from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => {

	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => {
		setShowPassword(showPassword ? false : true);
	}
  
  const inputType = props.type !== 'password' ? 'text' : props.type === 'password' && showPassword ? 'text' : 'password';

	return (
		<div className={classes.input__container}>
			<input id={props.id} className={classes.input} type={inputType} placeholder=' ' pattern={props.pattern} />
			<label htmlFor={props.id} className={classes.input__label}>{props.label}</label>
			  {props.type === 'password' &&
				<div className={classes.button__container}>
					<button className={showPassword ? `${classes.password__button} ${classes.password__button_active}` : classes.password__button} onClick={handleShowPassword}></button>
				</div>}
		</div>
	);
};

export default MyInput;