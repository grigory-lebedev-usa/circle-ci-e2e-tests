import { useSelector } from 'react-redux';

import { USER_ROLES } from '../../../../../constants/user-roles.constants';
import ClientHome from '../../../../../components/client/ClientHome/ClientHome';
import DriverHome from '../../../../../components/driver/DriverHome/DriverHome';
import AdminHome from '../../../../../components/admin/AdminHome/AdminHome';
import ActiveOrderGuard from '../../../../../guards/ActiveOrderGuard';
import UploadPhotoGuard from '../../../../../guards/UploadPhotoGuard';

function HomeRoutes() {
  const {
    userData: { role }
  } = useSelector((state) => state.user);

  if (role === USER_ROLES.CLIENT) {
    return (
      <ActiveOrderGuard>
        <ClientHome />
      </ActiveOrderGuard>
    );
  }

  if (role === USER_ROLES.DRIVER) {
    return (
      <UploadPhotoGuard>
        <DriverHome />
      </UploadPhotoGuard>
    );
  }

  if (role === USER_ROLES.ADMIN) {
    return <AdminHome />;
  }
}

export default HomeRoutes;
