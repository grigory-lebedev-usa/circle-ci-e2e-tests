import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import FormButton from '../../shared/components/form-elements/FormButton/FormButton';

import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import { generateValidationError } from '../helpers/generateValidationError';

import { useForgotPassword } from '../../api/hooks/useForgotPassword';

import classes from './forgot-password.module.css';

function ForgotPassword({ isOpened, onClose }) {
  const [isFormValid, setIsFormValid] = useState(false);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    email: {
      valid: false,
      errorMessage: ''
    }
  });

  useEffect(() => {
    setIsFormValid(errors.email.valid);
  }, [errors.email.valid]);

  const { resetPassword } = useForgotPassword();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = (e) => {
    const { name, value } = e.target;
    setErrors(generateValidationError(name, value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    await resetPassword({ email: email.toLowerCase() });
    setEmail('');
    setErrors({
      email: {
        valid: false,
        errorMessage: ''
      }
    });
  };

  return (
    <div>
      {isOpened && (
        <div className={`${classes.container}`}>
          <p className={classes.text}>
            We need to know your email to send the link to reset you password.
          </p>
          <form className={classes.form__container} onSubmit={handleSubmit}>
            <FormInput
              id="email"
              type={inputTypes.email}
              label="Email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
            <FormButton disabled={!isFormValid} className={classes.button}>
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
