import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"


function SignUpForm({setLoginRegisterActive}) {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
  
    const navigate = useNavigate();
  
    const handleName = (e) => setName(e.target.value);
    const handleLastname = (e) => setLastname(e.target.value);
    const handleDob = (e) => setDob(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
  
    const handleSignupSubmit = (e) => {
      e.preventDefault();
      // Create an object representing the request body
      const requestBody = { name, lastname, dob, email, password };
  
      // Send a request to the server using axios
       
      const authToken = localStorage.getItem("authToken");
      axios.post(
        `${API_URL}/auth/signup`, 
        requestBody, 
        { headers: { Authorization: `Bearer ${authToken}` },
      })
        .then((response) => {
          // If the POST request is successful redirect to the login page
          setLoginRegisterActive('login')
        })
        .catch((error) => {
          // If the request resolves with an error, set the error message in the state
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        });
    };

    return ( 
        
        <form onSubmit={handleSignupSubmit}>

            <p>Create your account</p> 
           
            <MDBInput className='mb-4' id='signUpFormName' label='Name' name="name" value={name} onChange={handleName} />
            <MDBInput className='mb-4' id='signUpFormLastname' label='Last Name' name="lastname" value={lastname} onChange={handleLastname} />
            <MDBInput className='mb-4' type='date' id='signUpFormDob' label='Date of Birth' name="dob" value={dob} onChange={handleDob} />
            <MDBInput className='mb-4' type='email' id='signUpFormEmail' label='Email address' name="email" value={email} onChange={handleEmail} />
            <MDBInput className='mb-4' type='password' id='signUpFormPassword' label='Password' name="password" value={password} onChange={handlePassword} />
            {/* <MDBInput className='mb-4' type='password' id='form8Example5' label='Repeat password' /> */}

            <MDBBtn type='submit' className='gradient-custom-2 mb-3' block>
              Sign Up
            </MDBBtn>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

          </form>
    );
}

export default SignUpForm;