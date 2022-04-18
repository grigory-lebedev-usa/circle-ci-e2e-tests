import React, { useState } from "react";
import classes from "./FormCheckbox.module.css";

const FormCheckbox = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={classes.checkbox__container}
      onClick={() => setClicked(!clicked)}
    >
      <input
        id={props.id}
        className={
          clicked
            ? `${classes.custom__checkbox} ${classes.custom__checkbox_active}`
            : classes.custom__checkbox
        }
        type="checkbox"
      />
      <label id={props.id} className={classes.checkbox__label}>
        {props.label}
      </label>
    </div>
  );
};

export default FormCheckbox;
