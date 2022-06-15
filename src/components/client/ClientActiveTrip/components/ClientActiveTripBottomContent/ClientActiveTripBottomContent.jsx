import { useSelector } from 'react-redux';

import classes from './client-active-trip-bottom-content.module.css';

function ClientActiveTripBottomContent() {
  const { activeTrip } = useSelector((state) => state.trips);
  return (
    <div className={classes.info__item}>
      <p className={classes.info__title}>Rating:</p>
      <p className={classes.info__text}>{activeTrip.driver.rating || '-'}</p>
    </div>
  );
}

export default ClientActiveTripBottomContent;
