import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBAccordion,
    MDBAccordionItem,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function PetProfile() {

  const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
  
  const [pet, setPet] = useState(null);
  const { petId } = useParams();
  
  const getPet = () => {

    axios.get(`${API_URL}/api/pets/${petId}`)
    .then((response) => {
      const onePet = response.data;
      setPet(onePet);
    })
    .catch((error) => console.log(error));
  };
    
   console.log(pet)
  useEffect(()=> {
    getPet();
  }, [petId]);

  return (
    
    <MDBContainer className="py-5">
    {pet && (
        <MDBRow>
            <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                  <MDBCardImage
                      id="upload_widget"
                      src={pet.imgPath}
                      alt="pet picture"
                      className="rounded-circle my-3"
                      style={{ width: '150px' }}
                      fluid 
                  />
                  <h3 className="mb-3">{pet.name}</h3>
                  <p class="text-muted mb-1">{pet.breed}</p>
                  <p class="text-muted mb-1">{pet.gender} {pet.typeOfPet}</p>
                  <p class="text-muted mb-3">{pet.ageYears} years and {pet.ageMonths} months old</p>
                  <div className="d-flex justify-content-center mb-2">
                        <Link to={`/pets/${petId}/edit`} className='link-dark'><MDBBtn outline className="me-3" color='secondary'>Edit Profile</MDBBtn></Link>
                        <Link to="/profile" className='link-dark'><MDBBtn outline className="me-3" color='secondary'>Back to Profile</MDBBtn></Link>
                  </div>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-start">
                    <MDBAccordion className="mb-4" initialActive={1}>
                      <MDBAccordionItem collapseId={1} headerTitle={<><MDBIcon fas icon={`${pet.typeOfPet} fa-sm me-4 opacity-70`} /> Additional Information</>}>
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Weight</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="7">
                                  <MDBCardText className="text-muted">{pet.weight}</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="2">
                                  kg
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Microchipped</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted" >{pet.microchipped ? "Yes":"No"}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Spayed or Neutered</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{pet.spayedOrNeutered ? "Yes":"No"}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>House Trained</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{pet.houseTrained ? "Yes":"No"}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Friendly with Dogs</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{pet.friendlyWithDogs ? "Yes":"No"}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Friendly with Cats</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted text-start">{pet.friendlyWithCats ? "Yes":"No"}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>More about {pet.name}:</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted text-start">{pet.about}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                      </MDBAccordionItem>
                      <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="paw fa-sm me-4 opacity-70" /> Care Information</>}>
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Potty Schedule</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="7">
                                  <MDBCardText className="text-muted">{pet.pottySchedule}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Energy Level</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted" >{pet.energy}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Feeding Schedule</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{pet.feedingSchedule}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Can be left alone?</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{pet.canBeAlone}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Medication</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{pet.medication}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Other Care Information:</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted text-start">{pet.otherCareInfo}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                      </MDBAccordionItem>
                      <MDBAccordionItem collapseId={3} headerTitle={<><MDBIcon fas icon="medkit fa-sm me-4 opacity-70" />Veterinary Information</>}>
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Veterinary Name</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="7">
                                  <MDBCardText className="text-muted">{pet.vetName}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Phone Number</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted" >{pet.vetNumber}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Address</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{pet.vetStreet}, {pet.vetCity}, {pet.vetZip} {pet.vetState}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                              <MDBCol sm="3">
                                  <MDBCardText>Additional Veterinary Information</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                  <MDBCardText className="text-muted">{pet.additionalVetInfo}</MDBCardText>
                              </MDBCol>
                          </MDBRow>
                          <hr />
                      </MDBAccordionItem>
                    </MDBAccordion>
                  </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )}
    </MDBContainer>
  )
}

export default PetProfile