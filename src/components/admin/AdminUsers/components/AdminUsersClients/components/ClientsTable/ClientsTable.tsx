import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import moment from 'moment';

import Hint from '../../../../../../../shared/components/Hint/Hint';
import AdminBlock from '../../../../../AdminActions/components/AdminBlock/AdminBlock';
import AdminUnblock from '../../../../../AdminActions/components/AdminUnblock/AdminUnblock';

import { AdminUsersTableProps } from '../../../../admin-users.types';

import classes from './clients-table.module.css';

function ClientsTable({ items, getUsers }: AdminUsersTableProps) {
  return (
    <Table sx={{ minWidth: '1100px', marginTop: '60px' }}>
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className={classes.block__hint}>
                {item.blocked ? (
                  <Hint
                    content={
                      item.blockedUntil
                        ? `User is blocked until ${moment(item.blockedUntil).format(
                            'DD.MM.YYYY LTS'
                          )}`
                        : 'User is blocked permanently'
                    }
                  >
                    <img src="/img/lock_icon.svg" alt="lock_icon" />
                  </Hint>
                ) : null}
              </div>
              {item.firstName}
            </TableCell>
            <TableCell>{item.lastName}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              {item.blocked ? (
                <AdminUnblock getUsers={getUsers} userInfo={item} />
              ) : (
                <AdminBlock getUsers={getUsers} userInfo={item} title="Block client" />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ClientsTable;
