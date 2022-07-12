import { useCallback } from 'react';

import { Users } from '../../admin-users.types';
import AdminUsers from '../../AdminUsers';

import ClientsTable from './components/ClientsTable/ClientsTable';

function AdminUsersClients() {
  const renderTableCallback = useCallback((items: Users[]) => {
    return <ClientsTable items={items} />;
  }, []);
  return <AdminUsers renderTable={renderTableCallback} />;
}

export default AdminUsersClients;
