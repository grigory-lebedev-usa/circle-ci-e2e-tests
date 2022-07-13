import { useCallback } from 'react';

import { Users } from '../../admin-users.types';
import AdminUsers from '../../AdminUsers';

import DriversTable from './components/DriversTable/DriversTable';

function AdminUsersDrivers() {
  const renderTableCallback = useCallback((items: Users[]) => {
    return <DriversTable items={items} />;
  }, []);
  return <AdminUsers renderTable={renderTableCallback} />;
}

export default AdminUsersDrivers;
