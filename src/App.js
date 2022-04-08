import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [value, setValues] = useState({
    fisrtName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...value, fisrtName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValues({...value, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...value, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(value.fisrtName && value.lastName && value.email){
      setValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={value.fisrtName}
          onChange={handleFirstNameInputChange}
        />
        {submitted && !value.fisrtName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={value.lastName}
          onChange={handleLastNameInputChange}
        />
        {submitted && !value.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          id="email"
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
          value={value.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !value.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}