import { FormControlLabel, Checkbox } from '@mui/material';
import PropTypes from 'prop-types';

function FormCheckbox({ id, label, className }) {
  return (
    <div className={className}>
      <FormControlLabel control={<Checkbox id={id} color="form" />} label={label} />
    </div>
  );
}

FormCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

FormCheckbox.defaultProps = {
  className: ''
};

export default FormCheckbox;
