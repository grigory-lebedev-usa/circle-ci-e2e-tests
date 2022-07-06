import PropTypes from 'prop-types';

import classes from './not-found-data.module.css';

function NotFoundData({ text }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.message__container}>
        <p className={classes.message}>{text}</p>
      </div>
    </div>
  );
}

NotFoundData.propTypes = {
  text: PropTypes.string.isRequired
};

export default NotFoundData;
