import React, { useEffect, useState } from 'react';

import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import Button from '../../shared/components/Button/Button';

import { buttonColors, buttonSizes } from '../../shared/components/Button/button.constants';

import { generateValidationError } from '../helpers/generateValidationError';

import classes from './client-order.module.css';
import { initialErrors, initialFormState } from './client-order.constants';

function ClientOrder() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formState, setFormState] = useState(initialFormState);
  const { source, destination } = formState;
  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => {
    setIsFormValid(errors.source.valid && errors.destination.valid);
  }, [errors.destination.valid, errors.source.valid]);

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
  };

  return (
    <div className={classes.container}>
      <div className={classes.block__text}>
        <p className={classes.text}>
          Please input Source and Destination for your order. And we will find a car for you in a
          few seconds
        </p>
        <div className={classes.line} />
      </div>
      <form className={classes.form__wrapper} onSubmit={handleSubmit}>
        <div className={classes.form__container}>
          <FormInput
            id="source"
            type={inputTypes.text}
            label="Source"
            placeholder="Source"
            name="source"
            value={source}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            errorMessage={errors.source.errorMessage}
          />
          <FormInput
            id="destination"
            type={inputTypes.text}
            label="Destination"
            placeholder="Destination"
            name="destination"
            className={classes.input}
            value={destination}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            errorMessage={errors.destination.errorMessage}
          />
        </div>
        <Button size={buttonSizes.big} color={buttonColors.primary} disabled={!isFormValid}>
          Order
        </Button>
      </form>
      <div className={classes.decoration__container}>
        <p className={`${classes.decoration__text} ${classes.decoration__text_top}`}>Destination</p>
        <img src="/img/navigate.png" alt="Navigation" />
        <p className={`${classes.decoration__text} ${classes.decoration__text_bottom}`}>Source</p>
      </div>
    </div>
  );
}

export default ClientOrder;
