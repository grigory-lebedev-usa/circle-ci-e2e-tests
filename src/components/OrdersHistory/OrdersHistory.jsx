import React, { useState, useEffect } from 'react';

import { Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getTrips, inactiveTripsSelector } from '../../reducers/trips.slice';

function OrdersHistory() {
  const dispatch = useDispatch();
  const { items } = useSelector(inactiveTripsSelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getTrips({ page, size: 2 }));
  }, [dispatch, page]);

  const handleChange = async (event, value) => {
    setPage(value);
    // TODO: console.log testing pagination
    // eslint-disable-next-line no-console
    console.log(items);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '250px' }}>
      <Pagination
        count={20}
        size="large"
        page={page}
        onChange={handleChange}
        color="secondary"
        hidePrevButton
        hideNextButton
        defaultPage={1}
        siblingCount={3}
        boundaryCount={1}
      />
    </div>
  );
}

export default OrdersHistory;
