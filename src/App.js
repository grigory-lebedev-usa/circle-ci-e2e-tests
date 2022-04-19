import React from "react";
import axios from "axios";
import "./App.css";
import FormInput from "./components/form/input/FormInput";
import FormDropDown from "./components/form/dropdown/FormDropDown";
import FormCheckbox from "./components/form/checkbox/FormCheckbox";
import Link from "./components/link/Link";
import FormButton from "./components/form/button/FormButton";
import Hint from "./components/hint/Hint";
import DropDown from "./components/dropdown/DropDown";

function App() {
  axios
    .get("https://swapi.dev/api/people")
    .then((res) => console.log(res.data.results))
    .catch((error) => console.error(error));

  return (
    <div className="App">
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
        <FormButton label="Button" />
        <Hint content="User is blocked until 30.06.2022">User</Hint>
        <DropDown items={[{id: 1, value: "English"},{id: 2, value: "Russian"}, {id: 3, value: "German"}]} />
      </div>
    </div>
  );
}

export default App;
