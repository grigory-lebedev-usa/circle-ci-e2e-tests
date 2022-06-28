import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import PropTypes from 'prop-types';

import { formatDate } from '../../../../helpers/helpers';

function OrdersHistoryTable({ items }) {
  return (
    <Table sx={{ minWidth: '1100px', marginTop: '60px' }}>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>From</TableCell>
          <TableCell>To</TableCell>
          <TableCell>Client</TableCell>
          <TableCell>Coast</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{formatDate(item.createdAt)}</TableCell>
            <TableCell>{item.source}</TableCell>
            <TableCell>{item.destination}</TableCell>
            <TableCell>
              {item.client.firstName} {item.client.lastName}
            </TableCell>
            <TableCell>${item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

OrdersHistoryTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.object.isRequired
};

export default OrdersHistoryTable;
