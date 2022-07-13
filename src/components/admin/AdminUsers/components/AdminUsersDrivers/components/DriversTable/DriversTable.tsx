import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import Button from '../../../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../../../../../../../shared/components/Button/button.constants';
import Hint from '../../../../../../../shared/components/Hint/Hint';

import DriverCar from '../../../../../../client/ClientOrdersHistory/components/OrdersHistoryTable/components/DriverCar/DriverCar';
import { formatDateHint } from '../../../../../../helpers/helpers';
import AdminBlock from '../../../../../AdminActions/components/AdminBlock/AdminBlock';

import { AdminUsersTableProps } from '../../../../admin-users.types';

import classes from './drivers-table.module.css';

function DriversTable({ items }: AdminUsersTableProps) {
  return (
    <Table sx={{ minWidth: '1100px', marginTop: '60px' }}>
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Car</TableCell>
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
                        ? `User is blocked until ${formatDateHint(item.blockedUntil)}`
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
              <DriverCar car={item.car} />
            </TableCell>
            <TableCell>
              <AdminBlock userInfo={item} title="Block driver" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DriversTable;
