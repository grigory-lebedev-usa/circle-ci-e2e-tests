import { PRIVATE_ROUTES } from '../../../constants/app.constants';
import Button from '../Button/Button';
import { buttonColors, buttonSizes } from '../Button/button.constants';
import Link from '../Link/Link';

import classes from './not-found-page.module.css';

function NotFoundPage() {
  return (
    <div className={classes.notfound__container}>
      <h1 className={classes.notfound__title}>Not found page</h1>
      <Link to={PRIVATE_ROUTES.HOME}>
        <Button size={buttonSizes.big} color={buttonColors.primary}>
          Go home
        </Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
