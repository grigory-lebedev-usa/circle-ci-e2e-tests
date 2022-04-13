import React from 'react';
import classes from './MyButton.module.css';

const MyButton = (props) => {
    return (
        <div>
            <button className={classes.myButton}>{props.label}</button>
        </div>
    );
};

export default MyButton;