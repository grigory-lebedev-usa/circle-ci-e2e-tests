import Button from '../../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS
} from '../../../../../shared/components/Button/button.constants';

import classes from './bottom-actions.module.css';

function BottomActions() {
  return (
    <Button
      variant={BUTTON_VARIANTS.CONTAINED}
      color={BUTTON_COLORS.SECONDARY}
      type={BUTTON_TYPES.BUTTON}
      size={BUTTON_SIZES.MEDIUM_LONG}
      className={classes.treep__button}
    >
      Finish treep
    </Button>
  );
}

export default BottomActions;
