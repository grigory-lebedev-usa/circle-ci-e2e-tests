import PropTypes from 'prop-types';

import { Backdrop, CircularProgress } from '@mui/material';

function ProgressSpinner({ isVisible }) {
  return (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isVisible}>
      <CircularProgress color="inherit" size={200} />
    </Backdrop>
  );
}

ProgressSpinner.propTypes = {
  isVisible: PropTypes.bool
};

ProgressSpinner.defaultProps = {
  isVisible: false
};

export default ProgressSpinner;
