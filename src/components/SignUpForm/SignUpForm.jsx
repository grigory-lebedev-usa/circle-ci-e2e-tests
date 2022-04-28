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

import useForm from '../../shared/hooks/useForm';

import classes from './sign-up-form.module.css';

function SignUpForm() {
  const [notifications, setNotifications] = useState([]);
  const [openedFormSelect, setOpenedFormSelect] = useState(false);
  const [isHasSectionDriver, setIsHasSectionDriver] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

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

  const handleListItemClick = ({ id: roleId, value: listItemText }) => {
    if (roleId === DRIVER_ROLE_ID) {
      setIsHasSectionDriver(true);
    } else setIsHasSectionDriver(false);
    setSelectedValue(listItemText);
    setOpenedFormSelect(false);
  };

  const handleDropDownToggle = () => setOpenedFormSelect(!openedFormSelect);

  const onSubmit = (formValues) => {
    if (selectedValue === 'Driver') {
      const userDriver = {
        email: formValues.email,
        password: formValues.password,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        role: selectedValue.toLowerCase(),
        car: {
          make: formValues.make,
          model: formValues.model,
          year: Number(formValues.year),
          color: formValues.color
        }
      };
      console.log(userDriver);
    } else {
      const userClient = {
        email: formValues.email,
        password: formValues.password,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        role: selectedValue.toLowerCase()
      };
      console.log(userClient);
    }
  };

  const { formState, handleInputChange, handleSubmit } = useForm(
    {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      make: '',
      model: '',
      year: '',
      color: ''
    },
    onSubmit
  );

  const { email, password, confirmPassword, firstName, lastName, make, model, year, color } =
    formState;

  return (
    <form className={classes.form__wrapper} onSubmit={handleSubmit}>
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
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <FormInput
              id="password"
              type={inputTypes.password}
              label="Password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <FormInput
              id="confirm-password"
              type={inputTypes.password}
              label="Confirm password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
            />
            <FormInput
              id="first-name"
              type={inputTypes.text}
              label="First name"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
            />
            <FormInput
              id="last-name"
              type={inputTypes.text}
              label="Last name"
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
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
                name="make"
                value={make}
                onChange={handleInputChange}
              />
              <FormInput
                id="model"
                type={inputTypes.text}
                label="Model"
                placeholder="Model"
                name="model"
                value={model}
                onChange={handleInputChange}
              />
              <FormInput
                id="year"
                type={inputTypes.text}
                label="Year"
                placeholder="Year"
                name="year"
                value={year}
                onChange={handleInputChange}
              />
              <FormInput
                id="color"
                type={inputTypes.text}
                label="Color"
                placeholder="Color"
                name="color"
                value={color}
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className={classes.button}>
            <FormButton>Register</FormButton>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
