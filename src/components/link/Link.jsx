import React from 'react';
import classes from './Link.module.css';

function MyLink({ label, href }) {
  return (
    <div>
      <a className={classes.link} href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    </div>
  );
}

export default MyLink;
