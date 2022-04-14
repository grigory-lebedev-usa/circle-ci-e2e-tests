import React from "react";
import axios from "axios";
import "./App.css";
import FormInput from "./components/form/input/FormInput";
import FormDropDown from "./components/form/dropdown/FormDropDown";
import FormCheckbox from "./components/form/checkbox/FormCheckbox";
import Link from "./components/form/link/Link";
import FormButton from "./components/form/button/FormButton";

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
      </div>
    </div>
  );
}

export default App;
