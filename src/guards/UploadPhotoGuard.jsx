import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PRIVATE_ROUTES } from '../constants/app.constants';

function UploadPhotoGuard({ children }) {
  const {
    userData: { car }
  } = useSelector((state) => state.user);

  if (!car?.photo) {
    return <Navigate to={PRIVATE_ROUTES.DRIVER_START} replace />;
  }
  return children;
}

UploadPhotoGuard.propTypes = {
  children: PropTypes.node.isRequired
};

export default UploadPhotoGuard;
