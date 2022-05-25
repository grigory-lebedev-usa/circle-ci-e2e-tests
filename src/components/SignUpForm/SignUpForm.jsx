import { useState } from 'react';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormSelect from '../../shared/components/form-elements/FormSelect/FormSelect';
import { INPUT_TYPES } from '../../shared/components/form-elements/FormInput/form-input.constants';

import {
  BUTTON_TYPES,
  BUTTON_VARIANTS,
  BUTTON_COLORS
} from '../../shared/components/Button/button.constants';

import Button from '../../shared/components/Button/Button';

import classes from './sign-up-form.module.css';
import { USER_SELECT } from './sign-up-form.constants';

function SignUpForm() {
  const [isHasSectionDriver, setIsSectionDriver] = useState(false);
  return (
    <form className={classes.form__wrapper}>
      <div className={classes.form__content}>
        <h1 className={classes.form__title}>Sign Up</h1>
        <div className={classes.form__container}>
          <div>
            <FormInput id="email" placeholder="Email" label="Email" type={INPUT_TYPES.EMAIL} />
            <FormInput
              id="password"
              placeholder="Password"
              label="Password"
              type={INPUT_TYPES.PASSWORD}
              className={classes.form__input}
            />
            <FormInput
              id="confirm-password"
              placeholder="Confirm password"
              label="Confirm password"
              type={INPUT_TYPES.PASSWORD}
              className={classes.form__input}
            />
            <FormInput
              id="first-name"
              placeholder="First name"
              label="First name"
              type={INPUT_TYPES.TEXT}
              className={classes.form__input}
            />
            <FormInput
              id="last-name"
              placeholder="Last name"
              label="Last name"
              type={INPUT_TYPES.TEXT}
              className={classes.form__input}
            />
            <FormSelect
              id="role"
              label="Role"
              items={USER_SELECT}
              value=""
              className={classes.form__select}
            />
          </div>
          {isHasSectionDriver && (
            <div className={classes.car__block}>
              <p className={classes.car__title}>Car</p>
              <FormInput
                id="make"
                type={INPUT_TYPES.TEXT}
                label="Make"
                placeholder="Make"
                className={classes.form__select}
              />
              <FormInput
                id="model"
                type={INPUT_TYPES.TEXT}
                label="Model"
                placeholder="Model"
                className={classes.form__select}
              />
              <FormInput
                id="year"
                type={INPUT_TYPES.NUMBER}
                label="Year"
                placeholder="Year"
                className={classes.form__select}
              />
              <FormInput
                id="color"
                type={INPUT_TYPES.TEXT}
                label="Color"
                placeholder="Color"
                className={classes.form__select}
              />
            </div>
          )}
          <Button
            variant={BUTTON_VARIANTS.FORM}
            onClick={() => {
              setIsSectionDriver(true);
            }}
            type={BUTTON_TYPES.SUBMIT}
            color={BUTTON_COLORS.FORM}
            className={classes.form__button}
          >
            Register
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
