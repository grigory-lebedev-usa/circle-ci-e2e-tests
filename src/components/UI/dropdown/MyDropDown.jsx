import React, { useState, useEffect, useRef } from 'react';
import classes from './MyDropDown.module.css';

const MyDropDown = () => {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [text, setText] = useState('');

  const handleSelect = (e) => {
    setOpen(false);
    setSelected(true);
    setText(e.target.textContent);
  }

  const handleToggle = () => setOpen(!open);

  const useClickOutside = (handler) => {
    let domNode = useRef();
    
    useEffect(() => {
      let maybeHandler = (event) => {
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
  }

  return (
    <div ref={useClickOutside(() => setOpen(false))}>
      <div className={open ? `${classes.dropdown__container} ${classes.dropdown__container_active}` : classes.dropdown__container} onClick={() => handleToggle(!open)}>
        <label className={selected ? `${classes.dropdown__label} ${classes.dropdown__label_active}` : classes.dropdown__label}>Role</label>
        {selected && <label className={classes.dropdown__label_text}>{text}</label>}
        <div className={open ? `${classes.dropdown__icon} ${classes.dropdown__icon_active}` : classes.dropdown__icon}></div>
      </div>
      {
        open &&
        <ul className={classes.dropdown__list}>
          <li className={classes.dropdown__item} onClick={e => handleSelect(e)}>
            <a className={classes.dropdown__button}>Client</a>
          </li>
          <li className={classes.dropdown__item} onClick={e => handleSelect(e)}>
            <a className={classes.dropdown__button}>Driver</a>
          </li>
        </ul>
      }
    </div>
  );
};

export default MyDropDown;