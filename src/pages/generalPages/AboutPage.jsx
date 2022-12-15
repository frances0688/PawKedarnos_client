import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn} from 'mdb-react-ui-kit';
import React from 'react'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <MDBContainer className="gradient-custom-2 pt-5" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="10">
            <MDBCard>
              <div className="rounded-top text-white" style={{ backgroundColor: '#d8c2a8', height: '35vh' }}>
                <MDBCol className="m-2" xl="7" lg="9" >
                  <MDBCardImage src="./img/KarenDog1.jpeg"
                    alt="Karen Morales" 
                    className="w-100 rounded-3 mt-4 mb-2 img-thumbnail" 
                    style={{zIndex: "1"}}
                    fluid 
                    />
                </MDBCol>
              </div>              
              <MDBCardBody className="text-black p-4">
                <MDBContainer className="mb-5">
                  <MDBContainer className="p-4" style={{ backgroundColor: '#f8f9fa', fontSize: '1.2em' }}>
                    <h3 className="fw-normal mb-1" style={{textDecoration: "underline"}}>About Us</h3>
                    <MDBCardText className="font-italic my-4">
                      PawKedarnos is a one-of-a-kind pet care business in which our main 
                      focus is to give personalized and quality care to each and every one of our boarding pets. 
                      Owned and operated by a veterinary technician, we are able to offer health 
                      and wellness services such as medication administration and therapies.
                    </MDBCardText>
                    <MDBCardText className="font-italic my-4">
                      <strong>Karen Morales</strong>, owner of PawKedarnos, is a Veterinary Technician with over 4 years 
                      of experience in the veterinary field. Her passion for animals and their health led her 
                      to quickly realize a big necessity within the boarding industry: a cage-free boarding for 
                      pets with medical conditions or requiring a different type of care that can only be found 
                      in veterinary offices. She is committed to making every pet feel at home.
                    </MDBCardText>
                  </MDBContainer>
                </MDBContainer>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Veterinary Technician at work!</MDBCardText>
                </div>
                <MDBRow className="g-4">
                  <MDBCol className="mb-4">
                    <MDBCardImage src="./img/KarenGoat.jpeg"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-4">
                    <MDBCardImage src="./img/KarenCat1.jpeg"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-4">
                  <MDBCol className="mb-4">
                    <MDBCardImage src="./img/KarenDog3.jpeg"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-4">
                    <MDBCardImage src="./img/KarenCat2.jpeg"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
                <Link to="/"><MDBBtn className='mb-5' type='button' style={{ backgroundColor: '#9eb08c' }}>Return to HomePage</MDBBtn></Link>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </MDBContainer>

  )
}

export default AboutPage