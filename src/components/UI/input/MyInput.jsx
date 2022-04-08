import React from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => {
    return (
        <div className={classes.divInput}>
            <div>
            <input id={props.id} className={classes.myInput} type={props.type} placeholder=" " pattern={props.pattern}/>
            <label htmlFor={props.id} className={classes.labelInput}>{props.label}</label>
            </div>
        </div>
    );
};

export default MyInput;