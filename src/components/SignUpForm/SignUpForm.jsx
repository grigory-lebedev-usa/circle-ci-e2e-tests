import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormSelect from '../../shared/components/form-elements/FormSelect/FormSelect';
import FormButton from '../../shared/components/form-elements/FormButton/FormButton';
import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import { USER_ROLES, DRIVER_ROLE_ID } from '../../constants/user-roles.constants';

// import { useRegistration } from './hooks/useRegistration';

import { optionsValidate } from '../helpers/optionsValidate';

import classes from './sign-up-form.module.css';
import { initialFormState } from './sign-up-form.constants';

function SignUpForm() {
  const [isHasSectionDriver, setIsHasSectionDriver] = useState(false);
  // const { registerDriver, registerClient } = useRegistration();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ defaultValues: initialFormState, mode: 'onTouched' });

  const handleSelectChange = ({ id: roleId }) => {
    if (roleId === DRIVER_ROLE_ID) {
      setIsHasSectionDriver(true);
    } else setIsHasSectionDriver(false);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={classes.form__wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.form__content}>
        <h1 className={classes.form__title}>Sign Up</h1>
        <div className={classes.form__container}>
          <div>
            <FormInput
              id="email"
              type={inputTypes.email}
              label="Email"
              placeholder="Email"
              {...register('email', optionsValidate.email)}
              className={classes.input}
              error={errors.email?.message}
            />
            <FormInput
              id="password"
              type={inputTypes.password}
              label="Password"
              placeholder="Password"
              {...register('password', optionsValidate.password)}
              className={classes.input}
              error={errors.password?.message}
            />
            <FormInput
              id="confirm-password"
              type={inputTypes.password}
              label="Confirm password"
              placeholder="Confirm password"
              {...register('confirmPassword', {
                required: 'Confirm password is required',
                validate: (value) => {
                  if (watch('password') !== value) {
                    return 'Your password do no match';
                  }
                  return false;
                }
              })}
              className={classes.input}
              error={errors.confirmPassword?.message}
            />
            <FormInput
              id="first-name"
              type={inputTypes.text}
              label="First name"
              placeholder="First name"
              {...register('firstName', { required: true })}
              className={classes.input}
              error={errors.firstName?.message}
            />
            <FormInput
              id="last-name"
              type={inputTypes.text}
              label="Last name"
              placeholder="Last name"
              {...register('lastName', { required: true })}
              className={classes.input}
              error={errors.lastName?.message}
            />
            <FormSelect id="role" label="Role" options={USER_ROLES} onChange={handleSelectChange} />
          </div>
          {isHasSectionDriver && (
            <div className={classes.car__block}>
              <p className={classes.car__title}>Car</p>
              <FormInput
                id="make"
                type={inputTypes.text}
                label="Make"
                placeholder="Make"
                {...register('make', { required: true })}
                className={classes.input}
                error={errors.make?.message}
              />
              <FormInput
                id="model"
                type={inputTypes.text}
                label="Model"
                placeholder="Model"
                {...register('model', { required: true })}
                className={classes.input}
                error={errors.model?.message}
              />
              <FormInput
                id="year"
                type={inputTypes.number}
                label="Year"
                placeholder="Year"
                {...register('year', { required: true })}
                className={classes.input}
                error={errors.year?.message}
              />
              <FormInput
                id="color"
                type={inputTypes.text}
                label="Color"
                placeholder="Color"
                {...register('color', { required: true })}
                className={classes.input}
                error={errors.color?.message}
              />
            </div>
          )}
          <FormButton className={classes.button} disabled={!isValid}>
            Register
          </FormButton>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
