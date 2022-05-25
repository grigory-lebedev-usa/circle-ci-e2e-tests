import React, { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormCheckbox from '../../shared/components/form-elements/FormCheckbox/FormCheckbox';
import { INPUT_TYPES } from '../../shared/components/form-elements/FormInput/form-input.constants';
import Link from '../../shared/components/Link/Link';
import useAuth from '../../shared/hooks/useAuth';
import { PUBLIC_ROUTES } from '../../constants/app.constants';
import Button from '../../shared/components/Button/Button';

import {
  BUTTON_COLORS,
  BUTTON_TYPES,
  BUTTON_VARIANTS
} from '../../shared/components/Button/button.constants';

import ForgotPassword from './components/ForgotPassword/ForgotPassword';

import classes from './sign-in-form.module.css';

function SignInForm() {
  const [isOpenedForgotPassword, setIsOpenedForgotPassword] = useState(false);
  const { login } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm({ mode: 'onTouched' });

  const showForgotPassword = () => {
    setIsOpenedForgotPassword(true);
  };

  const closeForgotPassword = () => {
    setIsOpenedForgotPassword(false);
  };

  const onSubmit = async (data) => {
    await login(data);
  };

  return (
    <div>
      <ForgotPassword isOpened={isOpenedForgotPassword} onClose={closeForgotPassword} />
      <form className={classes.form__wrapper} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.form__content}>
          <h1 className={classes.form__title}>Sign In</h1>
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
              <FormCheckbox
                id="checkbox"
                label="Keep me logged in"
                className={classes.form__checkbox}
              />
              <Button
                variant={BUTTON_VARIANTS.FORM}
                type={BUTTON_TYPES.SUBMIT}
                color={BUTTON_COLORS.FORM}
                disabled={!isValid}
                className={classes.form__button}
              >
                Login
              </Button>
              <button className={classes.button__link} type="button" onClick={showForgotPassword}>
                Forgot Password?
              </button>
              <Link to={PUBLIC_ROUTES.REGISTER} className={classes.link}>
                <button className={classes.button__link} type="button" onClick={showForgotPassword}>
                  I don’t have an account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
