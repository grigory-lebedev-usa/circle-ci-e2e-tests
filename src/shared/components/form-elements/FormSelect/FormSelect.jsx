import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { DropDownPropType } from '../../../prop-types';

import useClickOutside from '../../../hooks/useClickOutside';

import classes from './form-select.module.css';

function FormSelect({ label, items, onChange, value, id }) {
  const [isOpened, setIsOpened] = useState(false);

  const handleFormSelectToggle = () => setIsOpened(!isOpened);

  const handleListItemClick = (item) => {
    if (onChange) {
      onChange(item);
      setIsOpened(false);
    }
  };

  return (
    <div ref={useClickOutside(() => setIsOpened(false))}>
      <div
        id={id}
        role="listbox"
        tabIndex="0"
        className={
          isOpened
            ? `${classes.dropdown__container} ${classes.dropdown__container_active}`
            : `${classes.dropdown__container}`
        }
        onClick={handleFormSelectToggle}>
        <label
          htmlFor="dropdown"
          className={
            value
              ? `${classes.dropdown__label} ${classes.dropdown__label_active}`
              : classes.dropdown__label
          }>
          {label}
        </label>
        {!!value && <span className={classes.dropdown__label_text}>{value}</span>}
        <div
          className={
            isOpened
              ? `${classes.dropdown__icon} ${classes.dropdown__icon_active}`
              : classes.dropdown__icon
          }
        />
      </div>
      {isOpened && (
        <ul className={classes.dropdown__list}>
          {items.map((item) => (
            <li
              className={classes.dropdown__item}
              key={item.id}
              onClick={() => handleListItemClick(item)}>
              <span className={classes.dropdown__button}>{item.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(DropDownPropType).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

FormSelect.defaultProps = {
  // eslint-disable-next-line prettier/prettier
  onChange: () => { }
};

export default FormSelect;
