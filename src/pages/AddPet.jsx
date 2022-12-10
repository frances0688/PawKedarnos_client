import React, { useContext } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBInput,
    MDBAccordion,
    MDBAccordionItem,
    MDBFile,
    MDBIcon,
    MDBRadio,
    MDBTextArea
  } from 'mdb-react-ui-kit';
import { AuthContext } from '../context/auth.context';

  
  function AddPet() {

    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

    // We need the user id when creating the new pet
    const { user } = useContext(AuthContext);
    const [userId] = useState(user._id);
    
    const [name, setName] = useState("");
    const [imgPath, setImgPath] = useState("https://www.petcloud.com.au/img/pet_placeholder.png");
    const [typeOfPet, setTypeOfPet] = useState("dog");
    const [weight, setWeight] = useState("");
    const [ageYears, setAgeYears] = useState("");
    const [ageMonths, setAgeMonths] = useState("");
    const [gender, setGender] = useState("female");
    const [breed, setBreed] = useState("");
    const [microchipped, setMicrochipped] = useState(null);
    const [spayedOrNeutered, setSpayedOrNeutered] = useState(null);
    const [houseTrained, setHouseTrained] = useState("yes");
    const [friendlyWithDogs, setFriendlyWithDogs] = useState(null);
    const [friendlyWithCats, setFriendlyWithCats] = useState(null);
    const [about, setAbout] = useState("");
    const [pottySchedule, setPottySchedule] = useState("every 4 hours");
    const [energy, setEnergy] = useState("moderate");
    const [feedingSchedule, setFeedingSchedule] = useState("twice a day");
    const [canBeAlone, setCanBeAlone] = useState("1 - 4 hours");
    const [medication, setMedication] = useState("");
    const [otherCareInfo, setOtherCareInfo] = useState("");
    const [vetName, setVetName] = useState("");
    const [vetNumber, setVetNumber] = useState("");
    const [vetStreet, setVetStreet] = useState("");
    const [vetCity, setVetCity] = useState("");
    const [vetState, setVetState] = useState("");
    const [vetZip, setVetZip] = useState("");
    const [additionalVetInfo, setAdditionalVetInfo] = useState("");
    // const [photo, setPhoto] = useState([]);
    const [active, setActive] = useState(null);
    
    
    const handleSubmit = (e) => {      //  <== UPDATE THE FUNCTION
        e.preventDefault();
        
        
        // Create an object representing the body of the POST request
        const requestBody = {
            name,
            imgPath,
            typeOfPet,
            weight,
            ageYears,
            ageMonths,
            gender,
            breed,
            microchipped,
            spayedOrNeutered,
            houseTrained,
            friendlyWithDogs,
            friendlyWithCats,
            about,
            pottySchedule,
            energy,
            feedingSchedule,
            canBeAlone,
            medication,
            otherCareInfo,
            vetName,
            vetNumber,
            vetStreet,
            vetCity,
            vetState,
            vetZip,
            additionalVetInfo,
            photo: [],
            active,
            owner: userId,
          }
    
        axios
        .post(`${API_URL}/api/pets/add`, requestBody)
        .then((response) => {
            // Reset the state to clear the inputs
            setName("");
            setImgPath("https://www.petcloud.com.au/img/pet_placeholder.png");
            setTypeOfPet("dog");
            setWeight("");
            setAgeYears("");
            setAgeMonths("");
            setGender("female");
            setBreed("");
            setMicrochipped(null);
            setSpayedOrNeutered(null);
            setHouseTrained("yes");
            setFriendlyWithDogs(null);
            setFriendlyWithCats(null);
            setAbout("");
            setPottySchedule("every 4 hours");
            setEnergy("moderate");
            setFeedingSchedule("twice a day");
            setCanBeAlone("1 - 4 hours");
            setMedication("");
            setOtherCareInfo("");
            setVetName("");
            setVetNumber("");
            setVetStreet("");
            setVetCity("");
            setVetState("");
            setVetZip("");
            setAdditionalVetInfo("");
            // setPhoto([]);
            setActive(null);

            navigate("/profile")
        })
        .catch((error) => console.log(error));
    };


    return (           
        
    <form className="addPet" onSubmit={handleSubmit} style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
            <MDBRow>
                <MDBCol lg="4">
                    <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                        <MDBCardImage
                            id="upload_widget"
                            src={imgPath}
                            alt="pet picture"
                            className="rounded-circle"
                            style={{ width: '150px' }}
                            fluid 
                        />
                        <MDBRow>
                            <MDBFile label='Add profile picture' id='customFile' name="pet-picture" onChange={(e) => setImgPath(e.target.value)}/>
                        </MDBRow>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="8">
                    <MDBCard className="mb-4">
                    <MDBCardBody className="text-start">
                        <MDBAccordion initialActive={1}>
                            <MDBAccordionItem collapseId={1} headerTitle={<><MDBIcon fas icon="dog fa-sm me-2 opacity-70" /> Basic Information</>}>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Pet Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBInput 
                                            label='Pet Name' 
                                            type='text' 
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
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
                                            onChange={(e) => setTypeOfPet(e.target.value)}
                                            defaultChecked
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
                                            onChange={(e) => setTypeOfPet(e.target.value)}
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Weight</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBInput 
                                            label='Weight' 
                                            type='number' 
                                            name="weight"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                        /> kg
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Age</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBInput 
                                            label='Years' 
                                            type='number' 
                                            name="ageYears"
                                            value={ageYears}
                                            onChange={(e) => setAgeYears(e.target.value)}
                                        />
                                        <MDBInput 
                                            label='Months' 
                                            type='number' 
                                            name="ageMonths"
                                            value={ageMonths}
                                            onChange={(e) => setAgeMonths(e.target.value)}
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
                                            onChange={(e) => setGender(e.target.value)}
                                            defaultChecked
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
                                            onChange={(e) => setGender(e.target.value)}
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
                                            value={breed}
                                            onChange={(e) => setBreed(e.target.value)}
                                        />
                                    </MDBCol>
                                </MDBRow>
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="cat fa-sm me-2 opacity-70" />Additional Information</>}>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Microchipped</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBRadio 
                                            name='microchipped' 
                                            id='inlineRadio-microchippedYes' 
                                            value='true' 
                                            label='Yes' 
                                            onChange={(e) => setMicrochipped(e.target.value)}
                                            inline
                                            defaultChecked 
                                        />
                                        <MDBRadio 
                                            name='microchipped' 
                                            id='inlineRadio-microchippedNo' 
                                            value='false' 
                                            label='No' 
                                            onChange={(e) => setMicrochipped(e.target.value)}
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
                                            onChange={(e) => setSpayedOrNeutered(e.target.value)}
                                            inline 
                                            defaultChecked
                                        />
                                        <MDBRadio 
                                            name='spayedOrNeutered' 
                                            id='inlineRadio-spayedOrNeuteredNo' 
                                            value='false' 
                                            label='No' 
                                            onChange={(e) => setSpayedOrNeutered(e.target.value)}
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
                                            onChange={(e) => setSpayedOrNeutered(e.target.value)}
                                            inline 
                                            defaultChecked
                                        />
                                        <MDBRadio 
                                            name='houseTrained' 
                                            id='inlineRadio-houseTrainedNo' 
                                            value='no' 
                                            label='No' 
                                            onChange={(e) => setSpayedOrNeutered(e.target.value)}
                                            inline 
                                        />
                                        <MDBRadio 
                                            name='houseTrained' 
                                            id='inlineRadio-houseTrainedUnsure' 
                                            value='unsure' 
                                            label='Unsure' 
                                            onChange={(e) => setSpayedOrNeutered(e.target.value)}
                                            inline 
                                        />
                                        <MDBRadio 
                                            name='houseTrained' 
                                            id='inlineRadio-houseTrainedDepends' 
                                            value='depends' 
                                            label='Depends' 
                                            onChange={(e) => setSpayedOrNeutered(e.target.value)}
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
                                            onChange={(e) => setFriendlyWithCats(e.target.value)}
                                            inline 
                                            defaultChecked
                                        />
                                        <MDBRadio 
                                            name='friendlyWithDogs' 
                                            id='inlineRadio-friendlyWithDogsNo' 
                                            value='false' 
                                            label='No' 
                                            onChange={(e) => setFriendlyWithCats(e.target.value)}
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
                                            onChange={(e) => setFriendlyWithCats(e.target.value)}
                                            inline 
                                            defaultChecked
                                        />
                                        <MDBRadio 
                                            name='friendlyWithCats' 
                                            id='inlineRadio-friendlyWithCatsNo' 
                                            value='false' 
                                            label='No' 
                                            onChange={(e) => setFriendlyWithCats(e.target.value)}
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
                                            label='About'
                                            rows={4}  
                                            name="about"
                                            value={about}
                                            onChange={(e) => setAbout(e.target.value)} 
                                        />
                                    </MDBCol>
                                </MDBRow>
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={3} headerTitle={<><MDBIcon fas icon="paw fa-sm me-2 opacity-70" />Care Information</>}>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Potty Schedule</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBRadio 
                                            name='pottySchedule' 
                                            id='inlineRadio-pottyScheduleHour' 
                                            value='every hour' 
                                            label='Every hour' 
                                            onChange={(e) => setPottySchedule(e.target.value)}
                                            inline 
                                        />
                                        <MDBRadio 
                                            name='pottySchedule' 
                                            id='inlineRadio-pottySchedule2Hours' 
                                            value='every 2 hours' 
                                            label='Every 2 hours' 
                                            onChange={(e) => setPottySchedule(e.target.value)}
                                            inline 
                                        />
                                        <MDBRadio 
                                            name='pottySchedule' 
                                            id='inlineRadio-pottySchedule4Hours' 
                                            value='every 4 hours' 
                                            label='Every 4 hours' 
                                            onChange={(e) => setPottySchedule(e.target.value)}
                                            inline 
                                            defaultChecked
                                        />
                                        <MDBRadio 
                                            name='pottySchedule' 
                                            id='inlineRadio-pottySchedule8Hours' 
                                            value='every 8 hours' 
                                            label='Every 8 hours' 
                                            onChange={(e) => setPottySchedule(e.target.value)}
                                            inline 
                                        />
                                        <MDBRadio 
                                            name='pottySchedule' 
                                            id='inlineRadio-pottyScheduleCustom' 
                                            value='custom' 
                                            label='Custom' 
                                            onChange={(e) => setPottySchedule(e.target.value)}
                                            inline 
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Energy Level</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBRadio 
                                            name='energy' 
                                            id='inlineRadio-energyHigh' 
                                            value='high' 
                                            label='High' 
                                            onChange={(e) => setEnergy(e.target.value)}
                                            inline 
                                        />
                                        <MDBRadio 
                                            name='energy' 
                                            id='inlineRadio-energyModerate' 
                                            value='moderate' 
                                            label='Moderate' 
                                            onChange={(e) => setEnergy(e.target.value)}
                                            inline 
                                            defaultChecked
                                        />
                                        <MDBRadio 
                                            name='energy' 
                                            id='inlineRadio-energyLow' 
                                            value='low' 
                                            label='Low' 
                                            onChange={(e) => setEnergy(e.target.value)}
                                            inline 
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Feeding Schedule</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBRadio 
                                            name='feedingSchedule' 
                                            id='inlineRadio-feedingScheduleMorning' 
                                            value='morning' 
                                            label='Morning' 
                                            onChange={(e) => setFeedingSchedule(e.target.value)}
                                            inline 
                                        />
                                        <MDBRadio 
                                            name='feedingSchedule' 
                                            id='inlineRadio-feedingSchedule2Day' 
                                            value='twice a day' 
                                            label='Twice a day' 
                                            onChange={(e) => setFeedingSchedule(e.target.value)}
                                            inline 
                                            defaultChecked
                                        />
                                        <MDBRadio 
                                            name='feedingSchedule' 
                                            id='inlineRadio-feedingScheduleCustom' 
                                            value='custom' 
                                            label='Custom' 
                                            onChange={(e) => setFeedingSchedule(e.target.value)}
                                            inline 
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Can be left alone?</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBRadio 
                                            name='canBeAlone' 
                                            id='inlineRadio-canBeAloneHour' 
                                            value='less than 1 hour' 
                                            label='Less than 1 hour' 
                                            onChange={(e) => setCanBeAlone(e.target.value)}
                                            inline 
                                        />
                                        <MDBRadio 
                                            name='canBeAlone' 
                                            id='inlineRadio-canBeAlone1-4Hours' 
                                            value='1 - 4 hours' 
                                            label='1 - 4 hours' 
                                            onChange={(e) => setCanBeAlone(e.target.value)}
                                            inline 
                                            defaultChecked
                                        />
                                        <MDBRadio 
                                            name='canBeAlone' 
                                            id='inlineRadio-canBeAlone4-8Hours' 
                                            value='4 - 8 hours' 
                                            label='4 - 8 hours' 
                                            onChange={(e) => setCanBeAlone(e.target.value)}
                                            inline 
                                        />
                                        <MDBRadio 
                                            name='canBeAlone' 
                                            id='inlineRadio-canBeAloneCustom' 
                                            value='custom' 
                                            label='Custom' 
                                            onChange={(e) => setCanBeAlone(e.target.value)}
                                            inline 
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Medication</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBTextArea 
                                            label='Medication'
                                            rows={4}  
                                            name="medication"
                                            value={medication}
                                            onChange={(e) => setMedication(e.target.value)} 
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Other Care Information</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBTextArea 
                                            label='About'
                                            rows={4}  
                                            name="otherCareInfo"
                                            value={otherCareInfo}
                                            onChange={(e) => setOtherCareInfo(e.target.value)} 
                                        />
                                    </MDBCol>
                                </MDBRow>
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={4} headerTitle={<><MDBIcon fas icon="medkit fa-sm me-2 opacity-70" />Veterinary Information</>}>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBInput 
                                            label='Vet Name' 
                                            type='text' 
                                            name="vetName"
                                            value={vetName}
                                            onChange={(e) => setVetName(e.target.value)}
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
                                            value={vetNumber}
                                            onChange={(e) => setVetNumber(e.target.value)}
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
                                            value={vetStreet}
                                            onChange={(e) => setVetStreet(e.target.value)}
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
                                            value={vetCity}
                                            onChange={(e) => setVetCity(e.target.value)}
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
                                            value={vetState}
                                            onChange={(e) => setVetState(e.target.value)}
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
                                            value={vetZip}
                                            onChange={(e) => setVetZip(e.target.value)}
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
                                            value={additionalVetInfo}
                                            onChange={(e) => setAdditionalVetInfo(e.target.value)} 
                                        />
                                    </MDBCol>
                                </MDBRow>
                            </MDBAccordionItem>
                        </MDBAccordion>
                        <MDBRow>
                            <MDBBtn outline type="submit" className="me-3" color='secondary'>Create Pet Profile</MDBBtn>
                        </MDBRow>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </form>
    );
}      

export default AddPet