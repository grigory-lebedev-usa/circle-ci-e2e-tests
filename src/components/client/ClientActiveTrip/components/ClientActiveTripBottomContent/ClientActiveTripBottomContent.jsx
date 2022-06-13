import { useTrip } from '../../../../../api/hooks/useTrip/useTrip';

import classes from './client-active-trip-bottom-content.module.css';

function ClientActiveTripBottomContent() {
  const { trip } = useTrip();
  return (
    <div className={classes.info__item}>
      <p className={classes.info__title}>Rating:</p>
      <p className={classes.info__text}>{trip.driver.rating || '-'}</p>
    </div>
  );
}

export default ClientActiveTripBottomContent;
