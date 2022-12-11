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

function AccordionItem3(props) {
  return (
    <MDBAccordionItem collapseId={3} headerTitle={<><MDBIcon fas icon="paw fa-sm me-4 opacity-70" />Care Information</>}>
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
                    onChange={(e) => props.setPottySchedule(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='pottySchedule' 
                    id='inlineRadio-pottySchedule2Hours' 
                    value='every 2 hours' 
                    label='Every 2 hours' 
                    onChange={(e) => props.setPottySchedule(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='pottySchedule' 
                    id='inlineRadio-pottySchedule4Hours' 
                    value='every 4 hours' 
                    label='Every 4 hours' 
                    onChange={(e) => props.setPottySchedule(e.target.value)}
                    inline 
                    defaultChecked
                />
                <MDBRadio 
                    name='pottySchedule' 
                    id='inlineRadio-pottySchedule8Hours' 
                    value='every 8 hours' 
                    label='Every 8 hours' 
                    onChange={(e) => props.setPottySchedule(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='pottySchedule' 
                    id='inlineRadio-pottyScheduleCustom' 
                    value='custom' 
                    label='Custom' 
                    onChange={(e) => props.setPottySchedule(e.target.value)}
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
                    onChange={(e) => props.setEnergy(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='energy' 
                    id='inlineRadio-energyModerate' 
                    value='moderate' 
                    label='Moderate' 
                    onChange={(e) => props.setEnergy(e.target.value)}
                    inline 
                    defaultChecked
                />
                <MDBRadio 
                    name='energy' 
                    id='inlineRadio-energyLow' 
                    value='low' 
                    label='Low' 
                    onChange={(e) => props.setEnergy(e.target.value)}
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
                    onChange={(e) => props.setFeedingSchedule(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='feedingSchedule' 
                    id='inlineRadio-feedingSchedule2Day' 
                    value='twice a day' 
                    label='Twice a day' 
                    onChange={(e) => props.setFeedingSchedule(e.target.value)}
                    inline 
                    defaultChecked
                />
                <MDBRadio 
                    name='feedingSchedule' 
                    id='inlineRadio-feedingScheduleCustom' 
                    value='custom' 
                    label='Custom' 
                    onChange={(e) => props.setFeedingSchedule(e.target.value)}
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
                    onChange={(e) => props.setCanBeAlone(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='canBeAlone' 
                    id='inlineRadio-canBeAlone1-4Hours' 
                    value='1 - 4 hours' 
                    label='1 - 4 hours' 
                    onChange={(e) => props.setCanBeAlone(e.target.value)}
                    inline 
                    defaultChecked
                />
                <MDBRadio 
                    name='canBeAlone' 
                    id='inlineRadio-canBeAlone4-8Hours' 
                    value='4 - 8 hours' 
                    label='4 - 8 hours' 
                    onChange={(e) => props.setCanBeAlone(e.target.value)}
                    inline 
                />
                <MDBRadio 
                    name='canBeAlone' 
                    id='inlineRadio-canBeAloneCustom' 
                    value='custom' 
                    label='Custom' 
                    onChange={(e) => props.setCanBeAlone(e.target.value)}
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
                    value={props.medication}
                    onChange={(e) => props.setMedication(e.target.value)} 
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
                    value={props.otherCareInfo}
                    onChange={(e) => props.setOtherCareInfo(e.target.value)} 
                />
            </MDBCol>
        </MDBRow>
    </MDBAccordionItem>
  )
}

export default AccordionItem3