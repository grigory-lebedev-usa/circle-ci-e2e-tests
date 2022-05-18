import classes from './rating.module.css';

function Rating() {
  return (
    <div className={classes.container}>
      <p className={classes.text}>5</p>
      <img className={classes.img} src="/img/star.svg" alt="star" />
    </div>
  );
}

export default Rating;
