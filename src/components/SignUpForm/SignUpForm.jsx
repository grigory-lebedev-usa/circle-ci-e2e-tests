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

import { USER_ROLES } from '../../constants/user-roles.constants';

import { OPTIONS_VALIDATE } from '../helpers/OPTIONS_VALIDATE';

import { useRegistration } from '../../api/hooks/useRegistration';

import classes from './sign-up-form.module.css';
import { defaultUserValues, USER_SELECT } from './sign-up-form.constants';

function SignUpForm() {
  const [isHasSectionDriver, setIsSectionDriver] = useState(false);
  const { register } = useRegistration();
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid }
  } = useForm({ defaultValues: defaultUserValues, mode: 'onTouched' });

  useEffect(() => {
    const subscribe = watch(({ role }) => {
      setIsSectionDriver(role.toLowerCase() === USER_ROLES.DRIVER);
    });
    return () => subscribe.unsubscribe();
  }, [watch]);

  const onSubmit = ({ email, password, firstName, lastName, role, make, model, year, color }) => {
    if (isHasSectionDriver) {
      register({
        email: email.toLowerCase(),
        password,
        firstName,
        lastName,
        role: role.toLowerCase(),
        car: {
          make,
          model,
          year,
          color
        }
      });
    } else
      register({
        email: email.toLowerCase(),
        password,
        firstName,
        lastName,
        role: role.toLowerCase()
      });
  };

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
              rules={OPTIONS_VALIDATE.EMAIL}
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
              rules={OPTIONS_VALIDATE.PASSWORD}
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
              rules={{
                required: 'Confirm password is required',
                validate: (value) => {
                  if (watch('password') !== value) {
                    return 'Your passwords do no match';
                  }
                  return () => {};
                }
              }}
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
              rules={OPTIONS_VALIDATE.FIRST_NAME}
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
              rules={OPTIONS_VALIDATE.LAST_NAME}
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
              rules={OPTIONS_VALIDATE.ROLE}
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
                rules={OPTIONS_VALIDATE.MAKE}
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
                rules={OPTIONS_VALIDATE.MODEL}
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
                rules={OPTIONS_VALIDATE.YEAR}
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
                rules={OPTIONS_VALIDATE.COLOR}
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
