import React, { useState, useCallback, useRef, useEffect } from 'react';

import uniqid from 'uniqid';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormSelect from '../../shared/components/form-elements/FormSelect/FormSelect';
import FormButton from '../../shared/components/form-elements/FormButton/FormButton';
import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import Notifications from '../../shared/components/Notifications/Notifications';

import { MAX_NOTIFICATION_NUMBER } from '../../shared/components/Notifications/notifications.constants';

import { notificationTypes } from '../../shared/components/Notifications/components/Notification/notification.constants';

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
  const [confPassword, setConfPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [car, setCar] = useState({ make, model, year, color });
  const [formValid, setFormValid] = useState(false);
  const notificationsRef = useRef([]);

  useEffect(() => {
    setFormValid(false);
  }, []);

  const deleteNotification = useCallback((id) => {
    notificationsRef.current = notificationsRef.current.filter(
      (notification) => notification.id !== id
    );
    setNotifications(notificationsRef.current);
  }, []);

  const showNotification = (text, type) => {
    if (notifications.length === MAX_NOTIFICATION_NUMBER) {
      notificationsRef.current.shift();
    }
    notificationsRef.current.push({ text, type, id: uniqid() });
    setNotifications([...notificationsRef.current]);
  };

  const handleListItemClick = ({ id, value }) => {
    if (id === DRIVER_ROLE_ID) {
      setIsHasSectionDriver(true);
    } else setIsHasSectionDriver(false);
    setSelectedValue(value);
    setRole(value.toLowerCase());
    setOpenedFormSelect(false);
  };

  const handleDropDownToggle = () => setOpenedFormSelect(!openedFormSelect);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (!validEmail.test(String(e.target.value).toLowerCase())) {
      console.log('no valid');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6 || e.target.value.length > 20) {
      console.log('no valid password');
    }
  };

  const handleConfPassword = (e) => {
    setConfPassword(e.target.value);
    if (password !== e.target.value) {
      console.log('no valid confpass');
    } else console.log('done');
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(Number(e.target.value));
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const Car = {
    make,
    model,
    year,
    color
  };

  const userClient = {
    email,
    password,
    firstName,
    lastName,
    role
  };

  const userDriver = {
    email,
    password,
    firstName,
    lastName,
    role,
    car
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (role === 'driver') {
      setCar(Car);
      console.log(userDriver);
    } else console.log(userClient);
    showNotification('successfuly registration', notificationTypes.success);
  };

  return (
    <form className={classes.form__wrapper}>
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
              id="password"
              type={inputTypes.password}
              label="Password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <FormInput
              id="confirm-password"
              type={inputTypes.password}
              label="Confirm password"
              placeholder="Confirm password"
              value={confPassword}
              onChange={handleConfPassword}
            />
            <FormInput
              id="first-name"
              type={inputTypes.text}
              label="First name"
              placeholder="First name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <FormInput
              id="last-name"
              type={inputTypes.text}
              label="Last name"
              placeholder="Last name"
              value={lastName}
              onChange={handleLastNameChange}
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
              <FormInput
                id="make"
                type={inputTypes.text}
                label="Make"
                placeholder="Make"
                onChange={handleMakeChange}
                value={make}
              />
              <FormInput
                id="model"
                type={inputTypes.text}
                label="Model"
                placeholder="Model"
                onChange={handleModelChange}
                value={model}
              />
              <FormInput
                id="year"
                type={inputTypes.text}
                label="Year"
                placeholder="Year"
                onChange={handleYearChange}
                value={year}
              />
              <FormInput
                id="color"
                type={inputTypes.text}
                label="Color"
                placeholder="Color"
                onChange={handleColorChange}
                value={color}
              />
            </div>
          )}
          <div className={classes.button}>
            <FormButton disabled={!formValid} onClick={handleButtonClick}>
              Register
            </FormButton>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
