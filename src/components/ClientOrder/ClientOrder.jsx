import React, { useState } from 'react';

import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import Button from '../../shared/components/Button/Button';

import {
  buttonColors,
  buttonSizes,
  buttonTypes
} from '../../shared/components/Button/button.constants';

import classes from './client-order.module.css';
import { initialFormState } from './client-order.constants';
import { useOrder } from './hooks/useOrder';

function ClientOrder() {
  // const [isFormValid, setIsFormValid] = useState(false);
  const [formState, setFormState] = useState(initialFormState);
  const { source, destination } = formState;
  const { createOrder, deleteOrder, orderId } = useOrder();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createOrder({ source, destination });
  };

  const handleDeleteOrder = async () => {
    await deleteOrder(orderId);
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
          />
        </div>
        <Button size={buttonSizes.big} color={buttonColors.primary} type={buttonTypes.submit}>
          Order
        </Button>
        <Button
          className={classes.deleteOrderButton}
          size={buttonSizes.big}
          color={buttonColors.primary}
          type={buttonTypes.button}
          onClick={handleDeleteOrder}>
          Delete Order
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
