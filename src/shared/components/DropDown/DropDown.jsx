import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

import useClickOutside from '../../hooks/useClickOutside';

import { DropDownPropType } from '../../prop-types';

import classes from './drop-down.module.css';

function DropDown({ items, onListItemClick, value }) {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => setOpened(!opened);

  const handleListItemClick = (item) => {
    setOpened(false);
    onListItemClick(item);
  };

  return (
    <div className={classes.dropdown__container} ref={useClickOutside(() => setOpened(false))}>
      <div role="listbox" tabIndex="0" className={classes.dropdown__content} onClick={handleToggle}>
        <div className={classes.dropdown__text}>{value}</div>
        <Box sx={{ color: '#fff' }}>
          {opened ? <ArrowDropUp color="inherit" /> : <ArrowDropDown color="inherit" />}
        </Box>
      </div>
      {opened && (
        <ul className={classes.dropdown__list}>
          {items.map((item) => (
            <li
              className={classes.dropdown__item}
              key={item.id}
              onClick={() => handleListItemClick(item)}
            >
              <span className={classes.dropdown__value}>{item.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

DropDown.propTypes = {
  items: PropTypes.arrayOf(DropDownPropType).isRequired,
  onListItemClick: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

DropDown.defaultProps = {
  onListItemClick: () => {},
  value: [0, 'English']
};

export default DropDown;
