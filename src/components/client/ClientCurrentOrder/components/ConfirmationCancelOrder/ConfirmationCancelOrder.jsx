import PropTypes from 'prop-types';

import ConfirmationPopUp from '../../../../../shared/components/ConfirmationPopUp/ConfirmationPopUp';

function ConfirmationCancelOrder(props) {
  return <ConfirmationPopUp {...props} />;
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
