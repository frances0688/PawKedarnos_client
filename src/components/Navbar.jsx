import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBBtn
} from 'mdb-react-ui-kit';

function Navbar() {
  
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <MDBNavbar light expand='lg' bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='/'>
                <img
                src='./img/PawKedarnosSmall.png'
                height='60'
                alt='logo'
                loading='lazy'
                />
            </MDBNavbarBrand>
            <MDBNavbarToggler
              type='button'
              data-target='#navbarTogglerDemo02'
              aria-controls='navbarTogglerDemo02'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
            >
                <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNavNoTogglerSecond}>
                <MDBNavbarNav right className='mr-auto mb-2 mb-lg-0 justify-content-end'>
                  <MDBNavbarLink href='/about' className='me-2'>
                        About Us
                    </MDBNavbarLink>
                    <MDBNavbarLink href="/services" className='me-2'>
                        Book Services
                    </MDBNavbarLink>
                    <MDBNavbarLink href="/faq" className='me-2'>
                        FAQ
                    </MDBNavbarLink>

              </MDBNavbarNav>
          </MDBCollapse>
                      {isLoggedIn && (
                        <>
                          <Link to="/profile">
                            <MDBBtn className='gradient-custom-2 me-2' type='button'>
                              Profile
                            </MDBBtn>
                          </Link>
                          <MDBBtn className='gradient-custom-2 me-2' type='button' onClick={logOutUser}>
                            Logout
                          </MDBBtn>
                        </>
                      )}

                      {!isLoggedIn && (
                        <>
                          <Link to="/login">
                            <MDBBtn className='gradient-custom-2 me-2' type='button'>
                              Sign In
                            </MDBBtn>
                          </Link>
                        </>
                      )}
        </MDBContainer>
    </MDBNavbar>

  );
}

export default Navbar;
