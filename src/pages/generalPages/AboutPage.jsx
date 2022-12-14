import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div>
      <h5>About Us:</h5>
    <p>
      PawKedarnos is a one-of-a-kind pet care business in which our main 
      focus is to give personalized and quality care to each and every one of our boarding pets. 
      Owned and operated by a veterinary technician, we are able to offer health 
      and wellness services such as medication administration and therapies.
    </p>

    <p>
      Karen Morales, owner of PawKedarnos, is a Veterinary Technician with over 4+ years 
      of experience in the veterinary field. Her passion for animals and their health led her 
      to quickly realize a big necessity within the boarding industry: a cage-free boarding for 
      pets with medical conditions or requiring a different type of care that can only be found 
      in veterinary offices. She is committed to making every pet feel at home.
    </p>
    <Link to="/"><MDBBtn>Return to HomePage</MDBBtn></Link>
    </div>
  )
}

export default AboutPage