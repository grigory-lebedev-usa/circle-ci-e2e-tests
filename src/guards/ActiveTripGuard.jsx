import { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PRIVATE_ROUTES, REQUEST_STATUS } from '../constants/app.constants';
import ProgressSpinner from '../shared/components/ProgressSpinner/ProgressSpinner';
import { ACTIVE_TRIP_GET } from '../actions/trips/trips.actions';

function ActiveTripGuard({ children }) {
  const dispatch = useDispatch();
  const { activeTrip, status } = useSelector((state) => state.trips);
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(ACTIVE_TRIP_GET());
    }
  }, [dispatch, isAuthenticated]);

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
