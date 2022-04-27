import React, { useState, useCallback, useRef } from 'react';

// import uniqid from 'uniqid';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormDropDown from '../../shared/components/form-elements/FormDropDown/FormDropDown';
import FormButton from '../../shared/components/form-elements/FormButton/FormButton';
import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import Notifications from '../../shared/components/Notifications/Notifications';

// import { MAX_NOTIFICATION_NUMBER } from '../../shared/components/Notifications/notifications.constants';

// import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';

import classes from './sign-up-form.module.css';

function SignUpForm() {
  const [notifications, setNotifications] = useState([]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [formValid, setFormValid] = useState(true);
  const notificationsRef = useRef([]);

  // const showNotification = (text, type) => {
  //   if (notifications.length === MAX_NOTIFICATION_NUMBER) {
  //     notificationsRef.current.shift();
  //   }
  //   notificationsRef.current.push({ text, type, id: uniqid() });
  //   setNotifications([...notificationsRef.current]);
  // };

  const deleteNotification = useCallback((id) => {
    notificationsRef.current = notificationsRef.current.filter(
      (notification) => notification.id !== id
    );
    setNotifications(notificationsRef.current);
  }, []);

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const [isDriver, setIsDriver] = useState(false);

  const handleDriver = (bool) => {
    if (bool) {
      setIsDriver(true);
    } else setIsDriver(false);
  };

  return (
    <div className={classes.form__wrapper}>
      <Notifications notifications={notifications} onDelete={deleteNotification} />
      <div className={classes.form__content}>
        <h1 className={classes.form__title}>Sign Up</h1>
        <div className={classes.form__container}>
          <div>
            <FormInput
              id="email"
              type={inputTypes.email}
              label="Email"
              placeholder="Email"
              value={email}
              onChange={handlerEmail}
            />
            <FormInput
              id="pass"
              type={inputTypes.password}
              label="Password"
              placeholder="Password"
              value={password}
              onChange={handlerPassword}
            />
            <FormInput
              id="confpass"
              type={inputTypes.password}
              label="Confirm password"
              placeholder="Confirm password"
            />
            <FormInput
              id="fname"
              type={inputTypes.text}
              label="First name"
              placeholder="First name"
            />
            <FormInput
              id="lname"
              type={inputTypes.text}
              label="Last name"
              placeholder="Last name"
            />
            <FormDropDown
              title="Role"
              items={[
                { id: 1, value: 'Client' },
                { id: 2, value: 'Driver' }
              ]}
              select={handleDriver}
            />
          </div>
          {isDriver && (
            <div className={classes.car__block}>
              <p className={classes.car__title}>Car</p>
              <FormInput id="make" type={inputTypes.text} label="Make" placeholder="Make" />
              <FormInput id="model" type={inputTypes.text} label="Model" placeholder="Model" />
              <FormInput id="year" type={inputTypes.text} label="Year" placeholder="Year" />
              <FormInput id="color" type={inputTypes.text} label="Color" placeholder="Color" />
            </div>
          )}
          <div className={classes.button}>
            <FormButton>Register</FormButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
