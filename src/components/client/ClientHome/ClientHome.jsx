import React from 'react';

import Button from '../../../shared/components/Button/Button';
import Link from '../../../shared/components/Link/Link';
import {
  buttonColors,
  buttonSizes,
  buttonTypes
} from '../../../shared/components/Button/button.constants';

import { PRIVATE_ROUTES } from '../../../constants/app.constants';

import { useUser } from '../../../api/hooks/useUser';

import classes from './client-home.module.css';

function ClientHome() {
  const {
    user: { firstName, lastName }
  } = useUser();
  return (
    <div className={classes.container}>
      <div className={classes.block__greetings}>
        <p className={classes.greetings__text}>
          Welcome<p className={classes.greetings__text}>{`${firstName} ${lastName}`}</p>
        </p>
      </div>
      <div className={classes.block__title}>
        <h2 className={classes.title}>The best taxi in the world</h2>
      </div>
      <div className={classes.line} />
      <div className={classes.block__text}>
        <p className={classes.text}>
          We will help you quickly and comfortably move anywhere in the world
        </p>
      </div>
      <div className={classes.block__qualities}>
        <p className={classes.qualities__text}>Quik</p>
        <div className={classes.qualities__circle} />
        <p className={classes.qualities__text}>Comfort</p>
        <div className={classes.qualities__circle} />
        <p className={classes.qualities__text}>24/7 Supports</p>
      </div>
      <div className={classes.block__buttons}>
        <Link to={PRIVATE_ROUTES.ORDER}>
          <Button
            size={buttonSizes.big}
            color={buttonColors.primary}
            className={classes.button}
            type={buttonTypes.button}>
            Create order
          </Button>
        </Link>
        <Button size={buttonSizes.big} color={buttonColors.primary} type={buttonTypes.button}>
          View history
        </Button>
      </div>
    </div>
  );
}

export default ClientHome;
