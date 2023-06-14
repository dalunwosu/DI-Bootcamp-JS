import React, { useState } from "react";
import "./App.css";
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    nutsFree: false,
    lactoseFree: false,
    isVegan: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlSearchParams = new URLSearchParams();

    for (const property in formData) {
      urlSearchParams.append(property, formData[property]);
    }

    const url = `${window.location.pathname}?${urlSearchParams.toString()}`;

    window.location.href = url;
  };

  return (
    <main>
      <h1>Daily Challenge</h1>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          className="text"
          onChange={(e) => handleChange(e)}
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
        />
        <br />
        <input
          className="text"
          onChange={(e) => handleChange(e)}
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
        />
        <br />
        <input
          className="text"
          onChange={(e) => handleChange(e)}
          name="age"
          placeholder="Age"
          value={formData.age}
        />
        <br />
        <br />
        <label>
          <input
            className="radiobutton"
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={(e) => handleChange(e)}
          />
          Male
        </label>
        <label>
          <br />
          <input
            className="radiobutton"
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={(e) => handleChange(e)}
          />
          Female
        </label>
        <br />
        <label className="destination-header">Select your destination</label>
        <br />
        <select
          className="destination-input"
          onChange={(e) => handleChange(e)}
          name="destination"
          value={formData.country}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="France">France</option>
          <option value="Italy">Italy</option>
          <option value="Japan">Japan</option>
          <option value="Spain">Spain</option>
        </select>
        <br />
        <br />
        <label className="restrictions-title">Dietary restrictions:</label>
        <br />
        <div className="restrictions">
          <input
            type="checkbox"
            name="nutsFree"
            onChange={(e) => handleChange(e)}
            checked={formData.nutsFree}
          />
          <span>Nuts free</span>
          <br />
          <input
            type="checkbox"
            name="lactoseFree"
            onChange={(e) => handleChange(e)}
            checked={formData.lactoseFree}
          />
          <span>Lactose free</span>
          <br />
          <input
            type="checkbox"
            name="isVegan"
            onChange={(e) => handleChange(e)}
            checked={formData.isVegan}
          />
          <span>Vegan</span>
        </div>
        <button className="submit">Submit</button>
      </form>
      <hr />
      <div className="entered-info">
        <h2>Entered information:</h2>
        <p>
          Your name: {formData.firstName} {formData.lastName}
        </p>
        <p>Your age: {formData.age}</p>
        <p>Your gender: {formData.gender}</p>
        <p>Your destination: {formData.destination}</p>
        <p>Your dietary restrictions: </p>
        <div className="restrictions">
          <span>**Nuts free : {formData.nutsFree ? " Yes" : "No"}</span> <br />
          <span>
            **Lactose free : {formData.lactoseFree ? " Yes" : "No"}
          </span>{" "}
          <br />
          <span>**Vegan meal : {formData.isVegan ? " Yes" : "No"}</span>
        </div>
      </div>
    </main>
  );
}

export default App;
