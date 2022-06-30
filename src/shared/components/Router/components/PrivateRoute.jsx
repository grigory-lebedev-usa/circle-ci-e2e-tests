import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PUBLIC_ROUTES, REQUEST_STATUS } from '../../../../constants/app.constants';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';
import ProgressSpinner from '../../ProgressSpinner/ProgressSpinner';
import { userSelector } from '../../../../slices/user.slice';

function PrivateRoute({ children, roles }) {
  const {
    userData: { role },
    isAuthenticated,
    status
  } = useSelector(userSelector);

  const hasPermissions = roles.includes(role);

  if (!isAuthenticated) {
    return <Navigate to={PUBLIC_ROUTES.LOGIN} replace />;
  }

  if (status === REQUEST_STATUS.LOADING || status === REQUEST_STATUS.IDLE) {
    return <ProgressSpinner isShow />;
  }

  if (!hasPermissions) {
    return <NotFoundPage />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string)
};

PrivateRoute.defaultProps = {
  roles: []
};

export default PrivateRoute;
