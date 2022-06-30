import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { REQUEST_STATUS } from '../../constants/app.constants';
import ProgressSpinner from '../../shared/components/ProgressSpinner/ProgressSpinner';

import { getTrips, tripsSelector } from '../../slices/trips.slice';
import DropDown from '../../shared/components/DropDown/DropDown';

import { computedCount } from '../helpers/helpers';

import { addNotification } from '../../slices/notifications.slice';
import { NOTIFICATION_TYPES } from '../../shared/components/Notifications/components/Notification/notification.constants';

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
    setCount(computedCount(total, rowsPerPage));
    dispatch(getTrips({ page: page - 1, size: rowsPerPage }))
      .unwrup()
      .catch(({ message }) =>
        dispatch(addNotification({ type: NOTIFICATION_TYPES.ERROR, message }))
      );
  }, [dispatch, page, rowsPerPage, total]);

  if (status === REQUEST_STATUS.LOADING) {
    return <ProgressSpinner isShow />;
  }

  const handleChangePage = async (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (item) => {
    setRowsPerPage(item.value);
    setPage(1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.block__title}>
        <h2 className={classes.title}>Order’s History</h2>
      </div>
      <div className={classes.line} />
      <div className={classes.dropdown__block}>
        <div className={classes.dropdown__title}>Items per page</div>
        <DropDown
          value={rowsPerPage}
          onListItemClick={handleChangeRowsPerPage}
          items={[
            { id: 1, value: 5 },
            { id: 2, value: 10 },
            { id: 3, value: 15 },
            { id: 4, value: 20 }
          ]}
        />
      </div>

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
