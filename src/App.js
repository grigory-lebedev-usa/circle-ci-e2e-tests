import React, { useCallback, useRef, useState } from 'react';

// import axios from 'axios';
import uniqid from 'uniqid';

import './App.css';
import FormInput from './components/form/input/FormInput';
import FormDropDown from './components/form/dropdown/FormDropDown';
import FormCheckbox from './components/form/checkbox/FormCheckbox';
import Link from './components/link/Link';
import ProgressSpinner from './components/spinner/ProgressSpinner';
import DropDown from './components/dropdown/DropDown';
import Hint from './components/hint/Hint';
import FormButton from './components/form/button/FormButton';
import { MAX_NOTIFICATION_NUMBER } from './components/notification/constans';
import { notificationTypes } from './shared/enums';
import Notifications from './components/notification/Notifications';

function App() {

  // axios
  //   .get('https://swapi.dev/api/people')
  //   .then((res) => console.log(res.data.results))
  //   .catch((error) => console.error(error));

  const [visibilitySpinner, setVisibilitySpinner] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notificationsRef = useRef([]);

  const showNotification = (text, type) => {
    if (notifications.length === MAX_NOTIFICATION_NUMBER) {
      notificationsRef.current.shift()
    }
    notificationsRef.current.push({text:text, type:type, id:uniqid()});
    setNotifications([...notificationsRef.current]);
  }

  const deleteNotification = useCallback((id) => {
    notificationsRef.current = notificationsRef.current.filter(notification => notification.id !== id);
    setNotifications(notificationsRef.current);
  }, [])

  const showSpinner = () => {
    setVisibilitySpinner(true);
    setTimeout(() => {
      setVisibilitySpinner(false)
    }, 3000)
  }

  return (
    <div className='App'>
      <Notifications notifications={notifications} onDelete={deleteNotification}/>
      <ProgressSpinner active={visibilitySpinner}/>
      <div>
        <h1>Hello React!</h1>
        <FormInput
          id='email'
          type='email'
          label='Email'
          pattern='[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$'
        />
        <FormInput
          id='pass'
          type='password'
          label='Password'
          pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$'
        />
        <FormInput
          id='confpass'
          type='password'
          label='Confirm password'
          pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$'
        />
        <FormInput id='fname' type='text' label='First name' />
        <FormInput id='lname' type='text' label='Last name' />
        <FormDropDown
          title='Role'
          items={[
            { id: 1, value: 'Client' },
            { id: 2, value: 'Driver' },
          ]}
        />
        <FormCheckbox label="Keep me logged in" />
        <Link label="Forgot password?" />
        <FormButton>Button</FormButton>
        <FormButton onClick={() => showSpinner()} >Show Spinner</FormButton>
        <FormButton style={{backgroundColor: '#00CB82'}} onClick={() => showNotification('Everything went successfully', notificationTypes.success)}>Success</FormButton>
        <FormButton style={{backgroundColor: '#E1CB00'}} onClick={() => showNotification('Warning', notificationTypes.warning)}>Warning</FormButton>
        <FormButton style={{backgroundColor: '#CF6402'}} onClick={() => showNotification('Error', notificationTypes.error)}>Error</FormButton>
        <DropDown items={[{id: 1, value: 'English'},{id: 2, value: 'Russian'}, {id: 3, value: 'German'}]} />
        <Hint content='User is blocked 30.12.2022'>User</Hint>
      </div>
    </div>
  );
}

export default App;
