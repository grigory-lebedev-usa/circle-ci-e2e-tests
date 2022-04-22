import React, { useCallback, useRef, useState } from 'react';

import './App.css';
import uniqid from 'uniqid';

import FormInput from './components/Form components/FormInput/FormInput';
import FormDropDown from './components/Form components/FormDropDown/FormDropDown';
import FormCheckbox from './components/Form components/FormCheckbox/FormCheckbox';
import Link from './components/Link/Link';
import ProgressSpinner from './components/ProgressSpinner/ProgressSpinner';
import DropDown from './components/DropDown/DropDown';
import Hint from './components/Hint/Hint';
import FormButton from './components/Form components/FormButton/FormButton';
import { buttonColors, buttonSizes, notificationTypes } from './shared/enums';
import Textarea from './components/Textarea/Textarea';
import { MAX_NOTIFICATION_NUMBER } from './components/Notifications/notifications.constants';
import Notifications from './components/Notifications/Notifications';
import Button from './components/Button/Button';

function App() {
  const [visibilitySpinner, setVisibilitySpinner] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notificationsRef = useRef([]);

  const showNotification = (text, type) => {
    if (notifications.length === MAX_NOTIFICATION_NUMBER) {
      notificationsRef.current.shift();
    }
    notificationsRef.current.push({ text, type, id: uniqid() });
    setNotifications([...notificationsRef.current]);
  };

  const deleteNotification = useCallback((id) => {
    notificationsRef.current = notificationsRef.current.filter(
      (notification) => notification.id !== id
    );
    setNotifications(notificationsRef.current);
  }, []);

  const showSpinner = () => {
    setVisibilitySpinner(true);
    setTimeout(() => {
      setVisibilitySpinner(false);
    }, 3000);
  };

  return (
    <div className="App">
      <Notifications notifications={notifications} onDelete={deleteNotification} />
      <ProgressSpinner active={visibilitySpinner} />
      <div className="App-content">
        <h1>Hello React!</h1>
        <FormInput
          id="email"
          type="email"
          label="Email"
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
          placeholder="Email"
        />
        <FormInput
          id="pass"
          type="password"
          label="Password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          placeholder="Password"
        />
        <FormInput
          id="confpass"
          type="password"
          label="Confirm password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          placeholder="Confirm password"
        />
        <FormInput id="fname" type="text" label="First name" placeholder="First name" />
        <FormInput id="lname" type="text" label="Last name" placeholder="Last name" />
        <FormDropDown
          title="Role"
          items={[
            { id: 1, value: 'Client' },
            { id: 2, value: 'Driver' }
          ]}
        />
        <FormCheckbox id="checkbox" label="Keep me logged in" />
        <Link
          label="Forgot password?"
          href="https://translate.yandex.ru/dictionary/en-ru/forgot%20password"
        />
        <FormButton>Button</FormButton>
        <FormButton onClick={() => showSpinner()}>Show Spinner</FormButton>
        <Hint content="User is blocked until 30.06.2022">User</Hint>
        <Textarea id="textarea" label="Driver report" placeholder="Driver report" />
        <FormButton
          onClick={() =>
            showNotification('Everything went successfully', notificationTypes.success)
          }>
          Success
        </FormButton>
        <FormButton onClick={() => showNotification('Warning', notificationTypes.warning)}>
          Warning
        </FormButton>
        <FormButton onClick={() => showNotification('Error', notificationTypes.error)}>
          Error
        </FormButton>
        <FormButton>Open modal</FormButton>
        <Button size={buttonSizes.big} color={buttonColors.general}>
          History
        </Button>
        <Button size={buttonSizes.medium} color={buttonColors.disabled}>
          Ok
        </Button>
        <Button size={buttonSizes.small} color={buttonColors.accept}>
          Accept
        </Button>
        <Button size={buttonSizes.small} color={buttonColors.cancel}>
          Cancel
        </Button>
        <Button size={buttonSizes.extraSmall} color={buttonColors.primary}>
          Car
        </Button>
        <DropDown
          items={[
            { id: 1, value: 'English' },
            { id: 2, value: 'Russian' },
            { id: 3, value: 'German' }
          ]}
        />
      </div>
    </div>
  );
}

export default App;
