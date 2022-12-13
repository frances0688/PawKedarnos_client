import React from 'react'
import { 
    MDBAccordionItem, 
    MDBCardText, 
    MDBCol, 
    MDBIcon,
    MDBRadio, 
    MDBRow, 
    MDBTextArea
} from 'mdb-react-ui-kit'

function AccordionItem2(props) {
  return (
    <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="cat fa-sm me-4 opacity-70" />Additional Information</>}>
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Microchipped</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBRadio 
                    name='microchipped' 
                    id='inlineRadio-microchippedYes' 
                    value={true} 
                    label='Yes' 
                    checked={props.microchipped == true}
                    onChange={(e) => {props.setMicrochipped(e.target.value); console.log(e.target.value, props.microchipped)}}
                    inline
                />
                <MDBRadio 
                    name='microchipped' 
                    id='inlineRadio-microchippedNo' 
                    value={false} 
                    label='No' 
                    checked={props.microchipped == false}
                    onChange={(e) => props.setMicrochipped(e.target.value)}
                    inline 
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Spayed or Neutered</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBRadio 
                    name='spayedOrNeutered' 
                    id='inlineRadio-spayedOrNeuteredYes' 
                    value='true' 
                    label='Yes' 
                    checked={props.spayedOrNeutered == true}
                    onChange={(e) => props.setSpayedOrNeutered(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='spayedOrNeutered' 
                    id='inlineRadio-spayedOrNeuteredNo' 
                    value='false' 
                    label='No' 
                    checked={props.spayedOrNeutered == false}
                    onChange={(e) => props.setSpayedOrNeutered(e.target.value)}
                    inline 
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>House Trained</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBRadio 
                    name='houseTrained' 
                    id='inlineRadio-houseTrainedYes' 
                    value='yes' 
                    label='Yes' 
                    checked={props.houseTrained == 'yes'}
                    onChange={(e) => props.setHouseTrained(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='houseTrained' 
                    id='inlineRadio-houseTrainedNo' 
                    value='no' 
                    label='No' 
                    checked={props.houseTrained == 'no'}
                    onChange={(e) => props.setHouseTrained(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='houseTrained' 
                    id='inlineRadio-houseTrainedUnsure' 
                    value='unsure' 
                    label='Unsure' 
                    checked={props.houseTrained == 'unsure'}
                    onChange={(e) => props.setHouseTrained(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='houseTrained' 
                    id='inlineRadio-houseTrainedDepends' 
                    value='depends' 
                    label='Depends' 
                    checked={props.houseTrained == 'depends'}
                    onChange={(e) => props.setHouseTrained(e.target.value)}
                    inline 
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Friendly with Dogs</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBRadio 
                    name='friendlyWithDogs' 
                    id='inlineRadio-friendlyWithDogsYes' 
                    value='true' 
                    label='Yes' 
                    checked={props.friendlyWithDogs == true}
                    onChange={(e) => props.setFriendlyWithDogs(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='friendlyWithDogs' 
                    id='inlineRadio-friendlyWithDogsNo' 
                    value='false' 
                    label='No' 
                    checked={props.friendlyWithDogs == false}
                    onChange={(e) => props.setFriendlyWithDogs(e.target.value)}
                    inline 
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Friendly with Cats</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBRadio 
                    name='friendlyWithCats' 
                    id='inlineRadio-friendlyWithCatsYes' 
                    value='true' 
                    label='Yes' 
                    checked={props.friendlyWithCats == true}
                    onChange={(e) => props.setFriendlyWithCats(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='friendlyWithCats' 
                    id='inlineRadio-friendlyWithCatsNo' 
                    value='false' 
                    label='No' 
                    checked={props.friendlyWithCats == false}
                    onChange={(e) => props.setFriendlyWithCats(e.target.value)}
                    inline 
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Tell us about your pet</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBTextArea 
                    // label='About'
                    rows={4}  
                    name="about"
                    value={props.about}
                    onChange={(e) => props.setAbout(e.target.value)} 
                />
            </MDBCol>
        </MDBRow>
    </MDBAccordionItem>
  )
}

export default AccordionItem2