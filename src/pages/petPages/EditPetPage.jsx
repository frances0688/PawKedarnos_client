import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBBtn,
    MDBAccordion,
  } from 'mdb-react-ui-kit';
import ProfileCard from '../../components/ProfileCard';
import AccordionItem1 from '../../components/AccordionItem1';
import AccordionItem2 from '../../components/AccordionItem2';
import AccordionItem3 from '../../components/AccordionItem3';
import AccordionItem4 from '../../components/AccordionItem4';
import { useEffect } from 'react';

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
  
  function EditPetPage() {
    
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
    const [photo, setPhoto] = useState([]);
    const [active, setActive] = useState(null);
    const [errorMessage, setErrorMessage] = useState(undefined);
    
    const navigate = useNavigate();
    const { petId } = useParams();
    
    useEffect(() => {
      axios
      .get(`${API_URL}/api/pets/${petId}`)
      .then((response) => {
          const pet = response.data

          setName(pet.name);
          setImgPath(pet.imgPath);
          setTypeOfPet(pet.typeOfPet);
          setWeight(pet.weight);
          setAgeYears(pet.ageYears);
          setAgeMonths(pet.ageMonths);
          setGender(pet.gender);
          setBreed(pet.breed);
          setMicrochipped(pet.microchipped);
          setSpayedOrNeutered(pet.spayedOrNeutered);
          setHouseTrained(pet.houseTrained);
          setFriendlyWithDogs(pet.friendlyWithDogs);
          setFriendlyWithCats(pet.friendlyWithCats);
          setAbout(pet.about);
          setPottySchedule(pet.pottySchedule);
          setEnergy(pet.energy);
          setFeedingSchedule(pet.feedingSchedule);
          setCanBeAlone(pet.canBeAlone);
          setMedication(pet.medication);
          setOtherCareInfo(pet.otherCareInfo);
          setVetName(pet.vetName);
          setVetNumber(pet.vetNumber);
          setVetStreet(pet.vetStreet);
          setVetCity(pet.vetCity);
          setVetState(pet.vetState);
          setVetZip(pet.vetZip);
          setAdditionalVetInfo(pet.additionalVetInfo);
          // setPhoto([]);
          setActive(pet.active);
          console.log(pet)
      })
      .catch((error) => console.log(error));
  }, [petId]);

    const handleSubmit = (e) => {  
        e.preventDefault();

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
      photo,
      active
    }
    
    axios
    .put(`${API_URL}/api/pets/${petId}`, requestBody)
    .then((response) => {
      navigate(`/pets/${petId}`);
    })
    .catch((error) => {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    });
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
                          <div className='text-center'>
                            <MDBBtn type="submit" className='me-3 text-center' style={{ backgroundColor: '#9eb08c' }}>
                                Save
                            </MDBBtn>
                            <Link to={`/pets/${petId}`}>
                              <MDBBtn className='me-3 text-center' style={{ backgroundColor: '#9eb08c' }}>
                                  Cancel
                              </MDBBtn>
                            </Link>
                          </div>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </form>
    );
}      

export default EditPetPage