import { useCallback } from 'react';

import { Users } from '../../admin-users.types';
import AdminUsers from '../../AdminUsers';

import ClientsTable from './components/ClientsTable/ClientsTable';

function AdminUsersClients() {
  const renderTableCallback = useCallback((items: Users[], getUsers: () => void) => {
    return <ClientsTable items={items} getUsers={getUsers} />;
  }, []);
  return <AdminUsers renderTable={renderTableCallback} />;
}

export default AdminUsersClients;
