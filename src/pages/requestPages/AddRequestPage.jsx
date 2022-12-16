import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import StepWizard from "react-step-wizard";
import { Stepper, Step } from "react-form-stepper";
import StepOne from '../../components/StepperComponents/StepOne';
import StepTwo from '../../components/StepperComponents/StepTwo';
import StepThree from '../../components/StepperComponents/StepThree';
import StepFour from '../../components/StepperComponents/StepFour';
import StepFive from '../../components/StepperComponents/StepFive';
  
function AddRequestPage() {
    
    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

    // We need the user id when creating the new request
    const { userId } = useParams();

    const [service, setService] = useState("boarding");
    const [pet, setPet] = useState("");
    const [startDateTime, setStartDateTime] = useState(new Date());
    const [endDateTime, setEndDateTime] = useState(new Date());

    const [allPets, setAllPets] = useState([]);

    const [stepWizard, setStepWizard] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    
    useEffect(() => {
      axios
      .get(`${API_URL}/api/users/${userId}/pets`)
      .then((response) => {
        setAllPets(response.data)
      })
      .catch((error) => console.log(error));
  }, [userId]);


    const assignStepWizard = (instance) => {
      setStepWizard(instance);
    };

    const handleStepChange = (e) => {
      console.log("step change");
      console.log(e);
      setActiveStep(e.activeStep - 1);
    };

      const handleSubmit = (e) => {      //  <== UPDATE THE FUNCTION
          e.preventDefault();
          
          // Create an object representing the body of the POST request
          const requestBody = {
            service,
            owner: userId,
            pet,
            startDateTime,    
            endDateTime
          }
      
          axios
          .post(`${API_URL}/api/users/${userId}/requests/add`, requestBody)
          .then((response) => {
              // Reset the state to clear the inputs
              setService("boarding");
              setPet("")
              setStartDateTime("");    
              setEndDateTime("");

              navigate("/profile")
          })
          .catch((error) => console.log(error));
      };

  return (
    <MDBContainer className="py-5 h-100">
      <MDBCol className='p-5' style={{backgroundColor: "#fff"}}>
        <h1>Request A Service Booking</h1>
        <Stepper activeStep={activeStep} >
          <Step label="Service" />
          <Step label="Pet" />
          <Step label="Date" />
          {/* <Step label="Price" /> */}
          <Step label="Submit" />
        </Stepper>

        <form className='p-4 rounded-top' style={{backgroundColor: '#f8f9fa'}} onSubmit={handleSubmit}>
          <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
            <StepOne service={service} setService={setService}/>
            <StepTwo allPets={allPets} pet={pet} setPet={setPet}/>
            <StepThree service={service} startDateTime={startDateTime} setStartDateTime={setStartDateTime} endDateTime={endDateTime} setEndDateTime={setEndDateTime} />
            {/* <StepFour /> */}
            <StepFive  />
          </StepWizard>
        </form>
      </MDBCol>
    
     
    </MDBContainer>
  )
}

export default AddRequestPage

