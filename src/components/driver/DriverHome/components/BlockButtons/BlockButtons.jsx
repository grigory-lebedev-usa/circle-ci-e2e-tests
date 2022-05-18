import { PRIVATE_ROUTES } from '../../../../../constants/app.constants';
import Button from '../../../../../shared/components/Button/Button';
import {
  buttonColors,
  buttonSizes,
  buttonTypes
} from '../../../../../shared/components/Button/button.constants';

import Link from '../../../../../shared/components/Link/Link';

import classes from './block-buttons.module.css';

function BlockButtons() {
  return (
    <div className={classes.block__buttons}>
      <Link to={PRIVATE_ROUTES.DRIVER_ORDERS}>
        <Button
          size={buttonSizes.big}
          color={buttonColors.primary}
          className={classes.button}
          type={buttonTypes.button}>
          Start treep
        </Button>
      </Link>
      <Button size={buttonSizes.big} color={buttonColors.primary} type={buttonTypes.button}>
        View history
      </Button>
    </div>
  );
}

export default BlockButtons;
