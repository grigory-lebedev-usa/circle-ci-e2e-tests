import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import ArrowButtonReport from '../../../../../shared/components/ArrowButtonReport/ArrowButtonReport';
import DropDown from '../../../../../shared/components/DropDown/DropDown';
import DriverCar from '../../../../client/ClientOrdersHistory/components/OrdersHistoryTable/components/DriverCar/DriverCar';

import { formatDate } from '../../../../helpers/helpers';

import { ReportsTableProps } from './reports-table.types';
import { PAGINATION_ACTIONS } from './reports.constants';

function ReportsTable({ items }: ReportsTableProps) {
  return (
    <Table sx={{ minWidth: '1100px', marginTop: '60px' }}>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Comment</TableCell>
          <TableCell>Driver</TableCell>
          <TableCell>Client</TableCell>
          <TableCell>Car</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{formatDate(item.createdAt)}</TableCell>
            <TableCell>{item.comment ? <ArrowButtonReport report={item.comment} /> : ''}</TableCell>
            <TableCell>
              {item.driver?.firstName} {item.driver?.lastName}
            </TableCell>
            <TableCell>
              {item.client?.firstName} {item.client?.lastName}
            </TableCell>
            <TableCell>
              <DriverCar car={item.driver.car} />
            </TableCell>
            <TableCell>
              <DropDown hasAction value={null} items={PAGINATION_ACTIONS} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ReportsTable;
