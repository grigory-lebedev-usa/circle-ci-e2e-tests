import React from 'react';

import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';

import FormButton from '../../shared/components/form-elements/FormButton/FormButton';

import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';

import { optionsValidate } from '../helpers/optionsValidate';

import classes from './forgot-password.module.css';
import { useForgotPassword } from './hooks/useForgotPassword';

function ForgotPassword({ isOpened, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ defaultValues: { email: '' }, mode: 'onTouched' });

  const { resetPassword } = useForgotPassword();

  const onSubmit = async (data) => {
    onClose();
    await resetPassword(data);
  };

  return (
    <div>
      {isOpened && (
        <div className={`${classes.container}`}>
          <p className={classes.text}>
            We need to know your email to send the link to reset you password.
          </p>
          <form className={classes.form__container} onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              id="email"
              type={inputTypes.email}
              label="Email"
              placeholder="Email"
              {...register('email', optionsValidate.email)}
              error={errors.email?.message}
            />
            <FormButton disabled={!isValid} className={classes.button}>
              Send
            </FormButton>
          </form>
        </div>
      )}
    </div>
  );
}

ForgotPassword.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ForgotPassword;
