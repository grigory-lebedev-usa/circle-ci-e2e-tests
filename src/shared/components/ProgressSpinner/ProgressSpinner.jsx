import PropTypes from 'prop-types';

import { Backdrop, CircularProgress } from '@mui/material';

function ProgressSpinner({ isShow }) {
  return (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isShow}>
      <CircularProgress color="primary" size={200} />
    </Backdrop>
  );
}

ProgressSpinner.propTypes = {
  isShow: PropTypes.bool
};

ProgressSpinner.defaultProps = {
  isShow: false
};

export default ProgressSpinner;
