import React, { useState } from "react";
import Notification from "../../notification/Notification";
import classes from "./FormButton.module.css";

const FormButton = (props) => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Notification text="good job" type="success" visible={visible} setVisible={setVisible}/>
      <button className={classes.button} onClick={() => setVisible(true)}>{props.label}</button>
    </div>
  );
};

export default FormButton;
