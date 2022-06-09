import PropTypes from 'prop-types';

import classes from './active-trip.module.css';

function ActiveTrip({ bottomContent, bottomActions }) {
  return (
    <div className={classes.container}>
      <div className={classes.block__title}>
        <h2 className={classes.title}>Active trip</h2>
      </div>
      <div className={classes.line} />
      <div className={classes.treep__wrapper}>
        <div className={classes.treep__container}>
          <div className={classes.treep__content}>
            <div className={classes.car__img} />
            <div className={classes.block__info}>
              <div className={classes.info__item}>
                <p className={classes.info__title}>From:</p>
                <p className={classes.info__text}>Chkalova</p>
              </div>
              <div className={classes.info__item}>
                <p className={classes.info__title}>To:</p>
                <p className={classes.info__text}>Lenina</p>
              </div>
              <div style={{ marginTop: '50px' }}>
                <div className={classes.info__item}>
                  <p className={classes.info__title}>Price:</p>
                  <p className={classes.info__text}>$5.3</p>
                </div>
                <div className={classes.info__item}>
                  <p className={classes.info__title}>Driver:</p>
                  <p className={classes.info__text}>Ivan Ivanov</p>
                </div>
                <div className={classes.info__item}>
                  <p className={classes.info__title}>Car:</p>
                  <p className={classes.info__text}>yellow Chevrolet Camaro 2020</p>
                </div>
                {bottomContent}
              </div>
            </div>
          </div>
          {bottomActions}
        </div>
      </div>
    </div>
  );
}

ActiveTrip.propTypes = {
  bottomContent: PropTypes.node,
  bottomActions: PropTypes.node
};

ActiveTrip.defaultProps = {
  bottomContent: null,
  bottomActions: null
};

export default ActiveTrip;
