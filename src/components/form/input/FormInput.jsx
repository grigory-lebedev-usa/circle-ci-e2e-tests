import React, { useState } from "react";
import { inputTypes } from "../../../shared/enums";
import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const checkInputType =
    props.type !== inputTypes.password
      ? inputTypes.text
      : props.type === inputTypes.password && showPassword
      ? inputTypes.text
      : inputTypes.password;

  return (
    <div className={classes.input__container}>
      <input
        id={props.id}
        className={classes.input}
        type={checkInputType}
        placeholder=" "
        pattern={props.pattern}
      />
      <label htmlFor={props.id} className={classes.input__label}>
        {props.label}
      </label>
      {props.type === inputTypes.password && (
        <div className={classes.button__container}>
          <button
            className={
              showPassword
                ? `${classes.password__button} ${classes.password__button_active}`
                : classes.password__button
            }
            onClick={handleShowPassword}
          ></button>
        </div>
      )}
    </div>
  );
};

export default FormInput;
