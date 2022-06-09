import React from 'react';

import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { INPUT_TYPES } from '../../../shared/components/form-elements/FormInput/form-input.constants';

import FormInput from '../../../shared/components/form-elements/FormInput/FormInput';
import Button from '../../../shared/components/Button/Button';

import {
  BUTTON_SIZES,
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  BUTTON_TYPES
} from '../../../shared/components/Button/button.constants';

import { OPTIONS_VALIDATE } from '../../helpers/OPTIONS_VALIDATE';

import { PRIVATE_ROUTES } from '../../../constants/app.constants';

import { ORDER_CREATE } from '../../../actions/orders/orders.actions';
import { USER_GET } from '../../../actions/user/user.actions';

import classes from './client-order.module.css';
import { defaultOrderValues } from './client-order.constants';

function ClientOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm({ defaultValues: defaultOrderValues, mode: 'onTouched' });

  const onSubmit = async (data) => {
    await dispatch(ORDER_CREATE(data));
    await dispatch(USER_GET());
    navigate(PRIVATE_ROUTES.CURRENT_ORDER);
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
      <form className={classes.form__wrapper} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.form__container}>
          <FormInput
            name="source"
            placeholder="Source"
            type={INPUT_TYPES.TEXT}
            control={control}
            error={errors?.source}
            rules={OPTIONS_VALIDATE.SOURCE}
          />
          <FormInput
            name="destination"
            placeholder="Destination"
            type={INPUT_TYPES.TEXT}
            className={classes.input}
            control={control}
            error={errors?.destination}
            rules={OPTIONS_VALIDATE.DESTINATION}
          />
        </div>
        <Button
          size={BUTTON_SIZES.BIG}
          color={BUTTON_COLORS.PRIMARY}
          variant={BUTTON_VARIANTS.CONTAINED}
          type={BUTTON_TYPES.SUBMIT}
          disabled={!isValid}
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
