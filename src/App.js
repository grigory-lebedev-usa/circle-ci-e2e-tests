import React from 'react';
import axios from 'axios';
import './App.css';
import MyInput from './components/UI/input/MyInput';
import MyDropDown from './components/UI/dropdown/MyDropDown';
import MyCheckbox from './components/UI/checkbox/MyCheckbox';
import MyLink from './components/UI/link/MyLink';
import MyButton from './components/UI/button/MyButton';

function App() {

  axios.get('https://swapi.dev/api/people')
    .then((res) => console.log(res.data.results))
    .catch((error) => console.error(error));

  return (
    <div className="App">
      <div>
        <h1>Hello React!</h1>
        <MyInput id="email" type="email" label="Email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" />
        <MyInput id="pass" type="password" label="Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" />
        <MyInput id="confpass" type="password" label="Confirm password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" />
        <MyInput id="fname" type="text" label="First name" />
        <MyInput id="lname" type="text" label="Last name" />
        <MyDropDown title="Role" items={[{id: 1, value: 'Client'}, {id: 2, value: 'Driver'}]}/>
        <MyCheckbox  label="Keep me logged in"/>
        <MyLink label="Forgot password?"/>
        <MyButton label="Button"/>
      </div>
    </div>
  );
}

export default App;
