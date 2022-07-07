import { PRIVATE_ROUTES } from '../../../../../constants/app.constants';
import Button from '../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS
} from '../../../../../shared/components/Button/button.constants';
import Link from '../../../../../shared/components/Link/Link';

import classes from './admin-actions.module.css';

function AdminActions() {
  return (
    <div className={classes.block__buttons}>
      <Button
        size={BUTTON_SIZES.LARGE}
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.CONTAINED}
        type={BUTTON_TYPES.BUTTON}
        className={classes.button}
      >
        Reports
      </Button>
      <Link to={PRIVATE_ROUTES.USERS_CLIENTS}>
        <Button
          size={BUTTON_SIZES.LARGE}
          color={BUTTON_COLORS.PRIMARY}
          variant={BUTTON_VARIANTS.CONTAINED}
          type={BUTTON_TYPES.BUTTON}
        >
          All users
        </Button>
      </Link>
    </div>
  );
}

export default AdminActions;
