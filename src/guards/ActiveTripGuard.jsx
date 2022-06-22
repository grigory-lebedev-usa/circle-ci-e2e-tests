import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

import { PRIVATE_ROUTES, REQUEST_STATUS } from '../constants/app.constants';
import { tripsSelector } from '../selectors/trips.selectors';
import ProgressSpinner from '../shared/components/ProgressSpinner/ProgressSpinner';

function ActiveTripGuard({ children }) {
  const { activeTrip, status } = useSelector(tripsSelector);

  if (status === REQUEST_STATUS.LOADING) {
    return <ProgressSpinner isShow />;
  }

  if (activeTrip.active === true) {
    return <Navigate to={PRIVATE_ROUTES.TRIP} replace />;
  }

  return children;
}

ActiveTripGuard.propTypes = {
  children: PropTypes.node.isRequired
};

export default ActiveTripGuard;
