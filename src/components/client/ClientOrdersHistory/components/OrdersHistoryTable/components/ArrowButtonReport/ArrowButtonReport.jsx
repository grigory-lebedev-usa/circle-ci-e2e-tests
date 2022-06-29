import { useState } from 'react';

import PropTypes from 'prop-types';
import { IconButton, Grow } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';

function ArrowButtonReport({ report }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <>
      <IconButton onClick={handleChange}>
        <ArrowDropDown fontSize="large" />
      </IconButton>
      {isChecked && (
        <Grow in={isChecked}>
          <div>{report}</div>
        </Grow>
      )}
    </>
  );
}

ArrowButtonReport.propTypes = {
  report: PropTypes.string
};

ArrowButtonReport.defaultProps = {
  report: ''
};

export default ArrowButtonReport;
