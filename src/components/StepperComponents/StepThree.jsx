import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ActionButtons from './ActionButtons'

function StepThree(props) {

    const [dateRange, setDateRange] = useState([null, null]);
    let startDate = dateRange[0]
    let endDate = dateRange[1]
    
    console.log(dateRange)

    return (
        <MDBContainer className="pt-3 justify-content-center">
            <h5>When do you need services?</h5>
            <MDBRow>
                <MDBCol className='pt-5'>
                    {/* {(props.service === "boarding" || props.service === "dayCare") && ( */}
                        <DatePicker 
                            name='startDateTime' 
                            placeholderText="Select date range"
                            minDate={new Date()}
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="MM/dd/yyyy"
                            isClearable={true}
                            onChange={(update) => {
                                setDateRange(update); 
                                props.setStartDateTime(update[0]); 
                                props.setEndDateTime(update[1]);
                            }}
                            required
                        />                        
                    {/* {(props.service === "houseVisit" || props.service === "grooming") && (
                    )}
                        
                        <DatePicker 
                            name='endDateTime' 
                            placeholderText="Select date"
                            minDate={new Date()}
                            startDate={startDate}
                            dateFormat="MM/dd/yyyy"
                            isClearable={true}
                            onChange={(date) => {
                                // setDateRange(update);
                                props.setStartDateTime(date);
                            }} 
                            required
                        />
    
                    )} */}
                </MDBCol>
                <ActionButtons {...props} />
            </MDBRow>
        </MDBContainer>
    )
}

export default StepThree