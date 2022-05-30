import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import useUser from '../../../hooks/useUser/useUser';

import { PUBLIC_ROUTES } from '../../../../constants/app.constants';

import NotFoundPage from '../../NotFoundPage/NotFoundPage';

function PrivateRoute({ children, roles }) {
  const {
    isAuthenticated,
    user: { role }
  } = useUser();
  const hasPermissions = roles.includes(role);
  if (!isAuthenticated) {
    return <Navigate to={PUBLIC_ROUTES.LOGIN} replace />;
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
