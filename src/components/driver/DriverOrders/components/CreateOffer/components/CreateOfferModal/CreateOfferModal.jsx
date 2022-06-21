import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';

import Modal from '../../../../../../../shared/components/Modal/Modal';
import { MODAL_SIZE } from '../../../../../../../shared/components/Modal/modal.constants';
import FormInput from '../../../../../../../shared/components/form-elements/FormInput/FormInput';

import { INPUT_TYPES } from '../../../../../../../shared/components/form-elements/FormInput/form-input.constants';

import { OPTIONS_VALIDATE } from '../../../../../../helpers/OPTIONS_VALIDATE';

import Button from '../../../../../../../shared/components/Button/Button';

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS
} from '../../../../../../../shared/components/Button/button.constants';

import { useOffers } from '../../../../../../../api/hooks/useOffers/useOffers';

import { OrderObjectPropType } from '../../../../../../../shared/prop-types';

import classes from './create-offer-modal.module.css';

function CreateOfferModal({ isOpened, closeModal, order, getOffers }) {
  const { createOffer } = useOffers();
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isValid }
  } = useForm({ defaultValues: { price: '' }, mode: 'onTouched' });

  const onSubmit = async () => {
    closeModal();
    await createOffer({ orderId: order.id, price: watch('price') });
    await getOffers();
    reset({ price: '' });
  };

  return (
    <Modal isOpened={isOpened} closeModal={closeModal} size={MODAL_SIZE.MEDIUM}>
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
  );
}

CreateOfferModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
  order: OrderObjectPropType
};

CreateOfferModal.defaultProps = {
  order: {}
};

export default CreateOfferModal;
