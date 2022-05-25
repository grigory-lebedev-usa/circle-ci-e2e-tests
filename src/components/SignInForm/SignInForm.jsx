import React, { useState } from 'react';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormCheckbox from '../../shared/components/form-elements/FormCheckbox/FormCheckbox';
import { INPUT_TYPES } from '../../shared/components/form-elements/FormInput/form-input.constants';
import Link from '../../shared/components/Link/Link';
import { generateValidationError } from '../helpers/generateValidationError';

import useAuth from '../../shared/hooks/useAuth';
import { PUBLIC_ROUTES } from '../../constants/app.constants';

import Button from '../../shared/components/Button/Button';

import {
  BUTTON_COLORS,
  BUTTON_TYPES,
  BUTTON_VARIANTS
} from '../../shared/components/Button/button.constants';

import ForgotPassword from './components/ForgotPassword/ForgotPassword';

import { initialErrors, initialFormState } from './sign-in-form.constants';
import classes from './sign-in-form.module.css';

function SignInForm() {
  const [formState, setFormState] = useState(initialFormState);
  const { email, password } = formState;
  const [errors, setErrors] = useState(initialErrors);
  const [isOpenedForgotPassword, setIsOpenedForgotPassword] = useState(false);
  const { login } = useAuth();

  const showForgotPassword = () => {
    setIsOpenedForgotPassword(true);
  };

  const closeForgotPassword = () => {
    setIsOpenedForgotPassword(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setErrors(generateValidationError(name, value, errors));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email: email.toLowerCase(), password });
  };

  return (
    <div>
      <ForgotPassword isOpened={isOpenedForgotPassword} onClose={closeForgotPassword} />
      <form className={classes.form__wrapper} onSubmit={handleSubmit}>
        <div className={classes.form__content}>
          <h1 className={classes.form__title}>Sign In</h1>
          <div className={classes.form__container}>
            <div>
              <FormInput
                id="email"
                type={INPUT_TYPES.EMAIL}
                label="Email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={classes.from__input}
                errorMessage={errors.email.errorMessage}
              />
              <FormInput
                id="password"
                type={INPUT_TYPES.PASSWORD}
                label="Password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={classes.form__input}
                errorMessage={errors.password.errorMessage}
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
