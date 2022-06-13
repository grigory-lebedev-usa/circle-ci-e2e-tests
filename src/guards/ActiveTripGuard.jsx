import { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useTrips } from '../api/hooks/useTrips/useTrips';
import { PRIVATE_ROUTES, REQUEST_STATUS } from '../constants/app.constants';
import ProgressSpinner from '../shared/components/ProgressSpinner/ProgressSpinner';

function ActiveTripGuard({ children }) {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { getActiveTrip, activeTrip, status } = useTrips();

  useEffect(() => {
    if (isAuthenticated) {
      getActiveTrip();
    }
  }, [getActiveTrip, isAuthenticated]);

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
