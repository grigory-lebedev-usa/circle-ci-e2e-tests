import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import useUser from '../../../../shared/hooks/useUser/useUser';
import { PRIVATE_ROUTES } from '../../../../constants/app.constants';

import Button from '../../../../shared/components/Button/Button';
import { buttonColors, buttonSizes } from '../../../../shared/components/Button/button.constants';

import { inputType, src } from './upload-driver-photo.constants';

import classes from './upload-driver-photo.module.css';

function UploadDriverPhoto() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const image = selectedFile ? imagePreview : src.photo;
  const fileInput = useRef();
  const { uploadPhoto, user } = useUser();

  useEffect(() => {
    if (user.car?.photo) {
      return navigate(PRIVATE_ROUTES.HOME);
    }
    return () => false;
  }, [navigate, user]);

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

  const handleFileSave = () => {
    uploadPhoto({ file: selectedFile });
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
            <Button size={buttonSizes.big} color={buttonColors.general} onClick={handleFileUpload}>
              Upload photo
            </Button>
            <Button
              size={buttonSizes.big}
              color={buttonColors.accept}
              onClick={handleFileSave}
              className={classes.button}
              disabled={!isValid}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadDriverPhoto;
