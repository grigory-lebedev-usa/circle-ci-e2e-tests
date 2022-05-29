import PropTypes from 'prop-types';

import { Backdrop, CircularProgress } from '@mui/material';

function ProgressSpinner({ isLoading }) {
  return (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
      <CircularProgress color="inherit" size={200} />
    </Backdrop>
  );
}

ProgressSpinner.propTypes = {
  isLoading: PropTypes.bool
};

ProgressSpinner.defaultProps = {
  isLoading: false
};

export default ProgressSpinner;
