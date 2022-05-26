import { useEffect } from 'react';

import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import useUser from '../../../hooks/useUser';

import { PUBLIC_ROUTES } from '../../../../constants/app.constants';

import useAuth from '../../../hooks/useAuth';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';

function PrivateRoute({ children, roles }) {
  const { isAuthed } = useAuth();
  const {
    getUser,
    user: { role }
  } = useUser();
  useEffect(() => {
    getUser();
  }, [getUser]);
  const hasPermissions = roles.includes(role);
  if (!isAuthed) {
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
