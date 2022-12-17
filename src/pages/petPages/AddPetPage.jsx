import React, { useContext } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBAccordion,
  } from 'mdb-react-ui-kit';
import { AuthContext } from '../../context/auth.context';
import ProfileCard from '../../components/ProfileCard';
import AccordionItem1 from '../../components/AccordionItem1';
import AccordionItem2 from '../../components/AccordionItem2';
import AccordionItem3 from '../../components/AccordionItem3';
import AccordionItem4 from '../../components/AccordionItem4';

  
  function AddPetPage() {

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

            navigate(`/pets/${response.data._id}`)
        })
        .catch((error) => console.log(error));
    };


    return (           
        
    <form className="addPetPage" onSubmit={handleSubmit} >
        <MDBContainer className="py-5">
            <MDBRow>
                <MDBCol lg="4">
                    <ProfileCard 
                    name={name} 
                    imgPath={imgPath} 
                    setImgPath={setImgPath}
                    />
                </MDBCol>
                <MDBCol lg="8">
                    <MDBCard className="mb-4">
                    <MDBCardBody className="text-start">
                        <MDBAccordion className="mb-4" initialActive={1}>
                            <AccordionItem1 
                                name={name} 
                                setName={setName} 
                                typeOfPet={typeOfPet}
                                setTypeOfPet={setTypeOfPet} 
                                weight={weight} 
                                setWeight={setWeight} 
                                ageYears={ageYears}
                                setAgeYears={setAgeYears}
                                ageMonths={ageMonths}
                                setAgeMonths={setAgeMonths}
                                gender={gender}
                                setGender={setGender}
                                breed={breed}
                                setBreed={setBreed}
                            />
                            <AccordionItem2 
                                microchipped={microchipped}
                                setMicrochipped={setMicrochipped} 
                                spayedOrNeutered={spayedOrNeutered}
                                setSpayedOrNeutered={setSpayedOrNeutered} 
                                houseTrained={houseTrained}
                                setHouseTrained={setHouseTrained} 
                                friendlyWithDogs={friendlyWithDogs}
                                setFriendlyWithDogs={setFriendlyWithDogs} 
                                friendlyWithCats={friendlyWithCats}
                                setFriendlyWithCats={setFriendlyWithCats} 
                                about={about}
                                setAbout={setAbout}
                            />
                            <AccordionItem3
                                pottySchedule={pottySchedule}
                                setPottySchedule={setPottySchedule}
                                energy={energy}
                                setEnergy={setEnergy} 
                                feedingSchedule={feedingSchedule}
                                setFeedingSchedule={setFeedingSchedule} 
                                canBeAlone={canBeAlone}
                                setCanBeAlone={setCanBeAlone} 
                                medication={medication} 
                                setMedication={setMedication}
                                otherCareInfo={otherCareInfo}
                                setOtherCareInfo={setOtherCareInfo}
                            />
                            <AccordionItem4
                                vetName={vetName}
                                setVetName={setVetName} 
                                vetNumber={vetNumber} 
                                setVetNumber={setVetNumber} 
                                vetStreet={vetStreet} 
                                setVetStreet={setVetStreet}
                                vetCity={vetCity}
                                setVetCity={setVetCity}
                                vetState={vetState} 
                                setVetState={setVetState}
                                vetZip={vetZip}
                                setVetZip={setVetZip}
                                additionalVetInfo={additionalVetInfo}
                                setAdditionalVetInfo={setAdditionalVetInfo}
                            />
                        </MDBAccordion>
                        <MDBContainer className="text-center">
                            <MDBBtn type="submit" className='me-3 text-center' style={{ backgroundColor: '#9eb08c' }}>Create Pet Profile</MDBBtn>
                            <Link to="/profile">
                                <MDBBtn type="submit" className='me-3 text-center' style={{ backgroundColor: '#9eb08c' }}>Cancel</MDBBtn>
                            </Link>
                        </MDBContainer>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </form>
    );
}      

export default AddPetPage