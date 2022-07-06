import { useSelector } from 'react-redux';

import { USER_ROLES } from '../../../../../constants/user-roles.constants';
import ClientHome from '../../../../../components/client/ClientHome/ClientHome';
import DriverHome from '../../../../../components/driver/DriverHome/DriverHome';
import AdminHome from '../../../../../components/admin/AdminHome/AdminHome';
import ActiveOrderGuard from '../../../../../guards/ActiveOrderGuard';
import UploadPhotoGuard from '../../../../../guards/UploadPhotoGuard';
import ActiveTripGuard from '../../../../../guards/ActiveTripGuard';
import { userSelector } from '../../../../../slices/user.slice';

function HomeRoutes() {
  const {
    userData: { role }
  } = useSelector(userSelector);

  if (role === USER_ROLES.CLIENT) {
    return (
      <ActiveOrderGuard>
        <ActiveTripGuard>
          <ClientHome />
        </ActiveTripGuard>
      </ActiveOrderGuard>
    );
  }

  if (role === USER_ROLES.DRIVER) {
    return (
      <UploadPhotoGuard>
        <ActiveTripGuard>
          <DriverHome />
        </ActiveTripGuard>
      </UploadPhotoGuard>
    );
  }

  if (role === USER_ROLES.ADMIN) {
    return <AdminHome />;
  }
}

export default HomeRoutes;
