import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";
import {
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

    <div id="login-form" className="LoginPage">
    <section className="h-100 gradient-form" >
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">

                  <div className="text-center">
                    <img src="" className="img-fluid" alt="logo" />
                  </div>
                  <div>
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
                        <SignUpForm/>
                        <div className='text-center'>
                          <p>
                            Already have an account? <Link onClick={() => handleLoginRegisterClick('login')}>Login</Link>
                          </p>
                        </div>
                    </MDBTabsPane>
                    </MDBTabsContent>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">They deserve to be pampered too!</h4>
                  <p className="small mb-0">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>

  );
}

export default LoginPage;
