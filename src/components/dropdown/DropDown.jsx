import React, { useState, useEffect, useRef } from 'react';
import classes from './DropDown.module.css';

function DropDown({ items }) {
  const [opened, setOpened] = useState(false);
  const [text, setText] = useState('English');

  const handleToggle = () => setOpened(!opened);

  const handleSelect = (e) => {
    setOpened(false);
    setText(e.target.textContent);
  };

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
    <div className={classes.dropdown__container} ref={useClickOutside(() => setOpened(false))}>
      <div
        role="listbox"
        tabIndex="0"
        className={classes.dropdown__content}
        onClick={() => handleToggle(opened)}>
        <div className={classes.dropdown__text}>{text}</div>
        <div className={classes.dropdown__arrow_down} />
      </div>
      {opened && (
        <ul className={classes.dropdown__list}>
          {items.map((item) => (
            <li className={classes.dropdown__item} key={item.id} onClick={(e) => handleSelect(e)}>
              <span className={classes.dropdown__value}>{item.value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
