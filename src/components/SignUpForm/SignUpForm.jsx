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

import {
  CLIENT_ROLE_ID,
  DRIVER_ROLE_ID,
  USER_ROLES
} from '../../shared/constants/user-roles.constants';

import ProgressSpinner from '../../shared/components/ProgressSpinner/ProgressSpinner';

import classes from './sign-up-form.module.css';

function SignUpForm() {
  const [notifications, setNotifications] = useState([]);
  const [openedFormSelect, setOpenedFormSelect] = useState(false);
  const [isHasSectionDriver, setIsHasSectionDriver] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [visibilitySpinner, setVisibilitySpinner] = useState(false);
  const notificationsRef = useRef([]);

  const showSpinner = () => {
    setVisibilitySpinner(true);

    setTimeout(() => {
      setVisibilitySpinner(false);
    }, 3000);
  };

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

  const handleListItemClick = ({ id: roleId, value: listItemText }) => {
    if (roleId === DRIVER_ROLE_ID) {
      setIsHasSectionDriver(true);
    } else setIsHasSectionDriver(false);
    setSelectedValue(listItemText);
    setOpenedFormSelect(false);
  };

  const handleDropDownToggle = () => setOpenedFormSelect(!openedFormSelect);

  const [formValid, setFormValid] = useState(false);

  const [formState, setFormState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    make: '',
    model: '',
    year: '',
    color: ''
  });

  const { email, password, confirmPassword, firstName, lastName, make, model, year, color } =
    formState;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const [errors, setErrors] = useState({
    email: {
      valid: false,
      errorMessage: ''
    },
    password: {
      valid: false,
      errorMessage: ''
    },
    confirmPassword: {
      valid: false,
      errorMessage: ''
    },
    firstName: {
      valid: false,
      errorMessage: ''
    },
    lastName: {
      valid: false,
      errorMessage: ''
    },
    make: {
      valid: false,
      errorMessage: ''
    },
    model: {
      valid: false,
      errorMessage: ''
    },
    year: {
      valid: false,
      errorMessage: ''
    },
    color: {
      valid: false,
      errorMessage: ''
    }
  });

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        if (!value) {
          setErrors({
            ...errors,
            [name]: { valid: false, errorMessage: 'Email is required' }
          });
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value)) {
          setErrors({
            ...errors,
            [name]: { valid: false, errorMessage: 'Email none pass validation' }
          });
        } else {
          setErrors({
            ...errors,
            [name]: { valid: true, errorMessage: '' }
          });
        }
        break;
      case 'password':
        if (!value) {
          setErrors({
            ...errors,
            [name]: { valid: false, errorMessage: 'Password is required' }
          });
        } else if (value.length < 6 || value.length > 20) {
          setErrors({
            ...errors,
            [name]: {
              valid: false,
              errorMessage: 'Password need to be 6 characters and no more 20 characters'
            }
          });
        } else {
          setErrors({
            ...errors,
            [name]: { valid: true, errorMessage: '' }
          });
        }
        break;
      case 'confirmPassword':
        if (!value) {
          setErrors({
            ...errors,
            [name]: {
              valid: false,
              errorMessage: 'Confirm password is required'
            }
          });
        } else if (value !== password) {
          setErrors({
            ...errors,
            [name]: {
              valid: false,
              errorMessage: `Password doesn't match`
            }
          });
        } else {
          setErrors({
            ...errors,
            [name]: { valid: true, errorMessage: '' }
          });
        }
        break;
      case 'firstName':
        if (!value) {
          setErrors({
            ...errors,
            [name]: {
              valid: false,
              errorMessage: 'First name is required'
            }
          });
        } else {
          setErrors({
            ...errors,
            [name]: { valid: true, errorMessage: '' }
          });
        }
        break;
      case 'lastName':
        if (!value) {
          setErrors({
            ...errors,
            [name]: {
              valid: false,
              errorMessage: 'Last name is required'
            }
          });
        } else {
          setErrors({
            ...errors,
            [name]: { valid: true, errorMessage: '' }
          });
        }
        break;
      case 'make':
        if (!value) {
          setErrors({
            ...errors,
            [name]: {
              valid: false,
              errorMessage: 'Make is required'
            }
          });
        } else {
          setErrors({
            ...errors,
            [name]: { valid: true, errorMessage: '' }
          });
        }
        break;
      case 'model':
        if (!value) {
          setErrors({
            ...errors,
            [name]: {
              valid: false,
              errorMessage: 'Model is required'
            }
          });
        } else {
          setErrors({
            ...errors,
            [name]: { valid: true, errorMessage: '' }
          });
        }
        break;
      case 'year':
        if (!value) {
          setErrors({
            ...errors,
            [name]: {
              valid: false,
              errorMessage: 'Year is required'
            }
          });
        } else {
          setErrors({
            ...errors,
            [name]: { valid: true, errorMessage: '' }
          });
        }
        break;
      case 'color':
        if (!value) {
          setErrors({
            ...errors,
            [name]: {
              valid: false,
              errorMessage: 'Color is required'
            }
          });
        } else {
          setErrors({
            ...errors,
            [name]: { valid: true, errorMessage: '' }
          });
        }
        break;
      default:
        setErrors({
          ...errors
        });
        break;
    }
  };

  useEffect(() => {
    if (isHasSectionDriver) {
      if (
        errors.email.valid &&
        errors.password.valid &&
        errors.confirmPassword.valid &&
        errors.firstName.valid &&
        errors.lastName.valid &&
        errors.make.valid &&
        errors.model.valid &&
        errors.year.valid &&
        errors.color.valid &&
        selectedValue === USER_ROLES[DRIVER_ROLE_ID].value
      ) {
        setFormValid(true);
      } else setFormValid(false);
    } else if (
      errors.email.valid &&
      errors.password.valid &&
      errors.confirmPassword.valid &&
      errors.firstName.valid &&
      errors.lastName.valid &&
      selectedValue === USER_ROLES[CLIENT_ROLE_ID].value
    ) {
      setFormValid(true);
    } else setFormValid(false);
  }, [
    errors.color.valid,
    errors.confirmPassword.valid,
    errors.email.valid,
    errors.firstName.valid,
    errors.lastName.valid,
    errors.make.valid,
    errors.model.valid,
    errors.password.valid,
    errors.year.valid,
    isHasSectionDriver,
    selectedValue
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    showNotification('You have successfully registered', notificationTypes.success);
    showSpinner();
    setFormState({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      make: '',
      model: '',
      year: '',
      color: ''
    });
  };

  return (
    <form className={classes.form__wrapper} onSubmit={handleSubmit}>
      <ProgressSpinner isOpened={visibilitySpinner} />
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
              onBlur={handleInputBlur}
              errorMessage={errors.email.errorMessage}
            />
            {errors.email.errorMessage && (
              <span className={classes.error}>{errors.email.errorMessage}</span>
            )}
            <FormInput
              id="password"
              type={inputTypes.password}
              label="Password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              errorMessage={errors.password.errorMessage}
            />
            {errors.password.errorMessage && (
              <span className={classes.error}>{errors.password.errorMessage}</span>
            )}
            <FormInput
              id="confirm-password"
              type={inputTypes.password}
              label="Confirm password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              errorMessage={errors.confirmPassword.errorMessage}
            />
            {errors.confirmPassword.errorMessage && (
              <span className={classes.error}>{errors.confirmPassword.errorMessage}</span>
            )}
            <FormInput
              id="first-name"
              type={inputTypes.text}
              label="First name"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              errorMessage={errors.firstName.errorMessage}
            />
            {errors.firstName.errorMessage && (
              <span className={classes.error}>{errors.firstName.errorMessage}</span>
            )}
            <FormInput
              id="last-name"
              type={inputTypes.text}
              label="Last name"
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              errorMessage={errors.lastName.errorMessage}
            />
            {errors.lastName.errorMessage && (
              <span className={classes.error}>{errors.lastName.errorMessage}</span>
            )}
            <FormSelect
              id="role"
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
                onBlur={handleInputBlur}
                errorMessage={errors.make.errorMessage}
              />
              {errors.make.errorMessage && (
                <span className={classes.error}>{errors.make.errorMessage}</span>
              )}
              <FormInput
                id="model"
                type={inputTypes.text}
                label="Model"
                placeholder="Model"
                name="model"
                value={model}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                errorMessage={errors.model.errorMessage}
              />
              {errors.model.errorMessage && (
                <span className={classes.error}>{errors.model.errorMessage}</span>
              )}
              <FormInput
                id="year"
                type={inputTypes.number}
                label="Year"
                placeholder="Year"
                name="year"
                value={year}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                errorMessage={errors.year.errorMessage}
              />
              {errors.year.errorMessage && (
                <span className={classes.error}>{errors.year.errorMessage}</span>
              )}
              <FormInput
                id="color"
                type={inputTypes.text}
                label="Color"
                placeholder="Color"
                name="color"
                value={color}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                errorMessage={errors.color.errorMessage}
              />
              {errors.color.errorMessage && (
                <span className={classes.error}>{errors.color.errorMessage}</span>
              )}
            </div>
          )}
          <div className={classes.button}>
            <FormButton disabled={!formValid}>Register</FormButton>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
