import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PRIVATE_ROUTES } from '../constants/app.constants';
import { userSelector } from '../slices/user.slice';

function UploadPhotoGuard({ children }) {
  const {
    userData: { car }
  } = useSelector(userSelector);

  if (!car?.photo) {
    return <Navigate to={PRIVATE_ROUTES.DRIVER_START} replace />;
  }
  return children;
}

UploadPhotoGuard.propTypes = {
  children: PropTypes.node.isRequired
};

export default UploadPhotoGuard;
