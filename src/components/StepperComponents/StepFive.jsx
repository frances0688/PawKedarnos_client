import { MDBCardText, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import ActionButtons from './ActionButtons'

function StepFive(props) {
  return (
    <MDBContainer className="justify-content-center">
    <MDBCardText>Summany of service requested:</MDBCardText>
    <MDBRow>
       
        <ActionButtons {...props} />
    </MDBRow>
</MDBContainer>
  )
}

export default StepFive