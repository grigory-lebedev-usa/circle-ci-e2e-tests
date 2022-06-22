import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import ClientActiveTrip from '../../../../../components/client/ClientActiveTrip/ClientActiveTrip';

import DriverActiveTrip from '../../../../../components/driver/DriverActiveTrip/DriverActiveTrip';
import { PUBLIC_ROUTES } from '../../../../../constants/app.constants';
import { USER_ROLES } from '../../../../../constants/user-roles.constants';
import { userSelector } from '../../../../../selectors/user.selectors';

function ActiveTripRoutes() {
  const {
    userData: { role }
  } = useSelector(userSelector);

  if (role === USER_ROLES.DRIVER) {
    return <DriverActiveTrip />;
  }
  if (role === USER_ROLES.CLIENT) {
    return <ClientActiveTrip />;
  }
  return <Navigate to={PUBLIC_ROUTES.NOT_FOUND_PAGE} replace />;
}

export default ActiveTripRoutes;
