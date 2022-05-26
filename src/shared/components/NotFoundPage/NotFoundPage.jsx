import { PRIVATE_ROUTES } from '../../../constants/app.constants';
import Button from '../Button/Button';
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '../Button/button.constants';
import Link from '../Link/Link';

import classes from './not-found-page.module.css';

function NotFoundPage() {
  return (
    <div className={classes.notfound__container}>
      <h1 className={classes.notfound__title}>Not found page</h1>
      <Link to={PRIVATE_ROUTES.HOME}>
        <Button
          size={BUTTON_SIZES.BIG}
          color={BUTTON_COLORS.PRIMARY}
          variant={BUTTON_VARIANTS.CONTAINED}
        >
          Go home
        </Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
