import React, { useState } from 'react';

import { INPUT_TYPES } from '../../../shared/components/form-elements/FormInput/form-input.constants';

import FormInput from '../../../shared/components/form-elements/FormInput/FormInput';
import Button from '../../../shared/components/Button/Button';

import {
  BUTTON_SIZES,
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  BUTTON_TYPES
} from '../../../shared/components/Button/button.constants';

import { useOrder } from '../../../api/hooks/useOrder';

import classes from './client-order.module.css';
import { initialFormState } from './client-order.constants';

function ClientOrder() {
  // const [isFormValid, setIsFormValid] = useState(false);
  const [formState, setFormState] = useState(initialFormState);
  const { source, destination } = formState;
  const { createOrder } = useOrder();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createOrder({ source, destination });
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
            type={INPUT_TYPES.TEXT}
            label="Source"
            placeholder="Source"
            name="source"
            value={source}
            onChange={handleInputChange}
          />
          <FormInput
            id="destination"
            type={INPUT_TYPES.TEXT}
            label="Destination"
            placeholder="Destination"
            name="destination"
            className={classes.input}
            value={destination}
            onChange={handleInputChange}
          />
        </div>
        <Button
          size={BUTTON_SIZES.BIG}
          color={BUTTON_COLORS.PRIMARY}
          variant={BUTTON_VARIANTS.CONTAINED}
          type={BUTTON_TYPES.SUBMIT}
        >
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
