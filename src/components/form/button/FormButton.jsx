import React from "react";
import classes from "./FormButton.module.css";

const FormButton = (props) => {
  return (
    <div>
      <button className={classes.button}>{props.label}</button>
    </div>
  );
};

export default FormButton;
