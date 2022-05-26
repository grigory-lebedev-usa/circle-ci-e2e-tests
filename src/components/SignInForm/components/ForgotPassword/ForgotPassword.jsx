import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { useForgotPassword } from '../../../../api/hooks/useForgotPassword';
import Button from '../../../../shared/components/Button/Button';
import { INPUT_TYPES } from '../../../../shared/components/form-elements/FormInput/form-input.constants';
import FormInput from '../../../../shared/components/form-elements/FormInput/FormInput';
import { OPTIONS_VALIDATE } from '../../../helpers/OPTIONS_VALIDATE';

import classes from './forgot-password.module.css';

function ForgotPassword({ isOpened, onClose }) {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm({ defaultValues: { email: '' }, mode: 'onTouched' });
  const { resetPassword } = useForgotPassword();

  const onSubmit = async ({ email }) => {
    onClose();
    await resetPassword({ email: email.toLowerCase() });
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
          <form className={classes.form__container} onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              name="email"
              placeholder="Email"
              type={INPUT_TYPES.EMAIL}
              control={control}
              error={errors?.email}
              rules={OPTIONS_VALIDATE.EMAIL}
            />
            <Button variant="form" color="form" className={classes.button} disabled={!isValid}>
              Send
            </Button>
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
