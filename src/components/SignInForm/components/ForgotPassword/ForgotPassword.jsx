import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Button } from '@mui/material';

import { useDispatch } from 'react-redux';

import { INPUT_TYPES } from '../../../../shared/components/form-elements/FormInput/form-input.constants';

import FormInput from '../../../../shared/components/form-elements/FormInput/FormInput';

import { USER_FORGOT_PASSWORD } from '../../../../actions/user/user.actions';

import classes from './forgot-password.module.css';

function ForgotPassword({ isOpened, onClose }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    await dispatch(USER_FORGOT_PASSWORD({ email: email.toLowerCase() }));
    setEmail('');
  };

  return (
    <div>
      {isOpened && (
        <div className={classes.container}>
          <p className={classes.text}>
            We need to know your email to send the link to reset you password.
          </p>
          <button type="button" className={classes.container__close} onClick={onClose}>
            +
          </button>
          <form className={classes.form__container} onSubmit={handleSubmit}>
            <FormInput
              id="email"
              type={INPUT_TYPES.EMAIL}
              label="Email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className={classes.button}>
              <Button variant="form">Send</Button>
            </div>
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
