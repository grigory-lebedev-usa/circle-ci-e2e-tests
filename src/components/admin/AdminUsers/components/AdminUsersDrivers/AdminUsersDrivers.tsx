import { useCallback } from 'react';

import { Users } from '../../admin-users.types';
import AdminUsers from '../../AdminUsers';

import DriversTable from './components/DriversTable/DriversTable';

function AdminUsersDrivers() {
  const renderTableCallback = useCallback((items: Users[], getUsers: () => void) => {
    return <DriversTable getUsers={getUsers} items={items} />;
  }, []);
  return <AdminUsers renderTable={renderTableCallback} />;
}

export default AdminUsersDrivers;
