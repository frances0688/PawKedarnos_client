import React from "react";

import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBBtn,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
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
              <MDBContainer className="overlay">
                <h1>A new health & wellness approach to pet care.</h1>
              </MDBContainer>
            </MDBCarousel>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <h2 className="text-center my-5 font-weight-bold">
                  Who We Are
                </h2>
                <h5 className="text-center text-muted">
                  We are a cage-free boarding experience with one simple mission: making your pets feel like they’re at home. 
                  At PawKedarnos, we offer a variety of services catered to the needs of every individual pet. 
                  Owned by a veterinary technician, we are able to offer medical/wellness services for any animal that may require them. 
                </h5>
                <Link to="/about">
                    <MDBBtn outline color="secondary" className='my-5' type='button'>
                      Learn More
                    </MDBBtn>
                </Link>
                <hr className="my-5" />
                <MDBRow id="categories" className="justify-content-center">
                  <h2 className="my-5 text-center font-weight-bold">
                    Our Services
                  </h2>
                  <MDBCol md="2">
                    <MDBCard cascade className="my-3">
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <strong>Boarding</strong>
                        </MDBCardTitle>
                        <MDBCardImage
                            src=""
                            alt="Boarding Icon"
                            className="rounded-circle"
                            style={{ width: '100px' }}
                            fluid 
                        />
                        <Link to="">
                          <MDBBtn outline color="secondary" className='me-2' type='button'>
                            Learn More
                          </MDBBtn>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBCard cascade className="my-3">
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <strong>Day Care</strong>
                        </MDBCardTitle>
                        <MDBCardImage
                            src=""
                            alt="Day Care Icon"
                            className="rounded-circle"
                            style={{ width: '100px' }}
                            fluid 
                        />
                        <Link to="">
                          <MDBBtn outline color="secondary" className='me-2' type='button'>
                            Learn More
                          </MDBBtn>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBCard cascade className="my-3">
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <strong>House Visit</strong>
                        </MDBCardTitle>
                        <MDBCardImage
                            src=""
                            alt="House Visit Icon"
                            className="rounded-circle"
                            style={{ width: '100px' }}
                            fluid 
                        />
                        <Link to="">
                          <MDBBtn outline color="secondary" className='me-2' type='button'>
                            Learn More
                          </MDBBtn>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBCard cascade className="my-3">
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <strong>Grooming</strong>
                        </MDBCardTitle>
                        <MDBCardImage
                            src=""
                            alt="Grooming Icon"
                            className="rounded-circle"
                            style={{ width: '100px' }}
                            fluid 
                        />
                        <Link to="">
                          <MDBBtn outline color="secondary" className='me-2' type='button'>
                            Learn More
                          </MDBBtn>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
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
