import React, { useState } from 'react';

import PropTypes from 'prop-types';

import useClickOutside from '../../hooks/useClickOutside';

import { DropDownPropType } from '../../prop-types';

import classes from './drop-down.module.css';

function DropDown({ items }) {
  const [opened, setOpened] = useState(false);
  const [text, setText] = useState('English');

  const handleToggle = () => setOpened(!opened);

  const handleListItemClick = (e) => {
    setOpened(false);
    setText(e.target.textContent);
  };

  return (
    <div className={classes.dropdown__container} ref={useClickOutside(() => setOpened(false))}>
      <div role="listbox" tabIndex="0" className={classes.dropdown__content} onClick={handleToggle}>
        <div className={classes.dropdown__text}>{text}</div>
        <div className={classes.dropdown__arrow_down} />
      </div>
      {opened && (
        <ul className={classes.dropdown__list}>
          {items.map((item) => (
            <li className={classes.dropdown__item} key={item.id} onClick={handleListItemClick}>
              <span className={classes.dropdown__value}>{item.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

DropDown.propTypes = {
  items: PropTypes.arrayOf(DropDownPropType).isRequired
};

export default DropDown;
