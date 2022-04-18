import React from "react";
import axios from "axios";
import "./App.css";
import FormInput from "./components/form/input/FormInput";
import FormDropDown from "./components/form/dropdown/FormDropDown";
import FormCheckbox from "./components/form/checkbox/FormCheckbox";
import Link from "./components/link/Link";
import FormButton from "./components/form/button/FormButton";
import Notification from "./components/notification/Notification";
import { notificationTypes } from "./shared/enums";
import { useState } from "react";

function App() {

  axios
    .get("https://swapi.dev/api/people")
    .then((res) => console.log(res.data.results))
    .catch((error) => console.error(error));


  const [list, setList] = useState([]);
  let notificationProps = null;

  const handleClick = (text, type) => {
    notificationProps = {
      id: list.length+1,
      text: text,
      type: type,
    }
    setList([...list, notificationProps]);
  }

  return (
    <div className="App">
      <Notification list={list} setList={setList} />
      <div>
        <h1>Hello React!</h1>
        <FormInput
          id="email"
          type="email"
          label="Email"
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
        />
        <FormInput
          id="pass"
          type="password"
          label="Password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
        />
        <FormInput
          id="confpass"
          type="password"
          label="Confirm password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
        />
        <FormInput id="fname" type="text" label="First name" />
        <FormInput id="lname" type="text" label="Last name" />
        <FormDropDown
          title="Role"
          items={[
            { id: 1, value: "Client" },
            { id: 2, value: "Driver" },
          ]}
        />
        <FormCheckbox label="Keep me logged in" />
        <Link label="Forgot password?" />
        <FormButton>Button</FormButton>
        <FormButton style={{backgroundColor: '#00CB82'}} onClick={() => handleClick('good job', notificationTypes.success)}>Success</FormButton>
        <FormButton style={{backgroundColor: '#E1CB00'}} onClick={() => handleClick('Warning', notificationTypes.warning)}>Warning</FormButton>
        <FormButton style={{backgroundColor: '#CF6402'}} onClick={() => handleClick('Error', notificationTypes.error)}>Error</FormButton>
      </div>
    </div>
  );
}

export default App;
