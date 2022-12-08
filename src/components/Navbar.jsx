import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='/'>
              <img
              src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
              height='30'
              alt='logo'
              loading='lazy'
              />
              Paw Kedarnos con K!

            </MDBNavbarBrand>
            <div className='d-flex justify-content-end'>
                {isLoggedIn && (
                  <>
                    <MDBBtn outline color="secondary" className='me-2' type='button' onClick={logOutUser}>
                      Logout
                    </MDBBtn>
                    <Link to="/profile">
                      <MDBBtn outline color="secondary" className='me-2' type='button'>
                        Profile
                      </MDBBtn>
                    </Link>
                  </>
                )}

                {!isLoggedIn && (
                  <>
                    <Link to="/login">
                      <MDBBtn outline color="secondary" className='me-2' type='button'>
                        Sign In
                      </MDBBtn>
                    </Link>
                  </>
                )}
            </div>
        </MDBContainer>
    </MDBNavbar>

  );
}

export default Navbar;
