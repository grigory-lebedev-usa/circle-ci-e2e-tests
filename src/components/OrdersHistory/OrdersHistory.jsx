import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { Pagination, TablePagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { REQUEST_STATUS } from '../../constants/app.constants';
import ProgressSpinner from '../../shared/components/ProgressSpinner/ProgressSpinner';

import { getTrips, tripsSelector } from '../../reducers/trips.slice';

import classes from './orders-history.module.css';

function OrdersHistory({ renderTable }) {
  const dispatch = useDispatch();
  const {
    inactiveTrips: { items = [], total },
    status
  } = useSelector(tripsSelector);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    setCount(Math.round(total / rowsPerPage));
    dispatch(getTrips({ page: page - 1, size: rowsPerPage }));
  }, [dispatch, page, rowsPerPage, total]);

  if (status === REQUEST_STATUS.LOADING) {
    return <ProgressSpinner isShow />;
  }

  const handleChangePage = async (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.block__title}>
        <h2 className={classes.title}>Order’s History</h2>
      </div>
      <div className={classes.line} />
      <TablePagination
        sx={{ position: 'absolute', right: 0, top: 0 }}
        rowsPerPageOptions={[5, 10, 15, 20]}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {renderTable(items)}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Pagination
          count={count}
          size="large"
          page={page}
          onChange={handleChangePage}
          color="secondary"
          hidePrevButton
          hideNextButton
          siblingCount={3}
          boundaryCount={1}
        />
      </div>
    </div>
  );
}

OrdersHistory.propTypes = {
  renderTable: PropTypes.func.isRequired
};

export default OrdersHistory;
