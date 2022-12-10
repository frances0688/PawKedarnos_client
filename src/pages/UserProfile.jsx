import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
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
  } from 'mdb-react-ui-kit';


const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

function UserProfile(props) {
    const { user } = useContext(AuthContext);
    const [oneUser, setOneUser] = useState(user);

    const getUser = () => {
      // Get the token from the localStorage
      const storedToken = localStorage.getItem('authToken');
  
      // Send the token through the request "Authorization" Headers
      axios.get(`${API_URL}/api/users/${oneUser._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        const foundUser = response.data;
        setOneUser(foundUser);
      })
      .catch((error) => console.log(error));
    };
     
    useEffect(()=> {
      getUser();
    }, []);


  return (
    <>
    {oneUser && (            
        
        <section className="UserProfile" style={{ backgroundColor: '#eee' }}>
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
                        <Link className='link-dark'><MDBBtn outline className="me-3" color='secondary'>Edit Profile</MDBBtn></Link>
                        <Link to="/pets/add" className='link-dark'><MDBBtn outline className="me-3" color='secondary'>Add Pet</MDBBtn></Link>
                    </div>
                </MDBCardBody>
                </MDBCard>

                {/* <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                    <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fas icon="globe fa-lg text-warning" />
                        <MDBCardText>https://mdbootstrap.com</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                        <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                        <MDBCardText>@mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                        <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                        <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    </MDBListGroup>
                </MDBCardBody>
                </MDBCard> */}
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
                    {oneUser.phone && (
                    <>
                        <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Phone</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">{oneUser.phone}</MDBCardText>
                        </MDBCol>
                        </MDBRow>
                        <hr />
                    </>
                    )}
                    {oneUser.addressStreet && (
                    <>
                        <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Address</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">{oneUser.addressStreet}, {oneUser.addressCity}, {oneUser.addressZip} {oneUser.addressState}</MDBCardText>
                        </MDBCol>
                        </MDBRow>
                    </>
                    )}
                    {oneUser.emergencyContactName && (
                    <>
                        <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Emergency Contact</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">Name: {oneUser.emergencyContactName}</MDBCardText>
                            <MDBCardText className="text-muted">Phone number: {oneUser.emergencyContactPhone}</MDBCardText>
                        </MDBCol>
                        </MDBRow>
                    </>
                    )}
                </MDBCardBody>
                </MDBCard>

                <MDBRow>
                    {oneUser.pets && oneUser.pets.map((pet) => {
                        if (pet.active){
                            return (
                                <MDBCol key="pet._id" md="4">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardImage
                                            src={pet.imgPath}
                                            alt="user picture"
                                            className="rounded-circle"
                                            style={{ width: '150px' }}
                                            fluid />
                                            <h5 className="my-3">{pet.name}</h5>
                                            <div className="d-flex justify-content-center mb-2">
                                                <Link className='link-dark'><MDBBtn outline className="me-3" color='secondary'>Profile</MDBBtn></Link>
                                                <Link className='link-dark'><MDBBtn outline className="me-3" color='secondary'>Deactivate</MDBBtn></Link>
                                            </div>
                                        </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        );
                        }
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