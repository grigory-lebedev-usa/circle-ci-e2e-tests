import DriverActions from '../DriverActions/DriverActions';

import classes from './driver-content.module.css';

function DriverContent() {
  return (
    <>
      <div className={classes.block__text}>
        <p className={classes.text}>
          We will help you quickly and comfortably move anywhere in the world
        </p>
      </div>
      <div className={classes.block__qualities}>
        <p className={classes.qualities__text}>Quik</p>
        <div className={classes.qualities__circle} />
        <p className={classes.qualities__text}>Comfort</p>
        <div className={classes.qualities__circle} />
        <p className={classes.qualities__text}>24/7 Supports</p>
      </div>
      <DriverActions />
    </>
  );
}

export default DriverContent;
