import { useLocation } from 'react-router-dom';

import { PRIVATE_ROUTES } from '../../../constants/app.constants';
import DropDown from '../../../shared/components/DropDown/DropDown';
import Link from '../../../shared/components/Link/Link';

import classes from './admin-users.module.css';
import { AdminUsersRenderTableProps } from './admin-users.types';

function AdminUsers({ renderTable }: AdminUsersRenderTableProps) {
  const { pathname } = useLocation();

  return (
    <div className={classes.container}>
      <div className={classes.block__title}>
        <div
          className={
            pathname === PRIVATE_ROUTES.USERS_CLIENTS
              ? `${classes.title__item} ${classes.title__item_active}`
              : classes.title__item
          }
        >
          <Link to={PRIVATE_ROUTES.USERS_CLIENTS}>
            <h2 className={classes.title}>Clients</h2>
          </Link>
        </div>
        <div
          className={
            pathname === PRIVATE_ROUTES.USERS_DRIVERS
              ? `${classes.title__item} ${classes.title__item_active}`
              : classes.title__item
          }
        >
          <Link to={PRIVATE_ROUTES.USERS_DRIVERS}>
            <h2 className={classes.title}>Drivers</h2>
          </Link>
        </div>
      </div>
      <div className={classes.dropdown__block}>
        <div className={classes.dropdown__title}>Items per page</div>
        <DropDown
          items={[
            { id: 1, value: 5 },
            { id: 2, value: 10 },
            { id: 3, value: 15 },
            { id: 4, value: 20 }
          ]}
        />
      </div>
    </div>
  );
}

export default AdminUsers;
