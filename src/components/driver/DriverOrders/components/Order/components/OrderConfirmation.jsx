import PropTypes from 'prop-types';

import ConfirmationPopUp from '../../../../../../shared/components/ConfirmationPopUp/ConfirmationPopUp';

function OrderConfirmation({ onCancel, onConfirm, text, isOpened }) {
  return (
    <ConfirmationPopUp text={text} onCancel={onCancel} onConfirm={onConfirm} isOpened={isOpened} />
  );
}

OrderConfirmation.propTypes = {
  text: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
};

OrderConfirmation.defaultProps = {
  onCancel: () => {},
  onConfirm: () => {}
};

export default OrderConfirmation;
