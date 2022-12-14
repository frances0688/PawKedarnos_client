import { MDBCardText, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import ActionButtons from './ActionButtons'

function StepFour(props) {

  return (
    <MDBContainer className="justify-content-center">
          <MDBCardText>Price Calculator coming soon!</MDBCardText>
          <MDBRow>
             
              <ActionButtons {...props} />
          </MDBRow>
      </MDBContainer>
  )
}

export default StepFour