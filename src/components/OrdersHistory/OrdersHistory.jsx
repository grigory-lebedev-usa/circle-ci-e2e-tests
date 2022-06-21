import React, { useState, useEffect } from 'react';

import { Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { TRIPS_GET } from '../../actions/trips/trips.actions';

function OrdersHistory() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.trips.inactiveTrips);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(TRIPS_GET(false, page, 2));
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
        count={10}
        size="large"
        page={page}
        onChange={handleChange}
        color="secondary"
        hidePrevButton
        hideNextButton
        defaultPage={1}
        siblingCount={5}
        boundaryCount={2}
      />
    </div>
  );
}

export default OrdersHistory;
