import PropTypes from 'prop-types';

import { INPUT_TYPES } from '../../../../shared/components/form-elements/FormInput/form-input.constants';
import { OPTIONS_VALIDATE } from '../../../helpers/OPTIONS_VALIDATE';
import FormInput from '../../../../shared/components/form-elements/FormInput/FormInput';
import FormSelect from '../../../../shared/components/form-elements/FormSelect/FormSelect';

import { USER_SELECT } from '../../sign-up-form.constants';

import classes from './general-form.module.css';

function GeneralForm({ control, errors, watch }) {
  return (
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
      <FormInput
        name="confirmPassword"
        placeholder="Confirm password"
        type={INPUT_TYPES.PASSWORD}
        control={control}
        className={classes.form__input}
        error={errors?.confirmPassword}
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
      <FormInput
        name="firstName"
        placeholder="First name"
        type={INPUT_TYPES.TEXT}
        control={control}
        className={classes.form__input}
        error={errors?.firstName}
        rules={OPTIONS_VALIDATE.FIRST_NAME}
      />
      <FormInput
        name="lastName"
        placeholder="Last name"
        type={INPUT_TYPES.TEXT}
        control={control}
        className={classes.form__input}
        error={errors?.lastName}
        rules={OPTIONS_VALIDATE.LAST_NAME}
      />
      <FormSelect
        name="role"
        label="Role"
        items={USER_SELECT}
        className={classes.form__select}
        error={errors?.role}
        control={control}
        rules={OPTIONS_VALIDATE.ROLE}
      />
    </div>
  );
}

GeneralForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  watch: PropTypes.func.isRequired
};

export default GeneralForm;