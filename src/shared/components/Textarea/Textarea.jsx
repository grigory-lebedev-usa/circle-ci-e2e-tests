import React from 'react';

import PropTypes from 'prop-types';

import classes from './textarea.module.css';

function Textarea({ id, label, placeholder }) {
  return (
    <div className={classes.textarea__container}>
      <textarea className={classes.textarea} id={id} placeholder={placeholder} />
      <label className={classes.textarea__label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

Textarea.defaultProps = {
  placeholder: ''
};

export default Textarea;
