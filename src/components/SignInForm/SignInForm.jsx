import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormButton from '../../shared/components/form-elements/FormButton/FormButton';

import FormCheckbox from '../../shared/components/form-elements/FormCheckbox/FormCheckbox';

import Link from '../../shared/components/Link/Link';

import ForgotPassword from '../ForgotPassword/ForgotPassword';

import { ROUTES } from '../../constants/app.constants';

import useAuth from '../../shared/hooks/useAuth';

import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import { optionsValidate } from '../helpers/optionsValidate';

import classes from './sign-in-form.module.css';
import { initialFormState } from './sign-in-form.constants';

function SignInForm() {
  const [isOpenedForgotPassword, setIsOpenedForgotPassword] = useState(false);

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ defaultValues: initialFormState, mode: 'onTouched' });

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
              <FormInput
                {...register('email', optionsValidate.email)}
                id="email"
                type={inputTypes.email}
                label="Email"
                placeholder="Email"
                className={classes.input}
                error={errors.email?.message}
              />
              <FormInput
                {...register('password', optionsValidate.password)}
                id="password"
                type={inputTypes.password}
                label="Password"
                placeholder="Password"
                className={classes.input}
                error={errors.password?.message}
              />
              <FormCheckbox id="checkbox" label="Keep me logged in" className={classes.checkbox} />
              <FormButton className={classes.button} disabled={!isValid}>
                Login
              </FormButton>
              <button className={classes.button__link} type="button" onClick={showForgotPassword}>
                Forgot Password?
              </button>
              <Link to={ROUTES.REGISTER} className={classes.link}>
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
