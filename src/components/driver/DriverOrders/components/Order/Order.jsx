import { useState } from 'react';

import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';

import Button from '../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS
} from '../../../../../shared/components/Button/button.constants';

import Modal from '../../../../../shared/components/Modal/Modal';

import FormInput from '../../../../../shared/components/form-elements/FormInput/FormInput';
import { INPUT_TYPES } from '../../../../../shared/components/form-elements/FormInput/form-input.constants';

import { OPTIONS_VALIDATE } from '../../../../helpers/OPTIONS_VALIDATE';
import { OFFER_CREATE, OFFER_DELETE } from '../../../../../actions/offers/offers.action';

import { MODAL_SIZE } from '../../../../../shared/components/Modal/modal.constants';

import classes from './order.module.css';
import OrderConfirmation from './components/OrderConfirmation';

function Order({ order, offer: { id } }) {
  const dispatch = useDispatch();
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [isOpenedConfirmation, setIsOpenedConfirmation] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isValid }
  } = useForm({ defaultValues: { price: '' }, mode: 'onTouched' });

  const closeModal = () => {
    setIsOpenedModal(false);
  };

  const openModal = () => {
    setIsOpenedModal(true);
  };

  const openConfirmation = () => {
    setIsOpenedConfirmation(true);
  };

  const closeConfirmation = () => {
    setIsOpenedConfirmation(false);
  };

  const onSubmit = async () => {
    closeModal();
    await dispatch(OFFER_CREATE({ orderId: order.id, price: watch('price') }));
    reset({ price: '' });
  };

  const handleOfferDelete = async () => {
    closeConfirmation();
    await dispatch(OFFER_DELETE(id));
  };

  return (
    <div className={classes.driver__order}>
      <OrderConfirmation
        isOpened={isOpenedConfirmation}
        onCancel={closeConfirmation}
        onConfirm={handleOfferDelete}
        text={`Are you sure you want to cancel ${order.source} - ${order.destination} offer?`}
      />
      <Modal isOpened={isOpenedModal} closeModal={closeModal} size={MODAL_SIZE.MEDIUM}>
        <div className={classes.modal__content}>
          <div className={classes.modal__item}>
            <h5 className={classes.modal__title}>Who:</h5>
            <p
              className={classes.modal__text}
            >{`${order.client.firstName} ${order.client.lastName}`}</p>
          </div>
          <div className={classes.modal__item}>
            <h5 className={classes.modal__title}>From:</h5>
            <p className={classes.modal__text}>{order.source}</p>
          </div>
          <div className={classes.modal__item}>
            <h5 className={classes.modal__title}>To:</h5>
            <p className={classes.modal__text}>{order.destination}</p>
          </div>
          <p className={classes.offer__text}>Please offer your price for order</p>
          <form className={classes.modal__form} onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              type={INPUT_TYPES.NUMBER}
              name="price"
              placeholder="Price"
              control={control}
              error={errors.price}
              rules={OPTIONS_VALIDATE.PRICE}
            />
            <div className={classes.modal__actions}>
              <Button
                size={BUTTON_SIZES.SMALL}
                color={BUTTON_COLORS.ERROR}
                variant={BUTTON_VARIANTS.CONTAINED}
                type={BUTTON_TYPES.BUTTON}
                onClick={closeModal}
              >
                Cancel
              </Button>
              <Button
                type={BUTTON_TYPES.SUBMIT}
                size={BUTTON_SIZES.SMALL}
                color={BUTTON_COLORS.SUCCESS}
                variant={BUTTON_VARIANTS.CONTAINED}
                className={classes.modal__button}
                disabled={!isValid}
              >
                Ok
              </Button>
            </div>
          </form>
        </div>
      </Modal>
      <h4 className={classes.order__title}>Who:</h4>
      <p className={classes.order__text}>{`${order.client.firstName} ${order.client.lastName}`}</p>
      <h4 className={classes.order__title}>From:</h4>
      <p className={classes.order__text}>{order.source}</p>
      <h4 className={classes.order__title}>To:</h4>
      <p className={classes.order__text}>{order.destination}</p>
      <Button
        color={id ? BUTTON_COLORS.ERROR : BUTTON_COLORS.SUCCESS}
        size={BUTTON_SIZES.SMALL}
        variant={BUTTON_VARIANTS.CONTAINED}
        className={classes.button__offer}
        onClick={id ? openConfirmation : openModal}
      >
        {id ? 'Cancel' : 'Offer'}
      </Button>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.shape({
    client: PropTypes.objectOf(PropTypes.string),
    createdAt: PropTypes.number,
    destination: PropTypes.string,
    id: PropTypes.string,
    source: PropTypes.string
  }),
  offer: PropTypes.shape({
    client: PropTypes.objectOf(PropTypes.string),
    createdAt: PropTypes.number,
    id: PropTypes.string
  })
};

Order.defaultProps = {
  order: {},
  offer: {}
};

export default Order;
