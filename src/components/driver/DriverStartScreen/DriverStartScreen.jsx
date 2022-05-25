import { Navigate } from 'react-router-dom';

import useUser from '../../../shared/hooks/useUser';
import { PUBLIC_ROUTES } from '../../../constants/app.constants';

import UploadDriverPhoto from './components/UploadDriverPhoto';

function DriverStartScreen() {
  const { user } = useUser;
  const hasCarPhoto = Boolean(user?.car?.photo);
  return hasCarPhoto ? <Navigate to={PUBLIC_ROUTES.HOME} replace /> : <UploadDriverPhoto />;
}

export default DriverStartScreen;
