import { MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React from 'react'

function ActionButtons(props) {
   
    const handleBack = () => {
        props.previousStep();
    };
    
    const handleNext = () => {
        props.nextStep();
    };
    
    

  return (
    <div>
        <MDBRow className='py-5'>
          {props.currentStep > 1 && (
            <MDBCol>
              <MDBBtn style={{ backgroundColor: '#9eb08c' }} onClick={handleBack}>Back</MDBBtn>
            </MDBCol>
          )}
          <MDBCol>
            {props.currentStep < props.totalSteps && (
              <MDBBtn style={{ backgroundColor: '#9eb08c' }} onClick={handleNext}>Next</MDBBtn>
            )}
            {props.currentStep === props.totalSteps && (
              <MDBBtn style={{ backgroundColor: '#9eb08c' }} type='submit'>Send Request</MDBBtn>
            )}
          </MDBCol>
        </MDBRow>
      </div>
  )
}

export default ActionButtons

