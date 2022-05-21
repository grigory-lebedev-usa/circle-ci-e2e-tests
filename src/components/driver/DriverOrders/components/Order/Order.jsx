import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import Button from '../../../../../shared/components/Button/Button';
import {
  buttonColors,
  buttonSizes,
  buttonTypes
} from '../../../../../shared/components/Button/button.constants';
import Modal from '../../../../../shared/components/Modal/Modal';

import FormInput from '../../../../../shared/components/form-elements/FormInput/FormInput';
import { inputTypes } from '../../../../../shared/components/form-elements/FormInput/form-input.constants';

import { generateValidationError } from '../../../../helpers/generateValidationError';

import { useOffer } from '../../../../../api/hooks/useOffer';

import classes from './order.module.css';

function Order({ order, offer: { id } }) {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [price, setPrice] = useState('');
  const { createOffer, deleteOffer } = useOffer();
  const [errors, setErrors] = useState({
    price: {
      valid: false,
      errorMessage: ''
    }
  });

  useEffect(() => {
    setIsFormValid(errors.price.valid);
  }, [errors.price.valid]);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handlePriceBlur = (e) => {
    const { name, value } = e.target;
    setErrors(generateValidationError(name, value));
  };

  const closeModal = () => {
    setIsOpenedModal(false);
  };

  const openModal = () => {
    setIsOpenedModal(true);
  };

  const handleOfferAccept = (e) => {
    e.preventDefault();
    createOffer({ orderId: order?.id, price });
    closeModal();
  };

  const handleOfferCancel = () => {
    deleteOffer(id);
  };

  return (
    <div className={classes.driver__order}>
      <Modal isOpened={isOpenedModal} closeModal={closeModal} className={classes.modal__container}>
        <div className={classes.modal__content}>
          <div className={classes.modal__item}>
            <h5 className={classes.modal__title}>Who:</h5>
            <p
              className={
                classes.modal__text
              }>{`${order?.client?.firstName} ${order?.client?.lastName}`}</p>
          </div>
          <div className={classes.modal__item}>
            <h5 className={classes.modal__title}>From:</h5>
            <p className={classes.modal__text}>{order?.source}</p>
          </div>
          <div className={classes.modal__item}>
            <h5 className={classes.modal__title}>To:</h5>
            <p className={classes.modal__text}>{order?.destination}</p>
          </div>
          <p className={classes.offer__text}>Please offer your price for order</p>
          <form className={classes.modal__form} onSubmit={handleOfferAccept}>
            <FormInput
              type={inputTypes.number}
              id="price"
              name="price"
              label="Price"
              placeholder="Price"
              value={price}
              onChange={handlePriceChange}
              onBlur={handlePriceBlur}
            />
            <div className={classes.modal__actions}>
              <Button
                size={buttonSizes.small}
                color={buttonColors.cancel}
                onClick={closeModal}
                type={buttonTypes.button}>
                Cancel
              </Button>
              <Button
                type={buttonTypes.submit}
                size={buttonSizes.small}
                color={buttonColors.accept}
                className={classes.modal__button}
                disabled={!isFormValid}>
                Ok
              </Button>
            </div>
          </form>
        </div>
      </Modal>
      <h4 className={classes.order__title}>Who:</h4>
      <p
        className={
          classes.order__text
        }>{`${order?.client?.firstName} ${order?.client?.lastName}`}</p>
      <h4 className={classes.order__title}>From:</h4>
      <p className={classes.order__text}>{order?.source}</p>
      <h4 className={classes.order__title}>To:</h4>
      <p className={classes.order__text}>{order?.destination}</p>
      <Button
        color={id ? buttonColors.cancel : buttonColors.accept}
        size={buttonSizes.small}
        className={classes.button__offer}
        onClick={id ? handleOfferCancel : openModal}>
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
