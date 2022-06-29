import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import ClientOrdersHistory from '../../../../../components/client/ClientOrdersHistory/ClientOrdersHistory';

import DriverOrdersHistory from '../../../../../components/driver/DriverOrdersHistory/DriverOrdersHistory';
import { PUBLIC_ROUTES } from '../../../../../constants/app.constants';

import { USER_ROLES } from '../../../../../constants/user-roles.constants';
import { userSelector } from '../../../../../slices/user.slice';

function OrdersHistoryRoutes() {
  const {
    userData: { role }
  } = useSelector(userSelector);

  if (role === USER_ROLES.DRIVER) {
    return <DriverOrdersHistory />;
  }
  if (role === USER_ROLES.CLIENT) {
    return <ClientOrdersHistory />;
  }
  return <Navigate to={PUBLIC_ROUTES.NOT_FOUND_PAGE} replace />;
}

export default OrdersHistoryRoutes;
