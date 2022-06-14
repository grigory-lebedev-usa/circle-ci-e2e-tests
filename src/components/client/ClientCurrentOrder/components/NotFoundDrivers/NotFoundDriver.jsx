import classes from './not-found-drivers.module.css';

function NotFoundDriver() {
  return (
    <div className={classes.wrapper__message}>
      <p className={classes.message}>
        No drivers found at this time. Refresh the list to see driver‘s offers.
      </p>
    </div>
  );
}

export default NotFoundDriver;
