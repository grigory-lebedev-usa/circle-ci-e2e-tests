import React from 'react';

import classes from './title.module.css';

function Title() {
  return (
    <div className={classes.block__title}>
      <h2 className={classes.title}>The best taxi in the world</h2>
    </div>
  );
}

export default Title;
