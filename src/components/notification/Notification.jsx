import React, { useCallback, useEffect} from "react";
import classes from "./Notification.module.css";
import { notificationTypes } from "../../shared/enums";

const Notification = ({ list, setList}) => {

  const deleteNotification = useCallback(id => {
    const NotificationItem = list.filter(e => e.id !== id);
    setList(NotificationItem);
  }, [list, setList]);

  useEffect(() => {
    if (list.length > 4) {
      deleteNotification(list[0].id);
    }
    const timeout = setTimeout(() => {
      if(list.length) {
        deleteNotification(list[0].id);
      }
    }, 8000);
    return () => {
      clearTimeout(timeout);
    }
  }, [list, deleteNotification]);

  return (
    <div className={classes.notification__container}>
      {
        list.map((notification, i) => (
          <div key={i} className={notification.type === notificationTypes.success
            ? `${classes.notification} ${classes.notification__success}`
            : notification.type === notificationTypes.warning
            ? `${classes.notification} ${classes.notification__warning}`
            : notification.type === notificationTypes.error
            ? `${classes.notification} ${classes.notification__error}`
            : classes.notification}>
              <p className={classes.notification__text}>{notification.text}</p>
              <button
                className={classes.notification__close}
                onClick={() => deleteNotification(notification.id)}
              ></button>
          </div>
        ))
      }
    </div>
  );
};

export default Notification;
