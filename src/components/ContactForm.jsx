import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import {
    MDBInput,
    MDBBtn,
    MDBContainer,
    MDBCol,
    MDBRow
  } from 'mdb-react-ui-kit';

function ContactForm () {

  const form = useRef();
  const navigate = useNavigate();
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY


  const sendEmail = (e) => {

    e.preventDefault();
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {console.log(error.text);
      }, navigate("/email-sent")
      )};

  return (
    <MDBContainer fluid className="my-lg-5 my-sm-0">
        <MDBCol className="text-center">
            <MDBRow className='justify-content-center align-items-center' style={{backgroundColor: "rgba(186,187,177,0.5)"}}>
                <MDBCol sm='7'>
                <div className="px-3 py-4 p-md-5 mx-md-4">
                    <h3 class="mb-4" style={{textDecoration: 'underline'}}>Contact Us</h3>
                    <p class="small mb-0" style={{fontSize: '1em'}}>
                        
                        If you have any special requests, questions or concerns regarding our services, please send us a message by filling out the form below.
                        <br></br>
                        We will respond within 24 hours. 
                        <br></br>
                        <br></br>

                        <strong>For emergencies, please call us at <br></br>
                            000-123-4567</strong>
                        
                    </p>
                  </div>
                </MDBCol>
                <MDBCol sm='3'>
                    <div className="my-3 text-center">
                        <img src="./img/PawKedarnosLogo.png" style={{width: '15em'}} alt="logo" />
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <form className='px-3 py-4 p-md-10' ref={form} onSubmit={sendEmail} style={{border: "none"}}>
                    <MDBInput required type="text" name="user_name" wrapperClass='mb-4' label='Full Name' style={{background: '#FBFBFB'}} />
                    <MDBInput required type='email' name="user_email" wrapperClass='mb-4' label='Email Address' style={{background: '#FBFBFB'}} />
                    <MDBInput required textarea rows={4} name="message" wrapperClass='mb-4' label='Message' style={{background: '#FBFBFB'}} />

                    <MDBBtn type='submit' value="Send" className='mb-4' style={{ backgroundColor: '#D3BC8D' }}>
                        Send Email
                    </MDBBtn>
                </form>
            </MDBRow>
        </MDBCol>
    </MDBContainer>
  );
};

export default ContactForm