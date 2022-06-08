import classes from './bottom-content.module.css';

function BottomContent() {
  return (
    <div className={classes.info__item}>
      <p className={classes.info__title}>Rating:</p>
      <p className={classes.info__text}>4.8</p>
    </div>
  );
}

export default BottomContent;
