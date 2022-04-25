import React, { useState } from 'react';

import './App.css';
import PageWrapper from './shared/components/PageWrapper/PageWrapper';
// import uniqid from 'uniqid';

// import FormInput from './shared/components/form-elements/FormInput/FormInput';
// import FormCheckbox from './shared/components/form-elements/FormCheckbox/FormCheckbox';
// import FormDropDown from './shared/components/form-elements/FormDropDown/FormDropDown';
import FormButton from './shared/components/form-elements/FormButton/FormButton';
// import Textarea from './shared/components/Textarea/Textarea';
// import ProgressSpinner from './shared/components/ProgressSpinner/ProgressSpinner';
// import Notifications from './shared/components/Notifications/Notifications';
// import Modal from './shared/components/Modal/Modal';
// import Link from './shared/components/Link/Link';
// import Hint from './shared/components/Hint/Hint';
// import DropDown from './shared/components/DropDown/DropDown';
// import Button from './shared/components/Button/Button';
// import { MAX_NOTIFICATION_NUMBER } from './shared/components/Notifications/notifications.constants';
// import { buttonColors, buttonSizes } from './shared/components/Button/button.constants';
// import { notificationTypes } from './shared/components/Notifications/components/Notification/notification.constants';
// import { inputTypes } from './shared/components/form-elements/FormInput/form-input.constants';

function App() {
  // const [visibilitySpinner, setVisibilitySpinner] = useState(false);
  // const [openedModal, setOpenedModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  // const [notifications, setNotifications] = useState([]);
  // const notificationsRef = useRef([]);

  // const openModal = () => {
  //   setOpenedModal(true);
  // };

  // const closeModal = () => {
  //   setOpenedModal(false);
  // };

  // const showNotification = (text, type) => {
  //   if (notifications.length === MAX_NOTIFICATION_NUMBER) {
  //     notificationsRef.current.shift();
  //   }
  //   notificationsRef.current.push({ text, type, id: uniqid() });
  //   setNotifications([...notificationsRef.current]);
  // };

  // const deleteNotification = useCallback((id) => {
  //   notificationsRef.current = notificationsRef.current.filter(
  //     (notification) => notification.id !== id
  //   );
  //   setNotifications(notificationsRef.current);
  // }, []);

  // const showSpinner = () => {
  //   setVisibilitySpinner(true);
  //   setTimeout(() => {
  //     setVisibilitySpinner(false);
  //   }, 3000);
  // };

  const handleLogout = () => {
    setIsLogin(false);
  };
  return (
    <div>
      {/* <Notifications notifications={notifications} onDelete={deleteNotification} />
      <ProgressSpinner isOpened={visibilitySpinner} />
       */}
      <PageWrapper isLogin={isLogin} logout={handleLogout}>
        <FormButton onClick={() => setIsLogin(true)}>Login</FormButton>
      </PageWrapper>
    </div>
  );
}

export default App;
