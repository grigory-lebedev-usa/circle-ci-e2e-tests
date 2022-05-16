import React, { useState, useRef } from 'react';

import { useUser } from '../../../api/hooks/useUser';

import Button from '../../../shared/components/Button/Button';
import { buttonColors, buttonSizes } from '../../../shared/components/Button/button.constants';

import { inputType } from './start-screen.constants';

import classes from './start-screen.module.css';

function StartScreen() {
  const [isValid, setIsValid] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInput = useRef();
  const {
    uploadPhoto,
    user: { id }
  } = useUser();

  const handleFileSelected = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    fileInput.current.click();
    const formData = new FormData();
    formData.append('image', selectedFile);
    await uploadPhoto({ id, formData });
    setIsValid(true);
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
          <div className={classes.photo} />
          <div className={classes.block__buttons}>
            <input
              className={classes.input_file}
              type={inputType.file}
              onChange={handleFileSelected}
              name="img"
              accept="image/png, image/jpeg"
              ref={fileInput}
            />
            <Button size={buttonSizes.big} color={buttonColors.general} onClick={handleFileUpload}>
              Upload photo
            </Button>
            <Button
              size={buttonSizes.big}
              color={buttonColors.accept}
              onClick={handleFileUpload}
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

export default StartScreen;
