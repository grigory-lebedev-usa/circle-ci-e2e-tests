import React from 'react';

import OrdersHistory from '../../OrdersHistory/OrdersHistory';

import OrderHistoryTable from './components/OrdersHistoryTable/OrderHistoryTable';

function ClientOrdersHistory() {
  const renderTableCallback = (items) => {
    return <OrderHistoryTable items={items} />;
  };
  return <OrdersHistory renderTable={renderTableCallback} />;
}

export default ClientOrdersHistory;
