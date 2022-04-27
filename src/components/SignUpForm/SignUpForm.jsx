import React, { useState, useCallback, useRef } from 'react';

// import uniqid from 'uniqid';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormSelect from '../../shared/components/form-elements/FormSelect/FormSelect';
import FormButton from '../../shared/components/form-elements/FormButton/FormButton';
import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import Notifications from '../../shared/components/Notifications/Notifications';

// import { MAX_NOTIFICATION_NUMBER } from '../../shared/components/Notifications/notifications.constants';

// import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';

import useClickOutside from '../../shared/hooks/useClickOutside';

import { DRIVER_ROLE_ID, USER_ROLES } from '../../shared/constants/user-roles.constants';

import classes from './sign-up-form.module.css';

function SignUpForm() {
  const [notifications, setNotifications] = useState([]);
  const [openedFormSelect, setOpenedFormSelect] = useState(false);
  const [isHasSectionDriver, setIsHasSectionDriver] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [formValid, setFormValid] = useState(true);
  const notificationsRef = useRef([]);

  const deleteNotification = useCallback((id) => {
    notificationsRef.current = notificationsRef.current.filter(
      (notification) => notification.id !== id
    );
    setNotifications(notificationsRef.current);
  }, []);

  // const showNotification = (text, type) => {
  //   if (notifications.length === MAX_NOTIFICATION_NUMBER) {
  //     notificationsRef.current.shift();
  //   }
  //   notificationsRef.current.push({ text, type, id: uniqid() });
  //   setNotifications([...notificationsRef.current]);
  // };

  const handleListItemClick = ({ id, value }) => {
    if (id === DRIVER_ROLE_ID) {
      setIsHasSectionDriver(true);
    } else setIsHasSectionDriver(false);
    setSelectedValue(value);
    setOpenedFormSelect(false);
  };

  const handleDropDownToggle = () => setOpenedFormSelect(!openedFormSelect);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
              onChange={handleEmailChange}
            />
            <FormInput
              id="pass"
              type={inputTypes.password}
              label="Password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
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
            <FormSelect
              isOpened={openedFormSelect}
              label="Role"
              items={USER_ROLES}
              onToggle={handleDropDownToggle}
              ref={useClickOutside(() => setOpenedFormSelect(false))}
              onListItemClick={handleListItemClick}
              value={selectedValue}
            />
          </div>
          {isHasSectionDriver && (
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
