import { AdminUsersType } from '../../admin-users.types';
import AdminUsers from '../../AdminUsers';

import DriversTable from './components/DriversTable/DriversTable';

function AdminUsersDrivers() {
  const renderTableCallback = (items: AdminUsersType[]) => {
    return <DriversTable items={items} />;
  };
  return <AdminUsers renderTable={renderTableCallback} />;
}

export default AdminUsersDrivers;
