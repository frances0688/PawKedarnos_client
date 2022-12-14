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
    MDBIcon,
    MDBSwitch,
  } from 'mdb-react-ui-kit';


const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

function UserProfile() {
    const { user } = useContext(AuthContext);
    const [oneUser, setOneUser] = useState(user);
    const [errMessage, setErrMessage] = useState(oneUser.phone === "" || oneUser.addressStreet === "" || oneUser.emergencyContactPhone === "")
    const [petErrorMessage, setPetErrorMessage] = useState(undefined);

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
        console.log(pet)
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
            <MDBCol lg="4">
                
                <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                    <MDBCardImage
                    src={oneUser.imgPath}
                    alt="user picture"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                    <h5 className="my-3">{oneUser.name} {oneUser.lastname}</h5>
                    <div className="d-flex justify-content-center mb-2">
                        <Link to="/profile/edit" className='link-dark'><MDBBtn outline className="me-3" color='secondary'>Edit Profile</MDBBtn></Link>
                        <Link to="/pets/add" className='link-dark'><MDBBtn outline className="me-3" color='secondary'>Add Pet</MDBBtn></Link>
                    </div>
                </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                    <h5 className='my-3'>Bookings</h5>
                    <MDBCardText>Pending Confirmation</MDBCardText>
                    <MDBListGroup flush className="rounded-3">
                    {oneUser.request && oneUser.request.map((oneRequest) => {
                        // console.log(oneRequest)
                        if (!oneRequest.isDeclined){
                            return(
                                <Link to="" >
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                    <MDBCardImage 
                                    alt="avatar" 
                                    className="rounded-circle me-1" 
                                    style={{height: '4vw', width: '4vw'}}
                                    src={serviceIcon[oneRequest.service]} 
                                    fluid 
                                    />
                                        <MDBCardText>{serviceName[oneRequest.service]}</MDBCardText>
                                    
                                    <hr className="my-3" />
                                    <MDBRow >
                                        <a href="#!">
                                            <MDBCardImage  src={oneRequest.pet.imgPath} alt="avatar" className="rounded-circle me-1" fluid style={{height: '3vw', width: '3vw'}}/>
                                        </a>
                                    </MDBRow>
                                </MDBListGroupItem>
                                </Link>

                            );
                        }
                    })} 
        
                    </MDBListGroup>
                    <Link to={`/users/${oneUser._id}/requests/add`}className='link-dark'><MDBBtn outline className="me-3" color='secondary'>Request Booking</MDBBtn></Link>
                </MDBCardBody>
                </MDBCard>

            </MDBCol>
            <MDBCol lg="8">
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
                                                // label='Hide' 
                                                />
                                            </MDBCol>
                                        </MDBRow>
                                        <Link to={`/pets/${pet._id}`} className='link-dark'>
                                            <MDBCardImage
                                                src={pet.imgPath}
                                                alt="user picture"
                                                className="rounded-circle"
                                                style={{ width: '150px' }}
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