import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useUser } from '../../../../api/hooks/useUser';

import { PUBLIC_ROUTES } from '../../../../constants/app.constants';

import useAuth from '../../../hooks/useAuth';

function PrivateRoute({ children, roles }) {
  const { isAuthed } = useAuth();
  const {
    user: { role }
  } = useUser();
  const hasPermissions = roles.includes(role);
  if (!isAuthed) {
    return <Navigate to={PUBLIC_ROUTES.LOGIN} replace />;
  }
  if (!hasPermissions) {
    return (
      <div>
        <p>You dont have permissions</p>
      </div>
    );
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
