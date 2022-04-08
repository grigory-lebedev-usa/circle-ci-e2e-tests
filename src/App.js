import React from 'react';
import axios from 'axios';
import './App.css';
import MyInput from './components/UI/input/MyInput';
import MyInputPassword from './components/UI/input/MyInputPassword';

function App() {
  
  axios.get('https://swapi.dev/api/people')
    .then((res) => console.log(res.data.results))
    .catch((error) => console.error(error))

  return (
    <div className="App">
      <div>
      <h1>Hello React!</h1>
      <MyInput id="email" type="email" label="Email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"/>
      <MyInputPassword id="pass" type="password" label="Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/>
      <MyInputPassword id="confpass" type="password" label="Confirm password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/>
      <MyInput id="fname" type="text" label="First name" />
      <MyInput id="lname" type="text" label="Last name" />
      </div>
    </div>
  );
}

export default App;
