import { useEffect } from 'react';

import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { PUBLIC_ROUTES } from '../../../../constants/app.constants';
import useUser from '../../../hooks/useUser/useUser';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';

function PrivateRoute({ children, roles }) {
  const {
    isAuthenticated,
    getUser,
    user: { role }
  } = useUser();
  useEffect(() => {
    getUser();
  }, [getUser]);
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
