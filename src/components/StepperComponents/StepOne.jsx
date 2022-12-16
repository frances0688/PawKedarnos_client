import { MDBCardText, MDBCol, MDBContainer, MDBRadio, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import ActionButtons from './ActionButtons'

function StepOne(props) {

  return (
    <MDBContainer className="pt-3 justify-content-center">
        <h5>What can we help you with?</h5>
        <MDBRow>
            <MDBCol>
                <MDBRow className='py-5'>
                    <label>
                        <MDBRadio  
                            id='btn-boarding'
                            name='service' 
                            wrapperTag='span' 
                            label='Boarding'
                            value="boarding"
                            checked={props.service === 'boarding'}
                            onChange={() => props.setService('boarding')}
                        />
                        <img src="/img/icons-pet-house2.png" style={{width:'25vw', height:'25vw'}} />
                    </label>
                </MDBRow>
                <MDBRow >
                    <label>
                        <MDBRadio 
                            id='btn-dayCare' 
                            className="dayCareIcon"
                            name='service'
                            wrapperTag='span' 
                            label='Day Care'
                            checked={props.service === 'dayCare'}
                            onChange={() => props.setService('dayCare')}
                        />
                        <img src="/img/icons-toys.png" style={{width:'25vw', height:'25vw'}} />
                    </label>
                </MDBRow>
            </MDBCol>
            <MDBCol>
                <MDBRow className='py-5'>
                    <label>
                        <MDBRadio  
                            id='btn-houseVisit'
                            name='service' 
                            wrapperTag='span' 
                            label='House Visits'
                            checked={props.service === 'houseVisit'}
                            onChange={() => props.setService("houseVisit")}
                        />
                        <img src="/img/icons-doorbell.png" style={{width:'25vw', height:'25vw'}} />
                    </label>
                </MDBRow>
                <MDBRow >
                    <label>
                        <MDBRadio 
                            id='btn-grooming' 
                            name='service' 
                            wrapperTag='span' 
                            label='Grooming'
                            checked={props.service === 'grooming'}
                            onChange={() => props.setService("grooming")}
                        />
                        <img src="/img/icons-grooming.png" style={{width:'25vw', height:'25vw'}} />
                    </label>
                </MDBRow>
            </MDBCol>
            <ActionButtons {...props} />
        </MDBRow>
    </MDBContainer>
  )
}

export default StepOne