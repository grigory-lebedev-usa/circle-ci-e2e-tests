import React, { useState } from 'react';

import PropTypes from 'prop-types';

import classes from './refresh.module.css';

function Refresh({ className, onClick }) {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleRefresh = () => {
    setIsAnimated(true);
    onClick();
  };

  return (
    <div className={className}>
      <button
        className={`${classes.refresh__btn} ${isAnimated ? classes.refresh__animation : ''}`}
        onAnimationEnd={() => setIsAnimated(false)}
        type="button"
        onClick={handleRefresh}
      />
    </div>
  );
}

Refresh.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

Refresh.defaultProps = {
  className: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {}
};

export default Refresh;
