import { useEffect, useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormSelect from '../../shared/components/form-elements/FormSelect/FormSelect';
import { INPUT_TYPES } from '../../shared/components/form-elements/FormInput/form-input.constants';

import {
  BUTTON_TYPES,
  BUTTON_VARIANTS,
  BUTTON_COLORS
} from '../../shared/components/Button/button.constants';

import Button from '../../shared/components/Button/Button';

import classes from './sign-up-form.module.css';
import { USER_SELECT } from './sign-up-form.constants';

function SignUpForm() {
  const [isHasSectionDriver, setIsSectionDriver] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm({ mode: 'onTouched' });

  useEffect(() => {
    setIsSectionDriver(true);
  }, []);

  const onSubmit = (data) => console.log(data);
  return (
    <form className={classes.form__wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.form__content}>
        <h1 className={classes.form__title}>Sign Up</h1>
        <div className={classes.form__container}>
          <div>
            <Controller
              render={({ field }) => (
                <FormInput
                  id="email"
                  placeholder="Email"
                  label="Email"
                  type={INPUT_TYPES.EMAIL}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email?.message : ''}
                  {...field}
                />
              )}
              name="email"
              control={control}
              rules={{ required: 'Email is required' }}
            />
            <Controller
              render={({ field }) => (
                <FormInput
                  id="password"
                  placeholder="Password"
                  label="Password"
                  type={INPUT_TYPES.PASSWORD}
                  className={classes.form__input}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password?.message : ''}
                  {...field}
                />
              )}
              name="password"
              control={control}
              rules={{ required: 'Password is required' }}
            />
            <Controller
              render={({ field }) => (
                <FormInput
                  id="confirm-password"
                  placeholder="Confirm password"
                  label="Confirm password"
                  type={INPUT_TYPES.PASSWORD}
                  className={classes.form__input}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword ? errors.confirmPassword?.message : ''}
                  {...field}
                />
              )}
              name="confirmPassword"
              control={control}
              rules={{ required: 'Confirm password is required' }}
            />
            <Controller
              render={({ field }) => (
                <FormInput
                  id="first-name"
                  placeholder="First name"
                  label="First name"
                  type={INPUT_TYPES.TEXT}
                  className={classes.form__input}
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName?.message : ''}
                  {...field}
                />
              )}
              name="firstName"
              control={control}
              rules={{ required: 'First name is required' }}
            />
            <Controller
              render={({ field }) => (
                <FormInput
                  id="last-name"
                  placeholder="Last name"
                  label="Last name"
                  type={INPUT_TYPES.TEXT}
                  className={classes.form__input}
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName?.message : ''}
                  {...field}
                />
              )}
              name="lastName"
              control={control}
              rules={{ required: 'Last name is required' }}
            />
            <Controller
              render={({ field }) => (
                <FormSelect
                  id="role"
                  label="Role"
                  items={USER_SELECT}
                  className={classes.form__select}
                  error={!!errors.role}
                  helperText={errors.role ? errors.role?.message : ''}
                  {...field}
                />
              )}
              name="role"
              control={control}
              rules={{ required: 'Role is required' }}
            />
          </div>
          {isHasSectionDriver && (
            <div className={classes.car__block}>
              <p className={classes.car__title}>Car</p>
              <Controller
                render={({ field }) => (
                  <FormInput
                    id="make"
                    type={INPUT_TYPES.TEXT}
                    label="Make"
                    placeholder="Make"
                    className={classes.form__input}
                    error={!!errors.make}
                    helperText={errors.make ? errors.make?.message : ''}
                    {...field}
                  />
                )}
                name="make"
                control={control}
                rules={{ required: 'Make is required' }}
              />
              <Controller
                render={({ field }) => (
                  <FormInput
                    id="model"
                    type={INPUT_TYPES.TEXT}
                    label="Model"
                    placeholder="Model"
                    className={classes.form__input}
                    error={!!errors.model}
                    helperText={errors.model ? errors.model?.message : ''}
                    {...field}
                  />
                )}
                name="model"
                control={control}
                rules={{ required: 'Model is required' }}
              />
              <Controller
                render={({ field }) => (
                  <FormInput
                    id="year"
                    type={INPUT_TYPES.NUMBER}
                    label="Year"
                    placeholder="Year"
                    className={classes.form__input}
                    error={!!errors.year}
                    helperText={errors.year ? errors.year?.message : ''}
                    {...field}
                  />
                )}
                name="year"
                control={control}
                rules={{ required: 'Year is required' }}
              />
              <Controller
                render={({ field }) => (
                  <FormInput
                    id="color"
                    type={INPUT_TYPES.TEXT}
                    label="Color"
                    placeholder="Color"
                    className={classes.form__input}
                    error={!!errors.color}
                    helperText={errors.color ? errors.color?.message : ''}
                    {...field}
                  />
                )}
                name="color"
                control={control}
                rules={{ required: 'Color is required' }}
              />
            </div>
          )}
          <Button
            variant={BUTTON_VARIANTS.FORM}
            disabled={!isValid}
            type={BUTTON_TYPES.SUBMIT}
            color={BUTTON_COLORS.FORM}
            className={classes.form__button}
          >
            Register
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
