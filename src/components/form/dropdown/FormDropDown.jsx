import React, { useState, useEffect, useRef } from 'react';

import classes from './FormDropDown.module.css';

function FormDropDown({ title, items = [] }) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(false);
  const [text, setText] = useState('');

  const handleSelect = (e) => {
    setOpened(false);
    setSelected(true);
    setText(e.target.textContent);
  };

  const handleToggle = () => setOpened(!opened);

  const useClickOutside = (handler) => {
    const domNode = useRef();

    useEffect(() => {
      const maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener('mousedown', maybeHandler);
      return () => {
        document.removeEventListener('mousedown', maybeHandler);
      };
    });
    return domNode;
  };

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
        onClick={() => handleToggle(!opened)}>
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
            <li className={classes.dropdown__item} key={item.id} onClick={(e) => handleSelect(e)}>
              <span className={classes.dropdown__button}>{item.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FormDropDown;
