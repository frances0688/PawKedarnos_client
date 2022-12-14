import { MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ActionButtons from './ActionButtons'

function StepThree(props) {

    const [dateRange, setDateRange] = useState([null, null]);
    // const [startDate, endDate] = dateRange;
    let startDate = dateRange[0]
    let endDate = dateRange[1]
    
    console.log(dateRange)

    return (
      <MDBContainer className="justify-content-center">
          <MDBCardText>When do you need services?</MDBCardText>
          <MDBRow>
              <MDBCol>
                    <DatePicker 
                        name='startDateTime' 
                        minDate={new Date()}
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        // timeInputLabel="Time:"
                        onChange={(update) => {
                            setDateRange(update); 
                            props.setStartDateTime(update[0]); 
                            props.setEndDateTime(update[1]);
                            console.log(update)
                        }}
                        dateFormat="MM/dd/yyyy h:mm aa"
                        isClearable={true}
                        // showTimeInput
                        required
                    />

              </MDBCol>
              <MDBCol>
                  <DatePicker 
                    name='endDateTime' 
                    minDate={new Date()}
                    onChange={(date) => props.setEndDateTime(date)} 
                  />

              </MDBCol>
              <ActionButtons {...props} />
          </MDBRow>
      </MDBContainer>
    )
}

export default StepThree