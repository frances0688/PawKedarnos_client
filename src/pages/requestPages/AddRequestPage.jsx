import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
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
    <MDBContainer>
      <h1>Request A Service Booking</h1>
      <Stepper activeStep={activeStep} >
        <Step style={{backgroundColor: "rgb(186,187,177)"}} label="Service" />
        <Step style={{backgroundColor: "rgb(186,187,177)"}} label="Pet" />
        <Step style={{backgroundColor: "rgb(186,187,177)"}} label="Date" />
        <Step style={{backgroundColor: "rgb(186,187,177)"}} label="Price" />
        <Step style={{backgroundColor: "rgb(186,187,177)"}} label="Submit" />
      </Stepper>

    <form onSubmit={handleSubmit}>
      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <StepOne service={service} setService={setService}/>
        <StepTwo allPets={allPets} pet={pet} setPet={setPet}/>
        <StepThree startDateTime={startDateTime} setStartDateTime={setStartDateTime} endDateTime={endDateTime} setEndDateTime={setEndDateTime} />
        <StepFour />
        <StepFive  />
      </StepWizard>
    </form>
    
     
    </MDBContainer>
  )
}

export default AddRequestPage

