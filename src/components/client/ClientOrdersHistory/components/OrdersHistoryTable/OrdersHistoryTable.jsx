import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import PropTypes from 'prop-types';

import { formatDate } from '../../../../helpers/helpers';

import ArrowButtonReport from './components/ArrowButtonReport/ArrowButtonReport';

import DriverCar from './components/DriverCar/DriverCar';

function OrdersHistoryTable({ items }) {
  return (
    <Table sx={{ minWidth: '1100px', marginTop: '60px' }}>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>From</TableCell>
          <TableCell>To</TableCell>
          <TableCell>Driver</TableCell>
          <TableCell>Rate</TableCell>
          <TableCell>Coast</TableCell>
          <TableCell>Report</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{formatDate(item.createdAt)}</TableCell>
            <TableCell>{item.source}</TableCell>
            <TableCell>{item.destination}</TableCell>
            <TableCell>
              <DriverCar info={item} />
            </TableCell>
            <TableCell>{item.rating}</TableCell>
            <TableCell>${item.price}</TableCell>
            <TableCell>{item.report ? <ArrowButtonReport report={item.report} /> : ''}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

OrdersHistoryTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired
};

export default OrdersHistoryTable;
