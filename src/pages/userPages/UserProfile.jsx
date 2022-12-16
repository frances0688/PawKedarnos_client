import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';
import { Link } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBListGroup,
    MDBListGroupItem,
    MDBSwitch,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';


const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

function UserProfile() {
    const { user } = useContext(AuthContext);
    const [oneUser, setOneUser] = useState(user);
    const [errMessage, setErrMessage] = useState(oneUser.phone === "" || oneUser.addressStreet === "" || oneUser.emergencyContactPhone === "")
    const [setPetErrorMessage] = useState(undefined);
    
    const [requestInfo, setRequestInfo] = useState(false);
    const toggleShow = () => setRequestInfo(!requestInfo);

    const serviceName = {
        boarding: "Boarding",
        dayCare: "Day Care",
        houseVisit: "House Visit",
        grooming: "Grooming"
    }

    const serviceIcon = {
        boarding: "./img/icons-pet-house2.png",
        dayCare: "./img/icons-toys.png",
        houseVisit: "./img/icons-doorbell.png",
        grooming: "./img/icons-grooming.png"
    }
oneUser && console.log(oneUser)
    const getUser = () => {
      // Get the token from the localStorage
      const storedToken = localStorage.getItem('authToken');
  
      // Send the token through the request "Authorization" Headers
      axios.get(`${API_URL}/api/users/${oneUser._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        const foundUser = response.data;
        setOneUser(foundUser);
        setErrMessage(foundUser.phone === "" || foundUser.phone === undefined || foundUser.addressStreet === "" || foundUser.addressStreet === undefined || foundUser.emergencyContactPhone === "" || foundUser.emergencyContactPhone === undefined)
      })
      .catch((error) => console.log(error));
    };

    const deactivatePet = (pet) => {
        pet.active = false
        axios.put(`${API_URL}/api/pets/${pet._id}`, pet)
        .then((response) => {
            getUser();
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setPetErrorMessage(errorDescription);
          });
    }
     
    useEffect(()=> {
      getUser();
    }, [setOneUser]);


  return (
    <>
    {oneUser && (            
        
        <section className="UserProfile">
        <MDBContainer className="py-5">
            <MDBRow>
            <MDBCol lg="5">
                
                <MDBCard className="mb-4 gradient-custom-2">
                    <MDBCol className="m-4"  style={{ backgroundColor: '#fff'}}>
                        <MDBCardBody className="text-center">
                            <MDBCardImage
                            src={oneUser.imgPath}
                            alt="user picture"
                            className="rounded-circle"
                            style={{ width: '200px' }}
                            fluid />
                            <h5 className="my-3">{oneUser.name} {oneUser.lastname}</h5>
                            <div className="d-flex justify-content-center mb-2">
                                <Link to="/profile/edit" className='link-dark'><MDBBtn className='mx-3' type='button' style={{ backgroundColor: '#9eb08c' }} >Edit Profile</MDBBtn></Link>
                                <Link to="/pets/add" className='link-dark'><MDBBtn className='mx-3' type='button' style={{ backgroundColor: '#9eb08c' }}>Add Pet</MDBBtn></Link>
                                <Link to={`/users/${oneUser._id}/requests/add`}className='link-dark'><MDBBtn className='mx-3' type='button' style={{ backgroundColor: '#9eb08c' }}>Request Booking</MDBBtn></Link>
                            </div>
                        </MDBCardBody>
                    </MDBCol>
                </MDBCard>

                <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="mb-2 p-0">
                    <h4 className='m-3'>Bookings</h4>
                    <MDBCardText>Pending Confirmation</MDBCardText>
                    <MDBListGroup flush className="rounded-3">
                    {oneUser.request && oneUser.request.map((oneRequest) => {
                        if (!oneRequest.isDeclined){
                            return(
                                <a onClick={toggleShow}>
                                    <MDBListGroupItem className="d-flex text-start align-items-center p-3">
                                        <MDBCol >
                                            <MDBCardImage 
                                                alt="avatar" 
                                                className="rounded-circle me-1" 
                                                style={{height: '4vw', width: '4vw'}}
                                                src={serviceIcon[oneRequest.service]} 
                                                fluid 
                                            />
                                            <span><strong>{serviceName[oneRequest.service]}</strong></span>
                                        </MDBCol>
                                        
                                        <MDBRow>
                                            <MDBCardText><span>{(new Date(oneRequest.startDateTime)).toLocaleDateString()}</span> {oneRequest.endDateTime &&(<span> - {(new Date(oneRequest.endDateTime)).toLocaleDateString()}</span>)}</MDBCardText>
                                            <MDBModal show={requestInfo} setShow={setRequestInfo} tabIndex='-1'>
                                                <MDBModalDialog>
                                                <MDBModalContent>
                                                    <MDBModalHeader>
                                                    <MDBModalTitle>{serviceName[oneRequest.service]}</MDBModalTitle>
                                                    </MDBModalHeader>
                                                    <MDBModalBody>Summary. status, and price: COMING SOON!</MDBModalBody>

                                                    <MDBModalFooter>
                                                    <MDBBtn className='mb-5' type='button' style={{ backgroundColor: '#9eb08c' }} onClick={toggleShow}>
                                                        Close
                                                    </MDBBtn>
                                                    </MDBModalFooter>
                                                </MDBModalContent>
                                                </MDBModalDialog>
                                            </MDBModal>
                                        </MDBRow>
                                    </MDBListGroupItem>
                                </a>

                            );
                        }
                        return null
                    })} 
        
                    </MDBListGroup>
                </MDBCardBody>
                </MDBCard>

            </MDBCol>
            <MDBCol lg="7">
                <MDBCard className="mb-4">
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Full Name</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">{oneUser.name} {oneUser.lastname}</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Email</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">{oneUser.email}</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Date of Birth</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">{(new Date(oneUser.dob)).toLocaleDateString()}</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Phone</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">{oneUser.phone}</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Address</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">{oneUser.addressStreet}, {oneUser.addressCity}, {oneUser.addressZip} {oneUser.addressState}</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Emergency Contact</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">{oneUser.emergencyContactName}</MDBCardText>
                                <MDBCardText className="text-muted">{oneUser.emergencyContactPhone}</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        {errMessage && (
                            <>
                            <div className="alert alert-warning" role="alert">
                                Please complete your profile.
                            </div>
                            <Link to='/profile/edit' className='link-dark'>
                                <MDBBtn outline className="me-3" color='secondary'>
                                    Complete Profile
                                </MDBBtn>
                            </Link>
                            </>
                        )}

                    </MDBCardBody>
                </MDBCard>

                <MDBRow>
                    {oneUser.pets && oneUser.pets.map((pet) => {
                        if (pet.active){
                            return (
                                <MDBCol key="pet._id" md="4" className='mb-3'>
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBRow className='text-end mb-4'>
                                            <MDBCol>
                                                <span>Deactivate</span>
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBSwitch 
                                                name="isActive"
                                                checked={pet.active === true}
                                                onChange={()=>deactivatePet(pet)}
                                                />
                                            </MDBCol>
                                        </MDBRow>
                                        <Link to={`/pets/${pet._id}`} className='link-dark'>
                                            <MDBCardImage
                                                src={pet.imgPath}
                                                alt="user picture"
                                                className="rounded-circle"
                                                style={{ width: '200px' }}
                                                fluid />
                                            <h5 className="mt-3">{pet.name}</h5>
                                        </Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        );
                    }
                    return null
                    })} 


                </MDBRow>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        </section>
    )}
    </>
  );
}      

export default UserProfile