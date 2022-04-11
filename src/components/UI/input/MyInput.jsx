import React, { useState } from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => {

	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => {
		setShowPassword(showPassword ? false : true);
	}

  const classA = classes.password__button;
  const classB = classA + ' ' + classes.password__button_active;
  const typeIf = props.type !== 'password' ? 'text' : props.type === 'password' && showPassword ? 'text' : 'password';

	return (
		<div className={classes.input__container}>
			<input id={props.id} className={classes.input} type={typeIf} placeholder=' ' pattern={props.pattern} />
			<label htmlFor={props.id} className={classes.input__label}>{props.label}</label>
			  {props.type === 'password' &&
				<div className={classes.button__container}>
					<button className={showPassword ? classB : classA} onClick={handleShowPassword}></button>
				</div>}
		</div>
	);
};

export default MyInput;