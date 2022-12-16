import { MDBCardText, MDBCol, MDBContainer, MDBRadio, MDBRow } from 'mdb-react-ui-kit';
import React from 'react'
import ActionButtons from './ActionButtons';

function StepTwo(props) { 

  return (
    <MDBContainer className="pt-3 justify-content-center">
        <h5>Which pet will be receiving services?</h5>
        <MDBRow className='text-center justify-content-center align-items-center'>
            {props.allPets.map((onePet) => {
              if (onePet.active){
                return (
                  <MDBCol key={onePet._id} sm="10" className='pt-5'>
                      <label>
                        <MDBRadio 
                          id={`btn-${onePet._id}`}
                          name='pet' 
                          wrapperTag='span' 
                          label={onePet.name}
                          value={onePet._id}
                          onChange={() => props.setPet(onePet._id)}
                        />
                        <img src={onePet.imgPath} alt={onePet.name} className="rounded-circle" style={{width: "200px"}}/>
                      </label>
                  </MDBCol>
                )
              }
            })}
        </MDBRow>       
        <br />
        <ActionButtons {...props} />
      </MDBContainer>
  )
}

export default StepTwo
