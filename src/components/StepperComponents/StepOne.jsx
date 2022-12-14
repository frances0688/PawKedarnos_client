import { MDBCardText, MDBCol, MDBContainer, MDBRadio, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import ActionButtons from './ActionButtons'

function StepOne(props) {

  return (
    <MDBContainer className="justify-content-center">
        <MDBCardText>What can we help you with?</MDBCardText>
        <MDBRow>
            <MDBCol>
                <MDBRow className='py-5'>
                    <MDBRadio 
                        btn 
                        btnColor='secondary' 
                        id='btn-boarding'
                        name='service' 
                        wrapperTag='span' 
                        label='Boarding'
                        value="boarding"
                        checked={props.service === 'boarding'}
                        onChange={() => props.setService('boarding')}  
                        />
                </MDBRow>
                <MDBRow >
                    <MDBRadio 
                        btn 
                        btnColor='secondary'
                        id='btn-dayCare' 
                        name='service'
                        wrapperTag='span' 
                        label='Day Care'
                        checked={props.service === 'dayCare'}
                        onChange={() => props.setService('dayCare')}  
                        />
                </MDBRow>
            </MDBCol>
            <MDBCol>
                <MDBRow className='py-5'>
                    <MDBRadio 
                        btn 
                        btnColor='secondary' 
                        id='btn-houseVisit'
                        name='service' 
                        wrapperTag='span' 
                        label='House Visits'
                        checked={props.service === 'houseVisit'}
                        onChange={() => props.setService("houseVisit")}
                        />
                </MDBRow>
                <MDBRow >
                    <MDBRadio 
                        btn 
                        btnColor='secondary'
                        id='btn-grooming' 
                        name='service' 
                        wrapperTag='span' 
                        label='Grooming'
                        checked={props.service === 'grooming'}
                        onChange={() => props.setService("grooming")}
                        />
                </MDBRow>
            </MDBCol>
            <ActionButtons {...props} />
        </MDBRow>
    </MDBContainer>
  )
}

export default StepOne