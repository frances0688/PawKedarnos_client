import React from "react";

import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBBtn,
  MDBCardTitle,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";


function HomePage() {

    return (
      <>
        <MDBContainer className="sectionPage" />
        <div className="mt-3 mb-5">
          <MDBCarousel fade >
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='./img/SunglassDogsSlide.jpg'
                alt='Dogs with Sunglasses'
              />
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='./img/CatGroomedSlide.jpg'
                alt='Cat Being Brushed'
              />
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src='./img/DogBubblesSlide.jpg'
                alt='Dog With Blanket and Bubbles Floating Around'
              />
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='./img/CatPlaySlide.jpg'
                alt='...'
              />
              <MDBContainer fluid className="justify-content-center">
                <MDBRow className='overlay justify-content-center'>
                  <MDBCol md='12'>
                    <h1>A new health & wellness approach to pet care.</h1>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCarousel>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <MDBCardImage
                  src="./img/PawKedarnosLogo.png"
                  alt="Boarding Icon"
                  style={{ width: '350px' }}
                  className="my-5"
                  fluid 
                />
                <hr />
                <h2 className="text-center my-5 font-weight-bold">
                  Who We Are
                </h2>
                <h4 className="text-center text-muted">
                  We are a cage-free boarding experience with one simple mission: making your pets feel like they’re at home. 
                  At PawKedarnos, we offer a variety of services catered to the needs of every individual pet. 
                  Owned by a veterinary technician, we are able to offer medical/wellness services for any animal that may require them. 
                </h4>
                <Link to="/about" >
                    <MDBBtn className='my-5' type='button' style={{ backgroundColor: '#9eb08c' }} >
                      <h6 style={{ marginBottom: "0" }}>Meet the Team</h6>
                    </MDBBtn>
                </Link>
                <hr className="mb-5" />
                <MDBRow id="categories" className="justify-content-center">
                  <h2 className="mb-5 text-center font-weight-bold">
                    Our Services
                  </h2>
                  <MDBCol md="3">
                    <MDBContainer cascade className="my-3">
                      <MDBCardBody cascade className="text-center">
                          <Link to="/services#boarding">
                            <MDBCardImage
                              src="./img/icons-pet-house2.png"
                              alt="Boarding Icon"
                              className="rounded-circle mb-3"
                              fluid 
                              />
                            <MDBCardTitle>
                              Boarding
                            </MDBCardTitle>
                          </Link>
                      </MDBCardBody>
                    </MDBContainer>
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBContainer cascade className="my-3">
                      <MDBCardBody cascade className="text-center">
                          <Link to="/services#dayCare">
                            <MDBCardImage
                              src="./img/icons-toys.png"
                              alt="Day Care Icon"
                              className="rounded-circle mb-3"
                              fluid 
                              />
                            <MDBCardTitle>
                              Day Care
                            </MDBCardTitle>
                          </Link>
                      </MDBCardBody>
                    </MDBContainer>
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBContainer cascade className="my-3">
                      <MDBCardBody cascade className="text-center">
                          <Link to="/services#houseVisit">
                            <MDBCardImage
                              src="./img/icons-doorbell.png"
                              alt="House Visit Icon"
                              className="rounded-circle mb-3"
                              fluid 
                              />
                            <MDBCardTitle>
                              House Visits
                            </MDBCardTitle>
                          </Link>
                      </MDBCardBody>
                    </MDBContainer>
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBContainer cascade className="my-3">
                      <MDBCardBody cascade className="text-center">
                          <Link to="/services#grooming">
                            <MDBCardImage
                              src="./img/icons-grooming.png"
                              alt="Grooming Icon"
                              className="rounded-circle mb-3"
                              fluid 
                              />
                            <MDBCardTitle>
                              Grooming
                            </MDBCardTitle>
                          </Link>
                      </MDBCardBody>
                    </MDBContainer>
                  </MDBCol>
                </MDBRow>
                  <MDBBtn className='my-5' type='button' style={{ backgroundColor: '#9eb08c' }} >
                    <h6 style={{ marginBottom: "0" }} >Details and Prices</h6>
                  </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
//#endregion

//#region > Exports
export default HomePage;
