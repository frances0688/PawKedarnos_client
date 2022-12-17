import { 
  MDBBtn, 
  MDBCard, 
  MDBCardBody, 
  MDBCol,
  MDBContainer, 
  MDBRow, 
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBCardImage,
  MDBCardText
} from 'mdb-react-ui-kit'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context';

function ServicesPage() {

  const { user } = useContext(AuthContext);
  const [priceInfo, setSPriceInfo] = useState(false);
  const toggleShow = () => setSPriceInfo(!priceInfo);

  return (
    <MDBContainer className="gradient-custom-2 p-5" style={{ backgroundColor: '#9de2ff' }}>
        <MDBCol >
            <MDBCard >
            <MDBCardBody className="text-black">
                <MDBContainer className="mb-5">
                  <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol s="11" className="my-5">
                    <h2 className="fw-normal mb-5" style={{textDecoration: "underline"}}>How Can We Help?</h2>
                    <MDBContainer className="p-4 mb-3" style={{ backgroundColor: '#f8f9fa', fontSize: '1.2em' }}>
                      <MDBRow id="boarding">
                        <MDBCardImage
                          src="./img/KarenCat3.jpeg"
                          alt="cat"
                          className="w-100 rounded-3 mt-2 mb-3 img-thumbnail"
                          // style={{ width: '40vw' }}
                        />
                        <h3 style={{textDecoration: "underline"}}>Boarding</h3>
                        <i>Location: Pet Sitter’s home</i>

                        <MDBCardText>
                          We take pride in providing cage-free boarding. 
                          Our boarding service is provided at the pet sitter’s home, 
                          where your pet will be able to roam around as if they’re in 
                          their own home and get all the love and attention they deserve. 
                        </MDBCardText>
                        <a className='mb-2' style={{ textDecoration: "underline" }} onClick={toggleShow}>Boarding Prices</a>
                          <MDBModal show={priceInfo} setShow={setSPriceInfo} tabIndex='-1'>
                            <MDBModalDialog>
                              <MDBModalContent>
                                <MDBModalHeader>
                                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody>
                                  <MDBCardImage
                                    src="./img/BoardingPrices.png"
                                    alt="boarding prices"
                                    className="w-100 rounded-3"
                                    fluid 
                                  />
                                </MDBModalBody>

                                <MDBModalFooter>
                                  <MDBBtn className='mb-5' type='button' style={{ backgroundColor: '#9eb08c' }} onClick={toggleShow}>
                                    Close
                                  </MDBBtn>
                                </MDBModalFooter>
                              </MDBModalContent>
                            </MDBModalDialog>
                          </MDBModal>
                      </MDBRow>
                      </MDBContainer>
                      <MDBContainer className="p-4 mb-3" style={{ backgroundColor: '#f8f9fa', fontSize: '1.2em' }}>
                      <MDBRow id="dayCare" >
                        <MDBCardImage
                          src="./img/KarenDog4.jpeg"
                          alt="dog playing"
                          className="w-100 rounded-3 mt-2 mb-3 img-thumbnail"
                          // style={{ width: '40vw' }}
                        />
                        <h3 style={{textDecoration: "underline"}}>Day Care</h3>
                        <i>Location: Pet Sitter’s home</i>

                        <MDBCardText>Our day care service is a great opportunity for your pet 
                          to socialize, play and have some fun! We have a big backyard 
                          with all kinds of toys, kiddie pools, splash pads and friends 
                          to interact with. This service is provided from 8am-5pm. 
                          An extended time option is available.
                        </MDBCardText>
                        <a className='mb-2' style={{ textDecoration: "underline" }} onClick={toggleShow}>Day Care Prices</a>
                          <MDBModal show={priceInfo} setShow={setSPriceInfo} tabIndex='-1'>
                            <MDBModalDialog>
                              <MDBModalContent>
                                <MDBModalHeader>
                                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody>
                                  <MDBCardImage
                                    src="./img/BoardingPrices.png"
                                    alt="boarding prices"
                                    className="w-100 rounded-3"
                                    fluid 
                                  />
                                </MDBModalBody>
                                <MDBModalFooter>
                                  <MDBBtn className='mb-5' type='button' style={{ backgroundColor: '#9eb08c' }} onClick={toggleShow}>
                                    Close
                                  </MDBBtn>
                                </MDBModalFooter>
                              </MDBModalContent>
                            </MDBModalDialog>
                          </MDBModal>
                      </MDBRow>
                      </MDBContainer>
                      <MDBContainer className="p-4 mb-3" style={{ backgroundColor: '#f8f9fa', fontSize: '1.2em' }}>
                      <MDBRow id="houseVisit" >
                        <MDBCardImage
                          src="./img/KarenCat5.jpeg"
                          alt="cat"
                          className="w-100 rounded-3 mt-2 mb-3 img-thumbnail"
                          // style={{ width: '40vw' }}
                        />
                        <h3 style={{textDecoration: "underline"}}>House Visits</h3>
                        <i>Location: Address provided by pet owner</i>

                        <MDBCardText>Our house visit service is perfect for those pets that don’t 
                          feel comfortable when you change their environment. They can 
                          stay in the comfort of their own home and still receive the l
                          ove and attention they deserve. Your pet sitter will feed, play 
                          and walk your pet in every visit, along with any other care they might need. 
                        </MDBCardText>
                        <a className='mb-2' style={{ textDecoration: "underline" }} onClick={toggleShow}>House Visit Prices</a>
                          <MDBModal show={priceInfo} setShow={setSPriceInfo} tabIndex='-1'>
                            <MDBModalDialog>
                              <MDBModalContent>
                                <MDBModalHeader>
                                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody>
                                  <MDBCardImage
                                    src="./img/BoardingPrices.png"
                                    alt="boarding prices"
                                    className="w-100 rounded-3"
                                    fluid 
                                  />
                                </MDBModalBody>

                                <MDBModalFooter>
                                  <MDBBtn className='mb-5' type='button' style={{ backgroundColor: '#9eb08c' }} onClick={toggleShow}>
                                    Close
                                  </MDBBtn>
                                </MDBModalFooter>
                              </MDBModalContent>
                            </MDBModalDialog>
                          </MDBModal>
                      </MDBRow>
                      </MDBContainer>
                      <MDBContainer className="p-4 mb-3" style={{ backgroundColor: '#f8f9fa', fontSize: '1.2em' }}>
                      <MDBRow id="grooming" >
                        <MDBCardImage
                          src="./img/KarenDogBath1.jpeg"
                          alt="cat"
                          className="w-100 rounded-3 mt-2 mb-3 img-thumbnail"
                          // style={{ width: '40vw' }}
                        />
                        <h3 style={{textDecoration: "underline"}}>Grooming</h3>
                        <i>Location: Pet Sitter’s home</i>

                        <MDBCardText>We aim to provide a relaxing and soothing bath experience. 
                          All baths include shampooing, conditioning and blowdrying. 
                          Additional services may be provided such as nail trim, anal gland expression 
                          and ear cleaning. Your pet sitter will have the opportunity
                        </MDBCardText> 
                        <a className='mb-2' style={{ textDecoration: "underline" }} onClick={toggleShow}>Grooming Prices</a>
                          <MDBModal show={priceInfo} setShow={setSPriceInfo} tabIndex='-1'>
                            <MDBModalDialog>
                              <MDBModalContent>
                                <MDBModalHeader>
                                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody>
                                  <MDBCardImage
                                    src="./img/BoardingPrices.png"
                                    alt="boarding prices"
                                    className="w-100 rounded-3"
                                    fluid 
                                  />
                                </MDBModalBody>

                                <MDBModalFooter>
                                  <MDBBtn className='mb-5' type='button' style={{ backgroundColor: '#9eb08c' }} onClick={toggleShow}>
                                    Close
                                  </MDBBtn>
                                </MDBModalFooter>
                              </MDBModalContent>
                            </MDBModalDialog>
                          </MDBModal>
                      </MDBRow>
                    </MDBContainer>
                    </MDBCol>
                  </MDBRow>
                    {user && (
                      <Link to={`/users/${user._id}/requests/add`}>
                        <MDBBtn type='button' style={{ backgroundColor: '#9eb08c' }}>Request Service!</MDBBtn>
                      </Link>
                    )}
                    {!user && (
                      <>
                        <Link to="/login">
                          <MDBBtn className='mb-3' type='button' style={{ backgroundColor: '#9eb08c' }}>Sign in to Book a Service!</MDBBtn>
                        </Link>
                        <br />
                        <Link to="/">
                          <MDBBtn type='button' style={{ backgroundColor: '#9eb08c' }}>Return to HomePage</MDBBtn>
                        </Link>
                      </>
                    )}
                </MDBContainer>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBContainer>
  )
}

export default ServicesPage