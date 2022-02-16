import React from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

//custom imports
import { useStyle } from "./Mainstyles";
import blog from "../Assets/blog.png";
import shield from "../Assets/shield.png";
import general from "../Assets/general.png";

const Yellowpageshomeform = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div className={classes.Yellowpageshomeformcontainer}>
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              container
              xs={12}
              sm={6}
              md={6}
              className={classes.formcontent}
            >
              <div>
                <h3>
                  What service do you need? <span>Yellow pages Kenya</span>
                </h3>
                <p>
                  Tell us more about your requirements so that we can connect
                  you to the right service provider.
                </p>
                <ul>
                  <li>
                    <img src={blog} alt="requirements" />
                    <div>
                      <h5>Tell us more about your requirements</h5>
                      <p>
                        HI Imagine you have made your presence online through a
                        local online directory, but your competitors have..
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={shield} alt="providers" />
                    <div>
                      <h5>We connect with right service provider</h5>
                      <p>
                        Advertising your business to area specific has many
                        advantages. For local businessmen, it is an
                        opportunity..
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={general} alt="happy" />
                    <div>
                      <h5>Happy with our service</h5>
                      <p>
                        Your local business too needs brand management and image
                        making. As you know the local market..
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item  xs={12} sm={6} md={6} className={classes.form}>
              <div className={classes.homeformenquiry}>
                <h4>What you looking for?</h4>
                <div className={classes.log}>
                  <p>Your Enquiry Is Submitted Successfully!!!</p>
                </div>
                <form
                  name="home_enquiry_form"
                  id="home_enquiry_form"
                  method="post"
                  encType="multipart/form-data"
                >
                  <div className={classes.formgroup}>
                    <input
                      type="text"
                      name="enquiry_name"
                      required="required"
                      className={classes.formcontrol}
                      placeholder="Enter name*"
                    />
                  </div>
                  <div className={classes.formgroup}>
                    <input
                      type="email"
                      className={classes.formcontrol}
                      placeholder="Enter email*"
                      required="required"
                      name="enquiry_email"
                      pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                      title="Invalid email address"
                    />
                  </div>
                  <div className={classes.formgroup}>
                    <input
                      type="text"
                      className={classes.formcontrol}
                      name="enquiry_mobile"
                      placeholder="Enter mobile number *"
                      pattern="[7-9]{1}[0-9]{9}"
                      title="Phone number starting with 7-9 and remaining 9 digit with 0-9"
                      required=""
                    />
                  </div>
                  <div className={classes.formgroup}>
                    <select
                      name="enquiry_category"
                      id="enquiry_category"
                      className={classes.formcontrol}
                    >
                      <option value="">Select Category</option>
                      <option value="19">Wedding halls</option>
                      <option value="17">Pet shop</option>
                      <option value="16">Technology</option>
                      <option value="15">Spa and Facial</option>
                      <option value="10">Real Estate</option>
                      <option value="8">Sports</option>
                      <option value="7">Education</option>
                      <option value="6">Electricals</option>
                      <option value="5">Automobiles</option>
                      <option value="3">Transportation</option>
                      <option value="2">Hospitals</option>
                      <option value="1">Hotels And Resorts</option>
                    </select>
                  </div>
                  <div className={classes.formgroup}>
                    <textarea
                      className={classes.formcontrol}
                      rows="6"
                      name="enquiry_message"
                      placeholder="Enter your query or message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    id="home_enquiry_submit"
                    name="home_enquiry_submit"
                    className={classes.homeenquirysubmit}
                  >
                    Submit Requirements{" "}
                  </button>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Yellowpageshomeform;
