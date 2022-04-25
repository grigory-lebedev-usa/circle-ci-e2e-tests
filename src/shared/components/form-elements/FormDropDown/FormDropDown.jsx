import React, { useState } from 'react';

import PropTypes from 'prop-types';

import useClickOutside from '../../../hooks/useClickOutside';

import { DropDownPropType } from '../../../prop-types';

import classes from './form-drop-down.module.css';

function FormDropDown({ title, items = [] }) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(false);
  const [text, setText] = useState('');

  const handleListItemClick = (e) => {
    setOpened(false);
    setSelected(true);
    setText(e.target.textContent);
  };

  const handleToggle = () => setOpened(!opened);

  return (
    <div ref={useClickOutside(() => setOpened(false))}>
      <div
        id="dropdown"
        role="listbox"
        tabIndex="0"
        className={
          opened
            ? `${classes.dropdown__container} ${classes.dropdown__container_active}`
            : classes.dropdown__container
        }
        onClick={handleToggle}>
        <label
          htmlFor="dropdown"
          className={
            selected
              ? `${classes.dropdown__label} ${classes.dropdown__label_active}`
              : classes.dropdown__label
          }>
          {title}
        </label>
        {selected && <span className={classes.dropdown__label_text}>{text}</span>}
        <div
          className={
            opened
              ? `${classes.dropdown__icon} ${classes.dropdown__icon_active}`
              : classes.dropdown__icon
          }
        />
      </div>
      {opened && (
        <ul className={classes.dropdown__list}>
          {items.map((item) => (
            <li className={classes.dropdown__item} key={item.id} onClick={handleListItemClick}>
              <span className={classes.dropdown__button}>{item.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

FormDropDown.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(DropDownPropType).isRequired
};

FormDropDown.defaultProps = {
  title: 'Role'
};

export default FormDropDown;
