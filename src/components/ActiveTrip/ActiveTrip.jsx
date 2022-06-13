import { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useTrip } from '../../api/hooks/useTrip/useTrip';

import { REQUEST_STATUS } from '../../constants/app.constants';

import ProgressSpinner from '../../shared/components/ProgressSpinner/ProgressSpinner';

import classes from './active-trip.module.css';

function ActiveTrip({ bottomContent, bottomActions }) {
  const { getTrips, trip, status } = useTrip();

  useEffect(() => {
    getTrips(true);
  }, [getTrips]);

  if (status === REQUEST_STATUS.LOADING) {
    return <ProgressSpinner isShow />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.block__title}>
        <h2 className={classes.title}>Active trip</h2>
      </div>
      <div className={classes.line} />
      <div className={classes.treep__wrapper}>
        <div className={classes.treep__container}>
          <div className={classes.treep__content}>
            <img className={classes.car__img} src={trip.driver.car.photo} alt="Car" />
            <div className={classes.block__info}>
              <div className={classes.info__item}>
                <p className={classes.info__title}>From:</p>
                <p className={classes.info__text}>{trip.source}</p>
              </div>
              <div className={classes.info__item}>
                <p className={classes.info__title}>To:</p>
                <p className={classes.info__text}>{trip.destination}</p>
              </div>
              <div style={{ marginTop: '50px' }}>
                <div className={classes.info__item}>
                  <p className={classes.info__title}>Price:</p>
                  <p className={classes.info__text}>${trip.price}</p>
                </div>
                <div className={classes.info__item}>
                  <p className={classes.info__title}>Driver:</p>
                  <p className={classes.info__text}>
                    {trip.driver.firstName} {trip.driver.lastName}
                  </p>
                </div>
                <div className={classes.info__item}>
                  <p className={classes.info__title}>Car:</p>
                  <p className={classes.info__text}>
                    {trip.driver.car.color} {trip.driver.car.make} {trip.driver.car.model}{' '}
                    {trip.driver.car.year}
                  </p>
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
