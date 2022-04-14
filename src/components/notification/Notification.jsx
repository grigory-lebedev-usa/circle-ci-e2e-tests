import React, { useState } from "react";
import classes from "./Notification.module.css";
import { notificationTypes } from "../../shared/enums";

const Notification = ({ text = "", type }) => {
  const [visible, setVisible] = useState(true);
  setTimeout(() => setVisible(false), 8000);
  return (
    <div
      className={
        visible && type === notificationTypes.success
          ? `${classes.notification__container} ${classes.notification__container_success} ${classes.notification__container_visible}`
          : visible && type === notificationTypes.warning
          ? `${classes.notification__container} ${classes.notification__container_warning} ${classes.notification__container_visible}`
          : visible && type === notificationTypes.error
          ? `${classes.notification__container} ${classes.notification__container_error} ${classes.notification__container_visible}`
          : classes.notification__container
      }
    >
      <p className={classes.notification__text}>{text}</p>
      <button
        className={classes.notification__close}
        onClick={() => setVisible(false)}
      ></button>
    </div>
  );
};

export default Notification;
