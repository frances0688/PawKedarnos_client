import { MDBBtn, MDBCardText, MDBCol, MDBRadio, MDBRow } from 'mdb-react-ui-kit';
import React from 'react'
import ActionButtons from './ActionButtons';

function StepTwo(props) { 

  return (
    <div>
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Which pet will be receiving services?</MDBCardText>
            </MDBCol>
            {props.allPets.map((onePet) => {
              if (onePet.active){
                return (
                  <MDBCol key={onePet._id} sm="9">
                      <MDBRadio 
                        btn 
                        btnColor='secondary' 
                        id={`btn-${onePet._id}`}
                        name='pet' 
                        wrapperTag='span' 
                        label={onePet.name}
                        value={onePet._id}
                        onChange={() => props.setPet(onePet._id)}
                        />
                  </MDBCol>
                )
              }
            })}
        </MDBRow>       
        <br />
        <ActionButtons {...props} />
      </div>
  )
}

export default StepTwo
