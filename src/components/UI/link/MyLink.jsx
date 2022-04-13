import React from 'react';
import classes from './MyLink.module.css';

const MyLink = (props) => {
  return (
    <div>
      <a className={classes.link} href="https://translate.yandex.ru/dictionary/en-ru/forgot%20password" target="_blank" rel="noreferrer">{props.label}</a>
    </div>
  );
};

export default MyLink;