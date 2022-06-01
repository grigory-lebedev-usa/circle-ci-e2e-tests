import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PUBLIC_ROUTES } from '../../../constants/app.constants';

import UploadDriverPhoto from './components/UploadDriverPhoto';

function DriverStartScreen() {
  const {
    userData: { car }
  } = useSelector((state) => state?.car);
  const hasCarPhoto = Boolean(car?.photo);
  return hasCarPhoto ? <Navigate to={PUBLIC_ROUTES.HOME} replace /> : <UploadDriverPhoto />;
}

export default DriverStartScreen;
