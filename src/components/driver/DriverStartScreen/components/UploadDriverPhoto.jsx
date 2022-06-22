import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { PRIVATE_ROUTES } from '../../../../constants/app.constants';

import Button from '../../../../shared/components/Button/Button';
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../../../../shared/components/Button/button.constants';

import { USER_GET, USER_UPLOAD_PHOTO } from '../../../../actions/user/user.actions';

import { userSelector } from '../../../../selectors/user.selectors';

import { inputType, src } from './upload-driver-photo.constants';

import classes from './upload-driver-photo.module.css';

function UploadDriverPhoto() {
  const {
    userData: { car, id }
  } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const image = selectedFile ? imagePreview : src.photo;
  const fileInput = useRef();

  useEffect(() => {
    if (car?.photo) {
      navigate(PRIVATE_ROUTES.HOME);
    }
  }, [car?.photo, navigate]);

  useEffect(() => {
    if (!selectedFile) {
      return setSelectedFile(null);
    }
    const imageUrl = URL.createObjectURL(selectedFile);
    setImagePreview(imageUrl);
    setIsValid(true);
    return () => URL.revokeObjectURL(imageUrl);
  }, [selectedFile]);

  const handleFileSelected = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    fileInput.current.click();
  };

  const handleFileSave = async () => {
    await dispatch(USER_UPLOAD_PHOTO({ file: selectedFile, id }));
    await dispatch(USER_GET());
    navigate(PRIVATE_ROUTES.HOME);
  };

  return (
    <div className={classes.container}>
      <div className={classes.photo__wrapper}>
        <h2 className={classes.photo__title}>Car photo</h2>
        <p className={classes.photo__text}>
          Please select photo of your car.
          <br />
          IMPORTANT: You can upload photo only once!
        </p>
        <div className={classes.photo__content}>
          <div
            className={classes.photo}
            style={{
              backgroundImage: `url(${image})`
            }}
          />
          <div className={classes.block__buttons}>
            <input
              className={classes.input_file}
              type={inputType.file}
              onChange={handleFileSelected}
              accept=".png, .jpeg, .jpg"
              ref={fileInput}
            />
            <Button
              size={BUTTON_SIZES.LARGE}
              variant={BUTTON_VARIANTS.CONTAINED}
              color={BUTTON_COLORS.SECONDARY}
              onClick={handleFileUpload}
            >
              Upload photo
            </Button>
            <Button
              size={BUTTON_SIZES.BIG}
              color={BUTTON_COLORS.SUCCESS}
              variant={BUTTON_VARIANTS.CONTAINED}
              onClick={handleFileSave}
              className={classes.button}
              disabled={!isValid}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadDriverPhoto;
