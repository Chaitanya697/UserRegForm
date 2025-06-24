import React, { useState } from 'react';
import './userdetails.css';


function Userdetails() {
  const [data, setData] = useState({
    First_name: '',
    last_name: '',
    nickname: '',
    email: '',
    country: '',
    state: '',
    pincode: '',
    gender: '',
    password: '',
    mobile: '',
    date: '',
    agree: false,
  });
  const HandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(data);
  //   alert("Data Submitted Successfully");
  // }
  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!data.password) {
      alert("Please enter a password");
      return;
    }
    try {
      const response = await fetch("https://localhost:7026/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Data submitted to server!");
        console.log("Success:", await response.json());
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="userdetails-container">
      <h3>User Details</h3>
      <input name="First_name" type="text" placeholder="First Name" onChange={HandleChange} />
      <input name="last_name" type="text" placeholder="last Name" onChange={HandleChange} />
      <input name="nickname" type="text" placeholder="Nick Name" onChange={HandleChange} />
      <input name="email" type="email" placeholder="Email" onChange={HandleChange} />
      {/* <input name ="country" type = "text" placeholder = "Country" onChange = {HandleChange}/> */}
      <select className="dropCountry" name="country" value={data.country} onChange={HandleChange}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="America">America</option>
        <option value="China">China</option>
      </select>

      <input name="state" type="text" placeholder="State" onChange={HandleChange} />
      <input name="pincode" placeholder="Pincode" maxLength="6" onChange={HandleChange} />
      {/* <input name ="gender" type = "text" placeholder = "Gender" onChange = {HandleChange}/> */}
      <div className="gender-selection">
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={HandleChange}
          checked={data.gender === 'Male'}
        /> Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={HandleChange}
          checked={data.gender === 'Female'}
        /> Female
        <input
          type="radio"
          name="gender"
          value="Other"
          onChange={HandleChange}
          checked={data.gender === 'Other'}
        /> Other
      </div>
      <input
        name="date"
        type="date"
        value={data.date || ''}
        onChange={HandleChange}
      />

      <input name="mobile" placeholder="Mobile Number" maxLength="10" onChange={HandleChange} />
      <input name="password" type="password" placeholder="Password" onChange={HandleChange} />
      <input
        type="checkbox"
        name="agree"
        checked={data.agree}
        onChange={HandleChange}
      /> I agree<br />

      <button className="btn" onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Userdetails;