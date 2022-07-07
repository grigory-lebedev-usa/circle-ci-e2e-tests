import { ChangeEvent, useEffect, useState } from 'react';

import { Pagination } from '@mui/material';

import { useReports } from '../../../../../api/hooks/useReports/useReports';

import {
  PAGINATION_VARIANTS_NUMBERS,
  REQUEST_STATUS,
  START_BOUNDARY_COUNT,
  START_ITEM_PAGE,
  START_PAGE,
  START_SUBLING_COUNT
} from '../../../../../constants/app.constants';

import DropDown from '../../../../../shared/components/DropDown/DropDown';

import ProgressSpinner from '../../../../../shared/components/ProgressSpinner/ProgressSpinner';

import { calculatePagesCount } from '../../../../helpers/helpers';

import { DropDownItem, ReportsProps } from './reports-types';

import classes from './reports.module.css';

function Reports({ renderTable }: ReportsProps) {
  const {
    getReports,
    status,
    reports: { total, items = [] }
  } = useReports();
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(START_PAGE);
  const [rowsPerPage, setRowsPerPage] = useState<number>(START_ITEM_PAGE);

  useEffect(() => {
    setCount(calculatePagesCount(total, rowsPerPage));
    getReports(page - START_PAGE, rowsPerPage);
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
          items={PAGINATION_VARIANTS_NUMBERS}
        />
      </div>
      {renderTable(items)}
      <div className={classes.pagination__block}>
        <Pagination
          count={count}
          size="large"
          page={page}
          onChange={handleChangePage}
          color="secondary"
          hidePrevButton
          hideNextButton
          siblingCount={START_SUBLING_COUNT}
          boundaryCount={START_BOUNDARY_COUNT}
        />
      </div>
    </div>
  );
}

export default Reports;
