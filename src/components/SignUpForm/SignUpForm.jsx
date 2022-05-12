import React from 'react';

import { useForm } from 'react-hook-form';

import FormInput from '../../shared/components/form-elements/FormInput/FormInput';
import FormSelect from '../../shared/components/form-elements/FormSelect/FormSelect';
import FormButton from '../../shared/components/form-elements/FormButton/FormButton';
import { inputTypes } from '../../shared/components/form-elements/FormInput/form-input.constants';

import { USER_ROLES } from '../../constants/user-roles.constants';

// import { useRegistration } from './hooks/useRegistration';

import classes from './sign-up-form.module.css';
import { initialFormState } from './sign-up-form.constants';

function SignUpForm() {
  // const [isHasSectionDriver, setIsHasSectionDriver] = useState(false);
  // const { registerDriver, registerClient } = useRegistration();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: initialFormState, mode: 'onTouched' });

  // const handleSelectChange = ({ id: roleId, value }) => {
  //   if (roleId === DRIVER_ROLE_ID) {
  //     setIsHasSectionDriver(true);
  //   } else setIsHasSectionDriver(false);
  //   setFormState({ ...formState, role: value });
  // };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={classes.form__wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.form__content}>
        <h1 className={classes.form__title}>Sign Up</h1>
        <div className={classes.form__container}>
          <div>
            <FormInput
              id="email"
              type={inputTypes.email}
              label="Email"
              placeholder="Email"
              {...register('email', { required: true })}
              className={classes.input}
            />
            {errors?.email && <span>error</span>}
            <FormInput
              id="password"
              type={inputTypes.password}
              label="Password"
              placeholder="Password"
              {...register('password', { required: true })}
              className={classes.input}
            />
            {errors?.password && <span>error</span>}
            <FormInput
              id="confirm-password"
              type={inputTypes.password}
              label="Confirm password"
              placeholder="Confirm password"
              {...register('confirmPassword', { required: true })}
              className={classes.input}
            />
            {errors?.confirmPassword && <span>error</span>}
            <FormInput
              id="first-name"
              type={inputTypes.text}
              label="First name"
              placeholder="First name"
              {...register('firstName', { required: true })}
              className={classes.input}
            />
            {errors?.firstName && <span>error</span>}
            <FormInput
              id="last-name"
              type={inputTypes.text}
              label="Last name"
              placeholder="Last name"
              {...register('lastName', { required: true })}
              className={classes.input}
            />
            {errors?.lastName && <span>error</span>}
            <FormSelect
              id="role"
              label="Role"
              items={USER_ROLES}
              {...register('role', { required: true })}
            />
          </div>
          {/* {isHasSectionDriver && (
            <div className={classes.car__block}>
              <p className={classes.car__title}>Car</p>
              <FormInput
                id="make"
                type={inputTypes.text}
                label="Make"
                placeholder="Make"
                name="make"
                value={make}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                errorMessage={errors.make.errorMessage}
                className={classes.input}
              />
              <FormInput
                id="model"
                type={inputTypes.text}
                label="Model"
                placeholder="Model"
                name="model"
                value={model}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                errorMessage={errors.model.errorMessage}
                className={classes.input}
              />
              <FormInput
                id="year"
                type={inputTypes.number}
                label="Year"
                placeholder="Year"
                name="year"
                value={year}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                errorMessage={errors.year.errorMessage}
                className={classes.input}
              />
              <FormInput
                id="color"
                type={inputTypes.text}
                label="Color"
                placeholder="Color"
                name="color"
                value={color}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                errorMessage={errors.color.errorMessage}
                className={classes.input}
              />
            </div>
          )} */}
          <FormButton className={classes.button}>Register</FormButton>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
