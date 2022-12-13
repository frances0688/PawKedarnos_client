import React, {useContext} from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import ImgUploader from '../components/ImgUploader';
import { Link, useNavigate } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBFile,
    MDBInput
  } from 'mdb-react-ui-kit';
  

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

function EditUserPage() {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [imgPath, setImgPath] = useState("");
  const [phone, setPhone] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressState, setAddressState] = useState("");
  const [addressZip, setAddressZip] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [oneUser, setOneUser] = useState(user);
  
  useEffect(() => {
    axios
      .get(`${API_URL}/api/users/${oneUser._id}`)
      .then((response) => {
        const foundUser = response.data;
        setName(foundUser.name);
        setLastname(foundUser.lastname);
        setDob(foundUser.dob);
        setImgPath(foundUser.imgPath);
        setPhone(foundUser.phone);
        setAddressStreet(foundUser.addressStreet);
        setAddressCity(foundUser.addressCity);
        setAddressState(foundUser.addressState);
        setAddressZip(foundUser.addressZip);
        setEmergencyContactName(foundUser.emergencyContactName);
        setEmergencyContactPhone(foundUser.emergencyContactPhone)
      })
      .catch((error) => console.log(error));
  }, [oneUser._id]);

  const handleFileUpload = (e) => {
      console.log("The file to be uploaded is: ", e.target.files[0]);
 
    const uploadData = new FormData();
 
    uploadData.append("imageUrl", e.target.files[0]);

    ImgUploader(uploadData)
      .then(response => {
        console.log("response is: ", response);
        // response carries "imgUrl" which we can use to update the state
        setImgPath(response.imgUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = {
      name,
      lastname,
      dob,
      imgPath,
      phone,
      addressStreet,
      addressCity,
      addressState,
      addressZip,
      emergencyContactName,
      emergencyContactPhone
    };

    // Make a PUT request to update the user
    axios
      .put(`${API_URL}/api/users/${oneUser._id}`, requestBody)
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate("/profile");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };
  
  return (
    <section className="UserProfile">
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
                
                <MDBCard className="mb-4">
                    <MDBCardBody >
                      {imgPath &&(
                        <>
                        <MDBCardImage
                        id="upload_widget"
                        src={imgPath}
                        alt="user picture"
                        className="rounded-circle"
                        style={{ width: '150px' }}
                        fluid />
                        </>
                      )}
                        <h5 className="my-3">{name} {lastname}</h5>
                        <MDBRow>
                            <MDBFile label='Add profile picture' id='customFile' name="user-picture" onChange={(e) => handleFileUpload(e)}/>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <form onSubmit={handleFormSubmit} style={{border: "none"}}>
                    <MDBCardBody className='text-start'>
                        <MDBRow className="my-4">
                            <MDBCol sm="3">
                                <MDBCardText>Full Name</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="4">
                                <MDBInput className='mb-3' label='Name' name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </MDBCol>
                            <MDBCol sm="4">
                                <MDBInput label='Lastname' name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow className="my-4">
                            <MDBCol sm="3">
                                <MDBCardText>Date of Birth</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBInput type="Date" label='Date of Birth' name="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow className="my-4">
                            <MDBCol sm="3">
                                <MDBCardText>Phone</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBInput required type="text" label='Phone' name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} /> 
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Address</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBInput required className='mb-3' label='Street' name="addressStreet" value={addressStreet} onChange={(e) => setAddressStreet(e.target.value)} />
                                <MDBInput required className='mb-3' label='City' name="addressCity" value={addressCity} onChange={(e) => setAddressCity(e.target.value)} />
                                <MDBInput required className='mb-3' label='State' name="addressState" value={addressState} onChange={(e) => setAddressState(e.target.value)} />
                                <MDBInput required label='Zip Code' name="addressZip" value={addressZip} onChange={(e) => setAddressZip(e.target.value)} />
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Emergency Contact</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBInput required className='mb-3' label='Full Name' name="emergencyContactName" value={emergencyContactName} onChange={(e) => setEmergencyContactName(e.target.value)} />
                                <MDBInput required label='Phone' name="emergencyContactPhone" value={emergencyContactPhone} onChange={(e) => setEmergencyContactPhone(e.target.value)} />
                             </MDBCol>
                        </MDBRow>
                        <hr />
                          <div className='text-center'>
                            <MDBBtn outline type="submit" className="me-3" color='secondary'>
                                Save
                            </MDBBtn>
                            <Link to="/profile">
                              <MDBBtn outline className="me-3" color='secondary'>
                                  Cancel
                              </MDBBtn>
                            </Link>
                          </div>
                    </MDBCardBody>
                  </form>
                </MDBCard>
            </MDBCol>
          </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default EditUserPage