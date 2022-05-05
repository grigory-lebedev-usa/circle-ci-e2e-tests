import React, { useEffect, useState } from 'react';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormButton from '../../shared/components/form-elements/FormButton/FormButton';

import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import FormCheckbox from '../../shared/components/form-elements/FormCheckbox/FormCheckbox';

import Link from '../../shared/components/Link/Link';

import { generateValidationError } from '../helpers/generateValidationError';

import ForgotPassword from '../ForgotPassword/ForgotPassword';

import classes from './sign-in-form.module.css';
import { initialErrors, initialFormState } from './sign-in-form.constants';

function SignInForm() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formState, setFormState] = useState(initialFormState);
  const { email, password } = formState;
  const [errors, setErrors] = useState(initialErrors);
  const [isOpenedForgotPassword, setIsOpenedForgotPassword] = useState(false);

  useEffect(() => {
    setIsFormValid(errors.email.valid && errors.password.valid);
  }, [errors.email.valid, errors.password.valid]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
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
                type={inputTypes.email}
                label="Email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                styles={classes.input}
                errorMessage={errors.email.errorMessage}
              />
              <FormInput
                id="password"
                type={inputTypes.password}
                label="Password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                styles={classes.input}
                errorMessage={errors.password.errorMessage}
              />
              <FormCheckbox id="checkbox" label="Keep me logged in" styles={classes.checkbox} />
              <FormButton disabled={!isFormValid} styles={classes.button}>
                Login
              </FormButton>
              <Link href="#link" styles={classes.link} onClick={showForgotPassword}>
                Forgot password?
              </Link>
              <Link href="#link" styles={classes.link}>
                I don’t have an account
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
