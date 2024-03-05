import React, { useState } from "react";
import data from "../db.json";
import Footer from "./Footer"


function Login() {
  const [userDetail, setUserDetails] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    };

    setUserDetails(newUser);

    // Simulate successful login alert
    alert("Login Successful");

    // Redirect to the product page
    window.location.href = "http://localhost:3000/product";
  }

  return (
    <>
      <h5 style={{ marginLeft: "10%", marginBottom: "30px", marginTop: "20px" }}>CUSTOMER LOGIN</h5>

      <div className="face-btn">
        <div className="google">
          <i class=' googl bx bxl-facebook'><a href="">Login With Facebook</a></i>
        </div>
        <div className="google">
          <i class='googl bx bxl-google'><a href="">Login With Google</a></i>
        </div>
      </div>

      <p style={{ marginLeft: "26%" }}>--OR--</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className=" form-label">Name:</label>
          <input name="name" type="text" className=" name-user form-control" id="name" placeholder="Enter Your Name Here" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className=" form-label">Email address</label>
          <input name="email" type="email" className=" name-user form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Your Email Here" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input name="password" type="password" className="name-user  form-control" id="password" placeholder="Password" />
        </div>
        <button type="submit" className="submit btn btn-primary">Submit</button>
      </form>

      {/* Display user details */}
      {userDetail.name && (
        <div>
          <h2>User Details:</h2>
          <p>Name: {userDetail.name}</p>
          <p>Email: {userDetail.email}</p>
          <p>Password: {userDetail.password}</p>
        </div>
      )}
    </>
  )
}

export default Login;
