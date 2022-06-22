import { FormControlLabel, Checkbox } from '@mui/material';
import PropTypes from 'prop-types';

function FormCheckbox({ id, label, className, checked, onChange }) {
  return (
    <div className={className}>
      <FormControlLabel
        control={
          <Checkbox
            sx={{ '& .MuiSvgIcon-root': { fontSize: 33 } }}
            checked={checked}
            onChange={onChange}
            id={id}
            color="form"
          />
        }
        label={label}
      />
    </div>
  );
}

FormCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

FormCheckbox.defaultProps = {
  className: ''
};

export default FormCheckbox;
