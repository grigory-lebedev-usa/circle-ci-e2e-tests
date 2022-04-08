import React, {useState} from 'react';
import classes from './MyInput.module.css';

const MyInputPassword = (props) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(showPassword ? false : true);
    }

    return (
        <div>
            <div className={classes.divInput}>
            <div>
            <input id={props.id} className={classes.myInput} type={showPassword ? "text" : "password"} placeholder=" " pattern={props.pattern}/>
            <label htmlFor={props.id} className={classes.labelInput}>{props.label}</label>
            </div>
            <div className={classes.divButton}>
                <button className={showPassword ? classes.passwordButtonActive : classes.passwordButton} onClick={handleShowPassword}></button>
            </div>
            </div>
        </div>
    );
};

export default MyInputPassword;