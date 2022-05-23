import React from 'react';

import { Button, TextField } from '@mui/material';

import classes from './sign-up-form.module.css';

function SignUpForm() {
  return (
    <form className={classes.form__wrapper}>
      <div className={classes.form__content}>
        <h1 className={classes.form__title}>Sign Up</h1>
        <div className={classes.form__container}>
          <TextField id="email" placeholder="Email" label="Email" variant="outlined" color="form" />
          <Button variant="form">Register</Button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
