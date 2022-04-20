import React from "react";
import classes from "./FormButton.module.css";

const FormButton = ({children, ...props}) => {
  return (
    <div>
      <button  {...props} className={classes.button}>{children}</button>
    </div>
  );
};

export default FormButton;
