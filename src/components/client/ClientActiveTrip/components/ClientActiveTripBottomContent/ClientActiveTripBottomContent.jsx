import classes from './client-active-trip-bottom-content.module.css';

function ClientActiveTripBottomContent() {
  return (
    <div className={classes.info__item}>
      <p className={classes.info__title}>Rating:</p>
      <p className={classes.info__text}>4.8</p>
    </div>
  );
}

export default ClientActiveTripBottomContent;
