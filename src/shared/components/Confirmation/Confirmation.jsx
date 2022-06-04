import { Modal as MuiModal } from '@mui/material';

import PropTypes from 'prop-types';

import classes from './confirmation.module.css';

function Confirmation({ children, isOpened }) {
  return (
    <MuiModal hideBackdrop open={isOpened}>
      <div role="alert" className={classes.modal__content}>
        {children}
      </div>
    </MuiModal>
  );
}

Confirmation.propTypes = {
  children: PropTypes.node.isRequired,
  isOpened: PropTypes.bool.isRequired
};

export default Confirmation;
