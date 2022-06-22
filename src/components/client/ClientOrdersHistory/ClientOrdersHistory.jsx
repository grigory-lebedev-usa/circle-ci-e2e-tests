import React from 'react';

import OrdersHistory from '../../OrdersHistory/OrdersHistory';

import TableOrdersHistory from './components/TableOrdersHistory/TableOrdersHistory';

function ClientOrdersHistory() {
  const renderTableCallback = (items) => {
    return <TableOrdersHistory items={items} />;
  };
  return <OrdersHistory renderTable={renderTableCallback} />;
}

export default ClientOrdersHistory;