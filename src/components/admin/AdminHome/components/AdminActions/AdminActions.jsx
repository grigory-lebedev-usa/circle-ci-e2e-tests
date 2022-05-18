import Button from '../../../../../shared/components/Button/Button';
import {
  buttonColors,
  buttonSizes,
  buttonTypes
} from '../../../../../shared/components/Button/button.constants';

import classes from './admin-actions.module.css';

function AdminActions() {
  return (
    <div className={classes.block__buttons}>
      <Button
        size={buttonSizes.big}
        color={buttonColors.primary}
        className={classes.button}
        type={buttonTypes.button}>
        Reports
      </Button>
      <Button size={buttonSizes.big} color={buttonColors.primary} type={buttonTypes.button}>
        All users
      </Button>
    </div>
  );
}

export default AdminActions;
