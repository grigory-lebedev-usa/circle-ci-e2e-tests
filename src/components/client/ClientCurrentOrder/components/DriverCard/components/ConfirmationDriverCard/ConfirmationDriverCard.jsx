import PropTypes from 'prop-types';

import ConfirmationPopUp from '../../../../../../../shared/components/ConfirmationPopUp/ConfirmationPopUp';

function ConfirmationDriverCard({ isOpened, text, onCancel, onConfirm }) {
  return (
    <ConfirmationPopUp isOpened={isOpened} text={text} onCancel={onCancel} onConfirm={onConfirm} />
  );
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
