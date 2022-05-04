import React, { useState, useEffect } from 'react';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormSelect from '../../shared/components/form-elements/FormSelect/FormSelect';
import FormButton from '../../shared/components/form-elements/FormButton/FormButton';
import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import {
  CLIENT_ROLE_ID,
  DRIVER_ROLE_ID,
  USER_ROLES
} from '../../shared/constants/user-roles.constants';

import { useRegistration } from './hooks/useRegistration';

import classes from './sign-up-form.module.css';
import { generateValidationError } from './helpers/generateValidationError';
import { initialErrorsState, initialFormState } from './sign-up-form.constants';

function SignUpForm() {
  const [isHasSectionDriver, setIsHasSectionDriver] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const { registerDriver, registerClient } = useRegistration();

  const { email, password, confirmPassword, firstName, lastName, role, make, model, year, color } =
    formState;

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
        role === USER_ROLES[DRIVER_ROLE_ID].value
      ) {
        setIsFormValid(true);
      } else setIsFormValid(false);
    } else if (
      errors.email.valid &&
      errors.password.valid &&
      errors.confirmPassword.valid &&
      errors.firstName.valid &&
      errors.lastName.valid &&
      role === USER_ROLES[CLIENT_ROLE_ID].value
    ) {
      setIsFormValid(true);
    } else setIsFormValid(false);
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
    role
  ]);

  const handleSelectChange = ({ id: roleId, value }) => {
    if (roleId === DRIVER_ROLE_ID) {
      setIsHasSectionDriver(true);
    } else setIsHasSectionDriver(false);
    setFormState({ ...formState, role: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setErrors(generateValidationError(name, value, errors, password));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isHasSectionDriver) {
      await registerDriver({
        email: email.toLowerCase(),
        password,
        firstName,
        lastName,
        role: role.toLowerCase(),
        car: { make, model, year, color }
      });
    } else {
      await registerClient({
        email: email.toLowerCase(),
        password,
        firstName,
        lastName,
        role: role.toLowerCase()
      });
    }
  };

  return (
    <form className={classes.form__wrapper} onSubmit={handleSubmit}>
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
              label="Role"
              items={USER_ROLES}
              onChange={handleSelectChange}
              value={role}
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
            <FormButton disabled={!isFormValid}>Register</FormButton>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
