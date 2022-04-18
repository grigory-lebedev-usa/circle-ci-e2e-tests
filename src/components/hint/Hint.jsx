import React, { useState } from 'react';
import classes from './Hint.module.css';

const Hint = ({children, content}) => {
  
  const [visible, setVisible] = useState(false);

  return (
    <div className={classes.hint__container} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      <div className={visible ? `${classes.hint__content} ${classes.hint__content_visible}` : classes.hint__content}>{content}</div>
    </div>
  );
};

export default Hint;