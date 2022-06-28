import { Rating } from '@mui/material';
import { useSelector } from 'react-redux';

import { userSelector } from '../../../../../reducers/user.slice';

import classes from './driver-rating.module.css';

function DriverRating() {
  const {
    userData: { rating }
  } = useSelector(userSelector);
  return (
    <div className={classes.block__rating}>
      <p className={classes.rating__text}>{rating || '-'}</p>
      <Rating max={1} defaultValue={1} readOnly sx={{ marginLeft: '5px' }} size="large" />
    </div>
  );
}

export default DriverRating;
