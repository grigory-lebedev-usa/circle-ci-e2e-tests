import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import moment from 'moment';

import ArrowButtonReport from '../../../../../shared/components/ArrowButtonReport/ArrowButtonReport';

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
            <TableCell>{moment(item.createdAt).format('DD.MM.YYYY')}</TableCell>
            <TableCell>{item.source}</TableCell>
            <TableCell>{item.destination}</TableCell>
            <TableCell>
              <DriverCar car={item.driver.car} info={item} hasDriverName />
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
