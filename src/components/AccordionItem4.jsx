import React from 'react'
import { 
    MDBAccordionItem, 
    MDBCardText, 
    MDBCol, 
    MDBIcon,
    MDBInput,
    MDBRow, 
    MDBTextArea
} from 'mdb-react-ui-kit'

function AccordionItem4(props) {

  return (
    <MDBAccordionItem collapseId={4} headerTitle={<><MDBIcon fas icon="medkit fa-sm me-4 opacity-70" />Veterinary Information</>}>
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Full Name</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBInput 
                    label='Vet Name' 
                    type='text' 
                    name="vetName"
                    value={props.vetName}
                    onChange={(e) => props.setVetName(e.target.value)}
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Phone Number</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBInput 
                    label='Vet Phone Number' 
                    type='text' 
                    name="vetNumber"
                    value={props.vetNumber}
                    onChange={(e) => props.setVetNumber(e.target.value)}
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Address</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBInput 
                    label='Vet Address' 
                    type='text' 
                    name="vetStreet"
                    value={props.vetStreet}
                    onChange={(e) => props.setVetStreet(e.target.value)}
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>City</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBInput 
                    label='City' 
                    type='text' 
                    name="vetCity"
                    value={props.vetCity}
                    onChange={(e) =>props.setVetCity(e.target.value)}
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>State</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBInput 
                    label='State' 
                    type='text' 
                    name="vetState"
                    value={props.vetState}
                    onChange={(e) => props.setVetState(e.target.value)}
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Zip Code</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBInput 
                    label='Zip Code' 
                    type='text' 
                    name="vetZip"
                    value={props.vetZip}
                    onChange={(e) => props.setVetZip(e.target.value)}
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Additional Veterinary Information</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBTextArea 
                    label='Aditional Information'
                    rows={4}  
                    name="additionalVetInfo"
                    value={props.additionalVetInfo}
                    onChange={(e) => props.setAdditionalVetInfo(e.target.value)} 
                />
            </MDBCol>
        </MDBRow>
    </MDBAccordionItem>
  )
}

export default AccordionItem4