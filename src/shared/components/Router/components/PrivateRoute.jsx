import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { PUBLIC_ROUTES } from '../../../../constants/app.constants';

import useAuth from '../../../hooks/useAuth';

function PrivateRoute({ children }) {
  const { isAuthed } = useAuth();
  return isAuthed === true ? children : <Navigate to={PUBLIC_ROUTES.LOGIN} replace />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrivateRoute;
