import React from 'react';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

        // Send a request to the server using axios
    
        axios.post(`${API_URL}/auth/login`, requestBody)
        .then((response) => {
            // If the POST request is successful store the authentication token,
            // after the token is stored authenticate the user
            // and at last navigate to the home page
            storeToken(response.data.authToken);
            authenticateUser();
            navigate("/profile")
          

        })
        .catch((error) => {
            // If the request resolves with an error, set the error message in the state
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
        });
    };

  return (
    
      <form onSubmit={handleLoginSubmit}>

          <p>Please login to your account</p>

          <MDBInput className='mb-4' type='email' id='form7Example1' name="email" value={email} onChange={handleEmail} label='Email address' />
          <MDBInput className='mb-4' type='password' id='form7Example2' name="password" value={password} onChange={handlePassword} label='Password' />

          <MDBBtn type='submit' className='gradient-custom-2 mb-3' block>
            Login
          </MDBBtn>

          {errorMessage && <p className="error-message">{errorMessage}</p>} 
      
      </form>

  );    
}

export default LoginForm;
