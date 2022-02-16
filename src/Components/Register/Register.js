import React from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

//react router dom imports
import { Link } from "react-router-dom";

//custom imports
import { useStyle } from "./Style";
import facebook from "../../Assets/facebook-login.png";

const Register = () => {
  const classes = useStyle();
  return (
    <>
      <section className={classes.register}>
        <Container>
          <Grid container space={2} className={classes.registercontainer}>
            <Grid item xs={12} md={12} sm={12}>
              <div className={classes.loginRegister}>
                  <div className={classes.loginborder}></div>
                <h4>Create an account</h4>
                <p>
                  Don't have an account? Create your account. It's take less
                  then a minutes
                </p>
                <form
                  name="register_form"
                  id="register_form"
                  method="post"
                  action=""
                  novalidate="novalidate"
                >
                  <div className={classes.formgroup}>
                    <input
                      type="text"
                      autocomplete="off"
                      name="first_name"
                      id="first_name"
                      className={classes.formcontrol}
                      placeholder="Name"
                    />
                  </div>
                  <div className={classes.formgroup}>
                    <input
                      type="email"
                      autocomplete="off"
                      name="email_id"
                      id="email_id"
                      className={classes.formcontrol}
                      placeholder="Email id*"
                      required=""
                    />
                  </div>
                  <div className={classes.formgroup}>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className={classes.formcontrol}
                      placeholder="Password*"
                      required=""
                    />
                  </div>
                  <div className={classes.formgroup}>
                    <input
                      type="text"
                      onkeypress="return isNumber(event)"
                      autocomplete="off"
                      name="mobile_number"
                      id="mobile_number"
                      className={classes.formcontrol}
                      placeholder="Phone"
                    />
                  </div>
                  <div className={classes.formgroup}>
                    <select
                      name="user_type"
                      id="user_type"
                      className={classes.formcontrol}
                    >
                      <option value="">User type</option>
                      <option value="General">General user</option>
                      <option value="Service provider">Service provider</option>
                    </select>
                    <a href="user-type" class="frmtip" target="_blank">
                      User options
                    </a>
                  </div>
                  <button
                    type="submit"
                    name="register_submit"
                    className={classes.btnregister}
                  >
                    Register Now
                  </button>
                </form>
                {/** Social Login **/}
                <div className={classes.sociallogin}>
                  <ul>
                    <li>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 48 48"
                        class="abcRioButtonSvg"
                      >
                        <g>
                          <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                          ></path>
                          <path
                            fill="#4285F4"
                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                          ></path>
                          <path
                            fill="#FBBC05"
                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                          ></path>
                          <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                          ></path>
                          <path fill="none" d="M0 0h48v48H0z"></path>
                        </g>
                      </svg>
                    </li>
                    <span>Sign in</span>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">
                        <img src={facebook} alt="facebook login" />
                        Continue with Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={classes.links}>
                <ul>
                  <li>
                    <a href="#">
                      <span>Login?</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Create an account?</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Forgot password?</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Register;
