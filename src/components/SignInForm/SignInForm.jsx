import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormCheckbox from '../../shared/components/form-elements/FormCheckbox/FormCheckbox';
import { INPUT_TYPES } from '../../shared/components/form-elements/FormInput/form-input.constants';
import Link from '../../shared/components/Link/Link';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../constants/app.constants';
import Button from '../../shared/components/Button/Button';
import { OPTIONS_VALIDATE } from '../helpers/OPTIONS_VALIDATE';
import {
  BUTTON_COLORS,
  BUTTON_TYPES,
  BUTTON_VARIANTS
} from '../../shared/components/Button/button.constants';

import { USER_LOGIN } from '../../actions/user/user.actions';

import { defaultLoginValues } from './sign-in-form.constants';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

import classes from './sign-in-form.module.css';

function SignInForm() {
  const [isOpenedForgotPassword, setIsOpenedForgotPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm({ defaultValues: defaultLoginValues, mode: 'onTouched' });

  const showForgotPassword = () => {
    setIsOpenedForgotPassword(true);
  };

  const closeForgotPassword = () => {
    setIsOpenedForgotPassword(false);
  };

  const onSubmit = async ({ email, password }) => {
    await dispatch(USER_LOGIN({ email: email.toLowerCase(), password }));
    navigate(PRIVATE_ROUTES.HOME);
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
                name="email"
                placeholder="Email"
                type={INPUT_TYPES.EMAIL}
                control={control}
                className={classes.form__input}
                error={errors?.email}
                rules={OPTIONS_VALIDATE.EMAIL}
              />
              <FormInput
                name="password"
                placeholder="Password"
                type={INPUT_TYPES.PASSWORD}
                control={control}
                className={classes.form__input}
                error={errors?.password}
                rules={OPTIONS_VALIDATE.PASSWORD}
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
