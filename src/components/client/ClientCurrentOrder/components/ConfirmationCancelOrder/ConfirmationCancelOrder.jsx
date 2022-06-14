import PropTypes from 'prop-types';

import ConfirmationModal from '../../../../../shared/components/ConfirmationModal/ConfirmationModal';

function ConfirmationCancelOrder(props) {
  return <ConfirmationModal {...props} />;
}

ConfirmationCancelOrder.propTypes = {
  text: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
};

ConfirmationCancelOrder.defaultProps = {
  onCancel: () => {},
  onConfirm: () => {}
};

export default ConfirmationCancelOrder;
