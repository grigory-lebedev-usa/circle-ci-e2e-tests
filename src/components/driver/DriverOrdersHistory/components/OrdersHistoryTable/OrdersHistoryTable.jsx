import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

function OrdersHistoryTable({ items }) {
  const { t } = useTranslation();
  return (
    <Table sx={{ minWidth: '1100px', marginTop: '60px' }}>
      <TableHead>
        <TableRow>
          <TableCell>{t('table.date')}</TableCell>
          <TableCell>{t('table.from')}</TableCell>
          <TableCell>{t('table.to')}</TableCell>
          <TableCell>{t('table.client')}</TableCell>
          <TableCell>{t('table.coast')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{moment(item.createdAt).format('DD.MM.YYYY')}</TableCell>
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
  items: PropTypes.array.isRequired
};

export default OrdersHistoryTable;
