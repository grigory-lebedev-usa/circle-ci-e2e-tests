import { ChangeEvent, useEffect, useState } from 'react';

import { Pagination } from '@mui/material';

import { useReports } from '../../../../../api/hooks/useReports/useReports';

import { REQUEST_STATUS } from '../../../../../constants/app.constants';

import DropDown from '../../../../../shared/components/DropDown/DropDown';

import ProgressSpinner from '../../../../../shared/components/ProgressSpinner/ProgressSpinner';

import { computedCount } from '../../../../helpers/helpers';

import { DropDownItem, ReportsProps } from './reports-types';

import classes from './reports.module.css';

function Reports({ renderTable }: ReportsProps) {
  const {
    getReports,
    status,
    reports: { total, items = [] }
  } = useReports();
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  useEffect(() => {
    setCount(computedCount(total, rowsPerPage));
    getReports(page - 1, rowsPerPage);
  }, [getReports, page, rowsPerPage, total]);

  if (status === REQUEST_STATUS.LOADING) {
    return <ProgressSpinner isShow />;
  }

  const handleChangePage = (event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (item: DropDownItem) => {
    setRowsPerPage(item.value);
    setPage(1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.block__title}>
        <h2 className={classes.title}>Reports</h2>
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
          marginBottom: '40px'
        }}
      >
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

export default Reports;
