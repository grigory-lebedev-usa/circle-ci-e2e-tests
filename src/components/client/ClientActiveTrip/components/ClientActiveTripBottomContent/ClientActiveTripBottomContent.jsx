import { useTrips } from '../../../../../api/hooks/useTrips/useTrips';

import classes from './client-active-trip-bottom-content.module.css';

function ClientActiveTripBottomContent() {
  const { activeTrip } = useTrips();
  return (
    <div className={classes.info__item}>
      <p className={classes.info__title}>Rating:</p>
      <p className={classes.info__text}>{activeTrip.driver.rating || '-'}</p>
    </div>
  );
}

export default ClientActiveTripBottomContent;
