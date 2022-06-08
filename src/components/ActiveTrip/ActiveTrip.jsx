import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { USER_ROLES } from '../../constants/user-roles.constants';

import Button from '../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS
} from '../../shared/components/Button/button.constants';

import classes from './active-trip.module.css';

function ActiveTrip() {
  const [isDriver, setIsDriver] = useState(false);
  const {
    userData: { role }
  } = useSelector((state) => state.user);
  useEffect(() => {
    setIsDriver(role === USER_ROLES.DRIVER);
  }, [role]);
  return (
    <div className={classes.container}>
      <div className={classes.block__title}>
        <h2 className={classes.title}>Active trip</h2>
      </div>
      <div className={classes.line} />
      <div className={classes.treep__wrapper}>
        <div className={classes.treep__container}>
          <div className={classes.treep__content}>
            <div className={classes.car__img} />
            <div className={classes.block__info}>
              <div className={classes.info__item}>
                <p className={classes.info__title}>From:</p>
                <p className={classes.info__text}>Chkalova</p>
              </div>
              <div className={classes.info__item}>
                <p className={classes.info__title}>To:</p>
                <p className={classes.info__text}>Lenina</p>
              </div>
              <div style={{ marginTop: '50px' }}>
                <div className={classes.info__item}>
                  <p className={classes.info__title}>Price:</p>
                  <p className={classes.info__text}>$5.3</p>
                </div>
                <div className={classes.info__item}>
                  <p className={classes.info__title}>Driver:</p>
                  <p className={classes.info__text}>Ivan Ivanov</p>
                </div>
                <div className={classes.info__item}>
                  <p className={classes.info__title}>Car:</p>
                  <p className={classes.info__text}>yellow Chevrolet Camaro 2020</p>
                </div>
                {isDriver || (
                  <div className={classes.info__item}>
                    <p className={classes.info__title}>Rating:</p>
                    <p className={classes.info__text}>4.8</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {isDriver || (
            <Button
              variant={BUTTON_VARIANTS.CONTAINED}
              color={BUTTON_COLORS.SECONDARY}
              type={BUTTON_TYPES.BUTTON}
              size={BUTTON_SIZES.MEDIUM_LONG}
              className={classes.treep__button}
            >
              Finish treep
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ActiveTrip;
