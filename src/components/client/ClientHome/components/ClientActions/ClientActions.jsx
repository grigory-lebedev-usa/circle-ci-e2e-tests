import { PRIVATE_ROUTES } from '../../../../../constants/app.constants';
import Button from '../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../../../../../shared/components/Button/button.constants';

import Link from '../../../../../shared/components/Link/Link';

import classes from './client-actions.module.css';

function ClientActions() {
  return (
    <div className={classes.block__buttons}>
      <Link to={PRIVATE_ROUTES.ORDER}>
        <Button
          size={BUTTON_SIZES.LARGE}
          color={BUTTON_COLORS.PRIMARY}
          variant={BUTTON_VARIANTS.CONTAINED}
          className={classes.button}
        >
          Create order
        </Button>
      </Link>
      <Button
        size={BUTTON_SIZES.LARGE}
        color={BUTTON_COLORS.PRIMARY}
        variant={BUTTON_VARIANTS.CONTAINED}
      >
        View history
      </Button>
    </div>
  );
}

export default ClientActions;
