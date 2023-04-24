import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    setErrors([]);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
    setErrors([]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (firstName.trim().length === 0) {
      setErrors(["First name is required!"]);
      return;
    }

    if (lastName.trim().length === 0) {
      setErrors(["Last name is required!"]);
      return;
    }

    const formData = {
      firstName: firstName,
      lastName: lastName,
    };

    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);

    setFirstName("");
    setLastName("");
    setErrors([]);
  }

  const allSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0 ? (
        errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      ) : null}
      <h3>Submissions</h3>
      {allSubmissions}
    </div>
  );
}

export default Form;
