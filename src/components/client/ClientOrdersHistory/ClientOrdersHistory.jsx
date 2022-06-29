import React from 'react';

import OrdersHistory from '../../OrdersHistory/OrdersHistory';

import OrdersHistoryTable from './components/OrdersHistoryTable/OrdersHistoryTable';

function ClientOrdersHistory() {
  const renderTableCallback = (items) => {
    return <OrdersHistoryTable items={items} />;
  };
  return <OrdersHistory renderTable={renderTableCallback} />;
}

export default ClientOrdersHistory;
