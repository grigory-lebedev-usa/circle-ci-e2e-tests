import { useEffect } from 'react';

import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { PUBLIC_ROUTES } from '../../../../constants/app.constants';

import NotFoundPage from '../../NotFoundPage/NotFoundPage';
import { getUser } from '../../../../actions/user/user.async-actions';

function PrivateRoute({ children, roles }) {
  const dispatch = useDispatch();
  const role = 'client';
  const isAuthenticated = true;
  const user = useSelector((state) => state.user);

  console.log(user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

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
