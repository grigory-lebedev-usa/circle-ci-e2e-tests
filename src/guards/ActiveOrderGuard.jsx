import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { PRIVATE_ROUTES } from '../constants/app.constants';

function ActiveOrderGuard({ children }) {
  const {
    userData: { currentOrder }
  } = useSelector((state) => state.user);

  if (currentOrder) {
    return <Navigate to={PRIVATE_ROUTES.CURRENT_ORDER} replace />;
  }
  return children;
}

ActiveOrderGuard.propTypes = {
  children: PropTypes.node.isRequired
};

export default ActiveOrderGuard;
