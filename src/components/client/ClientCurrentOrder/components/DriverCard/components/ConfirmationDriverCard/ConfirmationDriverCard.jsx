import PropTypes from 'prop-types';

import ConfirmationModal from '../../../../../../../shared/components/ConfirmationModal/ConfirmationModal';

function ConfirmationDriverCard(props) {
  return <ConfirmationModal {...props} />;
}

ConfirmationDriverCard.propTypes = {
  text: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
};

ConfirmationDriverCard.defaultProps = {
  onCancel: () => {},
  onConfirm: () => {}
};

export default ConfirmationDriverCard;
