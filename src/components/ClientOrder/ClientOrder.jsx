import React from 'react';

import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import Button from '../../shared/components/Button/Button';

import { buttonColors, buttonSizes } from '../../shared/components/Button/button.constants';

import classes from './client-order.module.css';

function ClientOrder() {
  return (
    <div className={classes.container}>
      <div className={classes.block__text}>
        <p className={classes.text}>
          Please input Source and Destination for your order. And we will find a car for you in a
          few seconds
        </p>
        <div className={classes.line} />
      </div>
      <div className={classes.form__wrapper}>
        <div className={classes.form__container}>
          <FormInput
            id="source"
            type={inputTypes.text}
            label="Source"
            placeholder="Source"
            name="source"
          />
          <FormInput
            id="destination"
            type={inputTypes.text}
            label="Destination"
            placeholder="Destination"
            name="destination"
            styles={classes.input}
          />
        </div>
        <Button size={buttonSizes.big} color={buttonColors.primary}>
          Order
        </Button>
      </div>
      <div className={classes.decoration__container}>
        <p className={`${classes.decoration__text} ${classes.decoration__text_top}`}>Destination</p>
        <img src="/img/navigate.png" alt="Navigation" />
        <p className={`${classes.decoration__text} ${classes.decoration__text_bottom}`}>Source</p>
      </div>
    </div>
  );
}

export default ClientOrder;
