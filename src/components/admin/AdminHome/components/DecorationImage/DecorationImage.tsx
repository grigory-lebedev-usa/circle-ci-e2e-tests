import classes from './decoration-image.module.css';

function DecorationImage() {
  return (
    <div className={classes.decoration__container}>
      <img src="/img/navigate.png" alt="NavigationImage" />
    </div>
  );
}

export default DecorationImage;
