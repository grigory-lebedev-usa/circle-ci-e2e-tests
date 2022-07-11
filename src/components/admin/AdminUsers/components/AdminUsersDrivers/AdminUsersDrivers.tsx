import { Users } from '../../admin-users.types';
import AdminUsers from '../../AdminUsers';

import DriversTable from './components/DriversTable/DriversTable';

function AdminUsersDrivers() {
  const renderTableCallback = (items: Users[]) => {
    return <DriversTable items={items} />;
  };
  return <AdminUsers renderTable={renderTableCallback} />;
}

export default AdminUsersDrivers;
