import { 
    MDBAccordionItem, 
    MDBCardText, 
    MDBCol, 
    MDBIcon, 
    MDBInput, 
    MDBRadio, 
    MDBRow 
} from 'mdb-react-ui-kit'
import React from 'react'

function AccordionItem1(props) {

  return (
    <MDBAccordionItem collapseId={1} headerTitle={<><MDBIcon fas icon="dog fa-sm me-4 opacity-70" /> Basic Information</>}>
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Pet Name</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBInput 
                    label='Pet Name' 
                    type='text' 
                    name="name"
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)}
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Type of Pet</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBRadio 
                    btn 
                    btnColor='secondary' 
                    id='btn-dog' 
                    name='typeOfPet' 
                    wrapperTag='span' 
                    label='Dog'
                    value="dog"
                    checked={props.typeOfPet === 'dog'}
                    onChange={(e) => props.setTypeOfPet(e.target.value)}
                />
                <MDBRadio
                    btn
                    btnColor='secondary'
                    id='btn-cat'
                    name='typeOfPet'
                    wrapperClass='mx-2'
                    wrapperTag='span'
                    label='Cat'
                    value="cat"
                    checked={props.typeOfPet === 'cat'}
                    onChange={(e) => props.setTypeOfPet(e.target.value)}
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Weight</MDBCardText>
            </MDBCol>
            <MDBCol sm="7">
                <MDBInput 
                    label='Weight' 
                    type='number' 
                    name="weight"
                    value={props.weight}
                    onChange={(e) => props.setWeight(e.target.value)}
                /> 
            </MDBCol >
            <MDBCol sm="2">
                kg
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Age</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBInput 
                    className='mb-3'
                    label='Years' 
                    type='number' 
                    name="ageYears"
                    value={props.ageYears}
                    onChange={(e) => props.setAgeYears(e.target.value)}
                />
                <MDBInput 
                    label='Months' 
                    type='number' 
                    name="ageMonths"
                    value={props.ageMonths}
                    onChange={(e) => props.setAgeMonths(e.target.value)}
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Gender</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBRadio 
                    btn 
                    btnColor='secondary' 
                    id='btn-female' 
                    name='gender' 
                    wrapperTag='span' 
                    label='Female'
                    value="female"
                    checked={props.gender === 'female'}
                    onChange={(e) => props.setGender(e.target.value)}
                />
                <MDBRadio
                    btn
                    btnColor='secondary'
                    id='btn-male'
                    name='gender'
                    wrapperClass='mx-2'
                    wrapperTag='span'
                    label='Male'
                    value="male"
                    checked={props.gender === 'male'}
                    onChange={(e) => props.setGender(e.target.value)}
                />
            </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
            <MDBCol sm="3">
                <MDBCardText>Breed</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
                <MDBInput 
                    label='Breed' 
                    type='text' 
                    name="breed"
                    value={props.breed}
                    onChange={(e) => props.setBreed(e.target.value)}
                />
            </MDBCol>
        </MDBRow>
    </MDBAccordionItem>
  )
}

export default AccordionItem1