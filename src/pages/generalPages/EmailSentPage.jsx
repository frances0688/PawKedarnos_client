import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'

function EmailSentPage() {
  return (
    <div>
        Thank you for your message!
        <br />
        Please be patient as we review and respond via email within the next 24hrs.
        <br />
    <Link to="/"><MDBBtn className='me-3' type='button' style={{ backgroundColor: '#9eb08c' }}>Return to HomePage</MDBBtn></Link>
    </div>
  )
}

export default EmailSentPage