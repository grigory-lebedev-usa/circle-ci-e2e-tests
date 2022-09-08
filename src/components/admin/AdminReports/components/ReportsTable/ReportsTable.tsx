import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import moment from 'moment';

import ArrowButtonReport from '../../../../../shared/components/ArrowButtonReport/ArrowButtonReport';

import DriverCar from '../../../../client/ClientOrdersHistory/components/OrdersHistoryTable/components/DriverCar/DriverCar';

import { ReportsTableProps } from './reports-table.types';
import DropDownActions from './components/DropDownActions/DropDownActions';

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
            <TableCell>{moment(item.createdAt).format('DD.MM.YYYY')}</TableCell>
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
              <DropDownActions userInfo={item} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ReportsTable;
