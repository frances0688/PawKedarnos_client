import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

function LoginPage() {
 
  const [loginRegisterActive, setLoginRegisterActive] = useState('login');
  const handleLoginRegisterClick = (value) => {
      if (value === loginRegisterActive) {
      return;
      }

      setLoginRegisterActive(value);
  };

  return (

      <MDBContainer id="login-form" className="LoginPage py-5 h-100 gradient-form" >
          <MDBRow>

              <MDBCol col='6' className="mb-5">

                  <div className="text-center">
                    <img src="./img/PawKedarnosLogo.png" style={{width: '300px'}} alt="logo" />
                  </div>

                  <MDBTabs pills justify className='mb-3'>
                        <MDBTabsItem>
                          <MDBTabsLink
                            onClick={() => handleLoginRegisterClick('login')}
                            active={loginRegisterActive === 'login'}
                          >
                            Login
                          </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                          <MDBTabsLink
                            onClick={() => handleLoginRegisterClick('register')}
                            active={loginRegisterActive === 'register'}
                          >
                            Register
                          </MDBTabsLink>
                        </MDBTabsItem>
                      </MDBTabs>

                      <MDBTabsContent>
                        <MDBTabsPane show={loginRegisterActive === 'login'}>
                          <LoginForm/>
                          <div className='text-center'>
                            <p>
                            Don't have an account? <Link onClick={() => handleLoginRegisterClick('register')}>Register</Link>
                            </p>
                          </div>
                      </MDBTabsPane>
                      <MDBTabsPane show={loginRegisterActive === 'register'}>
                          <SignUpForm setLoginRegisterActive={setLoginRegisterActive}/>
                          <div className='text-center'>
                            <p>
                              Already have an account? <Link onClick={() => handleLoginRegisterClick('login')}>Login</Link>
                            </p>
                          </div>
                      </MDBTabsPane>
                      </MDBTabsContent>

              </MDBCol>

              <MDBCol col='6' className="mb-5">
                <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4">Join the PawKedarnos Family!</h4>
                    <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                </div>

              </MDBCol>

          </MDBRow>

      </MDBContainer>

  );
}

export default LoginPage;
