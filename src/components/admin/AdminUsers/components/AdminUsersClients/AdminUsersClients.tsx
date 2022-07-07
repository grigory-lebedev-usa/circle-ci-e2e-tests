import { AdminUsersTableProps, AdminUsersType } from '../../admin-users.types';
import AdminUsers from '../../AdminUsers';

import ClientsTable from './components/ClientsTable/ClientsTable';

function AdminUsersClients() {
  const renderTableCallback = (items: AdminUsersType[]) => {
    return <ClientsTable items={items} />;
  };
  return <AdminUsers renderTable={renderTableCallback} />;
}

export default AdminUsersClients;
