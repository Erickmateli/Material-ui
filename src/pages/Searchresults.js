import React, { useState } from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import VerifiedIcon from "@mui/icons-material/Verified";
import AppsIcon from "@mui/icons-material/Apps";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//custom imports
import { useStyle } from "../Components/Mainstyles";
import resort from "../Assets/resort.jpg";
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/lowerbudget.jpg";
import yellowpagesflipbookad from "../Assets/yellow-pages-flip-book-min.gif";
const SearchResults = () => {
  const classes = useStyle();

  //set category state
  const [cat, setCat] = React.useState("");

  const handleChange = (event) => {
    setCat(event.target.value);
  };
  return (
    <React.Fragment>
      <div className={classes.breadcrumb}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <h1>Real Estate</h1>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">All Category</a>
                </li>
                <li>
                  <a href="#">Real Estate</a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.Searchresultscontainer}>
        <Container>
          <Grid container className={classes.SearchResultswrapper}>
            <Grid item sm={12} md={3} sm={3}>
              <div className={classes.filterwrapper}>
                <div className={classes.topservicebox}>
                  <div className={classes.topservicehead}>
                    <h4>
                      Top <span>Hotels And Resorts</span>
                    </h4>
                  </div>
                  <div className={classes.topservicebody}>
                    <ul>
                      <li>
                        <a href="/">
                          <div className={classes.topservicelogo}>
                            <img src={resort} alt="resort" />
                          </div>
                          <div className={classes.topservicecontent}>
                            <h5>Vacani Hotel Resort and Spa</h5>
                            <span>Voi Town opposite SGR voi terminal</span>
                          </div>
                          <div className={classes.topserviceverified}>
                            <span>
                              <VerifiedIcon></VerifiedIcon>
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <div className={classes.topservicelogo}>
                            <img src={resort} alt="resort" />
                          </div>
                          <div className={classes.topservicecontent}>
                            <h5>Vacani Hotel Resort and Spa</h5>
                            <span>Voi Town opposite SGR voi terminal</span>
                          </div>
                          <div className={classes.topserviceverified}>
                            <span>
                              <VerifiedIcon></VerifiedIcon>
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <div className={classes.topservicelogo}>
                            <img src={resort} alt="resort" />
                          </div>
                          <div className={classes.topservicecontent}>
                            <h5>Vacani Hotel Resort and Spa</h5>
                            <span>Voi Town opposite SGR voi terminal</span>
                          </div>
                          <div className={classes.topserviceverified}>
                            <span>
                              <VerifiedIcon></VerifiedIcon>
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <div className={classes.topservicelogo}>
                            <img src={resort} alt="resort" />
                          </div>
                          <div className={classes.topservicecontent}>
                            <h5>Vacani Hotel Resort and Spa</h5>
                            <span>Voi Town opposite SGR voi terminal</span>
                          </div>
                          <div className={classes.topserviceverified}>
                            <span>
                              <VerifiedIcon></VerifiedIcon>
                            </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <div className={classes.topservicelogo}>
                            <img src={resort} alt="resort" />
                          </div>
                          <div className={classes.topservicecontent}>
                            <h5>Vacani Hotel Resort and Spa</h5>
                            <span>Voi Town opposite SGR voi terminal</span>
                          </div>
                          <div className={classes.topserviceverified}>
                            <span>
                              <VerifiedIcon></VerifiedIcon>
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/**filter by category **/}
                <div className={classes.filtercat}>
                  <h4>
                    <span>
                      <AppsIcon></AppsIcon>
                    </span>
                    Categories
                  </h4>
                  <div className={classes.dropdown}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cat}
                        label="Category"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Automobiles</MenuItem>
                        <MenuItem value={20}>Spa and Facial</MenuItem>
                        <MenuItem value={30}>Wedding halls</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                {/** Ad section**/}
                <div className={classes.adspace}>
                  <ul>
                    <li>
                      <div className={classes.adbox}>
                        <a href="/">
                          <span>Ad</span>
                          <img src={image1} alt="image space" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                {/** list your business lead form **/}
                <div className={classes.listbizform}>
                  <div className={classes.tit}>
                    <h3>
                      List your business with <span>Yellow pages Kenya</span>
                    </h3>
                  </div>
                  <div className={classes.formouter}>
                    <form>
                      <div className={classes.formgroup}>
                        <input
                          type="text"
                          name="enquiry_name"
                          required="required"
                          className={classes.formControl}
                          placeholder="Enter name*"
                        />
                      </div>
                      <div className={classes.formgroup}>
                        <input
                          type="email"
                          className={classes.formControl}
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
                          className={classes.formControl}
                          name="enquiry_mobile"
                          placeholder="Enter mobile number *"
                          pattern="[7-9]{1}[0-9]{9}"
                          title="Phone number starting with 7-9 and remaining 9 digit with 0-9"
                          required=""
                        />
                      </div>
                      <div className={classes.formgroup}>
                        <textarea
                          className={classes.formControl}
                          rows="6"
                          name="enquiry_message"
                          placeholder="Enter your query or message"
                          style={{ height: "100px" }}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        id="home_slide_enquiry_submit"
                        name="home_slide_enquiry_submit"
                        className={classes.btnlead}
                      >
                        Submit{" "}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={9} sm={9}>
              <div className={classes.allresults}>
                <div className={classes.adsearchresults}>
                  <a href="/">
                    <span className={classes.adtag}>AD</span>
                    <img
                      src={yellowpagesflipbookad}
                      alt="yellow pages flip book"
                    />
                  </a>
                  <div className={classes.singlesearchresult}>
                    <ul>
                      <li>
                        <div className={classes.detailbox}>
                          <div className={classes.businesslogo}>
                            <span className={classes.openstat}>Open</span>
                            <a href="/business-details">
                              <img src={image2} alt="lower budget" />
                            </a>
                          </div>
                          <div className={classes.listcon}>
                            <h4>
                              <a href="business-details">low budgets real estate</a>
                              <VerifiedIcon></VerifiedIcon>{" "}
                            </h4>
                            <div className={classes.listratall}>
                              <b>4.0</b>
                              <label className={classes.rat}>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                              </label>
                              <span>1 Reviews</span>
                            </div>
                            <span className={classes.addr}>
                              <ul>
                                <li>
                                  {" "}
                                  <LocationOnIcon />
                                </li>
                                <li>
                                  No:2, 4th Avenue, Newyork, USA, Near to
                                  Airport
                                </li>
                              </ul>
                            </span>
                            <span className={classes.pho}>
                              <ul>
                                <li>
                                  <PhoneAndroidIcon />
                                </li>
                                <li>
                                  <a href="/">35465436543</a>
                                </li>
                              </ul>
                            </span>
                            <span className={classes.mail}>
                              <ul>
                                <li>
                                  {" "}
                                  <MailOutlineIcon />
                                </li>
                                <li>
                                  <a href="/">thedirectoryfinder@gmail.com</a>
                                </li>
                              </ul>
                            </span>
                            <div className={classes.links}>
                              <a href="#" className={classes.getquote}>
                                Get quote
                              </a>
                              <a href="#" className={classes.viewmore}>
                                view more
                              </a>
                              <a
                                href="Tel:35465436543"
                                className={classes.callnow}
                              >
                                Call Now
                              </a>
                              <a
                                href="https://wa.me/987654621"
                                class="what"
                                target="_blank"
                                className={classes.whatsapp}
                              >
                                <WhatsAppIcon />
                                WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <div className={classes.detailbox}>
                          <div className={classes.businesslogo}>
                            <span className={classes.openstat}>Open</span>
                            <a href="/">
                              <img src={image2} alt="lower budget" />
                            </a>
                          </div>
                          <div className={classes.listcon}>
                            <h4>
                              <a href="#">low budgets real estate</a>
                              <VerifiedIcon></VerifiedIcon>{" "}
                            </h4>
                            <div className={classes.listratall}>
                              <b>4.0</b>
                              <label className={classes.rat}>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                              </label>
                              <span>1 Reviews</span>
                            </div>
                            <span className={classes.addr}>
                              <ul>
                                <li>
                                  {" "}
                                  <LocationOnIcon />
                                </li>
                                <li>
                                  No:2, 4th Avenue, Newyork, USA, Near to
                                  Airport
                                </li>
                              </ul>
                            </span>
                            <span className={classes.pho}>
                              <ul>
                                <li>
                                  <PhoneAndroidIcon />
                                </li>
                                <li>
                                  <a href="/">35465436543</a>
                                </li>
                              </ul>
                            </span>
                            <span className={classes.mail}>
                              <ul>
                                <li>
                                  {" "}
                                  <MailOutlineIcon />
                                </li>
                                <li>
                                  <a href="/">thedirectoryfinder@gmail.com</a>
                                </li>
                              </ul>
                            </span>
                            <div className={classes.links}>
                              <a href="#" className={classes.getquote}>
                                Get quote
                              </a>
                              <a href="#" className={classes.viewmore}>
                                view more
                              </a>
                              <a
                                href="Tel:35465436543"
                                className={classes.callnow}
                              >
                                Call Now
                              </a>
                              <a
                                href="https://wa.me/987654621"
                                class="what"
                                target="_blank"
                                className={classes.whatsapp}
                              >
                                <WhatsAppIcon />
                                WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <div className={classes.detailbox}>
                          <div className={classes.businesslogo}>
                            <span className={classes.openstat}>Open</span>
                            <a href="/">
                              <img src={image2} alt="lower budget" />
                            </a>
                          </div>
                          <div className={classes.listcon}>
                            <h4>
                              <a href="#">low budgets real estate</a>
                              <VerifiedIcon></VerifiedIcon>{" "}
                            </h4>
                            <div className={classes.listratall}>
                              {/* <b>4.0</b> */}
                              {/* <label className={classes.rat}>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                              </label> */}
                              <span>No  Reviews Yet</span>
                            </div>
                            <span className={classes.addr}>
                              <ul>
                                <li>
                                  {" "}
                                  <LocationOnIcon />
                                </li>
                                <li>
                                  No:2, 4th Avenue, Newyork, USA, Near to
                                  Airport
                                </li>
                              </ul>
                            </span>
                            <span className={classes.pho}>
                              <ul>
                                <li>
                                  <PhoneAndroidIcon />
                                </li>
                                <li>
                                  <a href="/">35465436543</a>
                                </li>
                              </ul>
                            </span>
                            <span className={classes.mail}>
                              <ul>
                                <li>
                                  {" "}
                                  <MailOutlineIcon />
                                </li>
                                <li>
                                  <a href="/">thedirectoryfinder@gmail.com</a>
                                </li>
                              </ul>
                            </span>
                            <div className={classes.links}>
                              <a href="#" className={classes.getquote}>
                                Get quote
                              </a>
                              <a href="#" className={classes.viewmore}>
                                view more
                              </a>
                              <a
                                href="Tel:35465436543"
                                className={classes.callnow}
                              >
                                Call Now
                              </a>
                              <a
                                href="https://wa.me/987654621"
                                class="what"
                                target="_blank"
                                className={classes.whatsapp}
                              >
                                <WhatsAppIcon />
                                WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <div className={classes.detailbox}>
                          <div className={classes.businesslogo}>
                            <span className={classes.openstat}>Open</span>
                            <a href="/">
                              <img src={image2} alt="lower budget" />
                            </a>
                          </div>
                          <div className={classes.listcon}>
                            <h4>
                              <a href="#">low budgets real estate</a>
                              <VerifiedIcon></VerifiedIcon>{" "}
                            </h4>
                            <div className={classes.listratall}>
                              {/* <b>4.0</b>
                              <label className={classes.rat}>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                              </label> */}
                              <span>No  Reviews Yet</span>
                            </div>
                            <span className={classes.addr}>
                              <ul>
                                <li>
                                  {" "}
                                  <LocationOnIcon />
                                </li>
                                <li>
                                  No:2, 4th Avenue, Newyork, USA, Near to
                                  Airport
                                </li>
                              </ul>
                            </span>
                            <span className={classes.pho}>
                              <ul>
                                <li>
                                  <PhoneAndroidIcon />
                                </li>
                                <li>
                                  <a href="/">35465436543</a>
                                </li>
                              </ul>
                            </span>
                            <span className={classes.mail}>
                              <ul>
                                <li>
                                  {" "}
                                  <MailOutlineIcon />
                                </li>
                                <li>
                                  <a href="/">thedirectoryfinder@gmail.com</a>
                                </li>
                              </ul>
                            </span>
                            <div className={classes.links}>
                              <a href="#" className={classes.getquote}>
                                Get quote
                              </a>
                              <a href="#" className={classes.viewmore}>
                                view more
                              </a>
                              <a
                                href="Tel:35465436543"
                                className={classes.callnow}
                              >
                                Call Now
                              </a>
                              <a
                                href="https://wa.me/987654621"
                                class="what"
                                target="_blank"
                                className={classes.whatsapp}
                              >
                                <WhatsAppIcon />
                                WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <div className={classes.detailbox}>
                          <div className={classes.businesslogo}>
                            <span className={classes.openstat}>Open</span>
                            <a href="/">
                              <img src={image2} alt="lower budget" />
                            </a>
                          </div>
                          <div className={classes.listcon}>
                            <h4>
                              <a href="#">low budgets real estate</a>
                              <VerifiedIcon></VerifiedIcon>{" "}
                            </h4>
                            <div className={classes.listratall}>
                              {/* <b>4.0</b>
                              <label className={classes.rat}>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                                <StarRateIcon></StarRateIcon>
                              </label> */}
                               <span>No  Reviews Yet</span>
                            </div>
                            <span className={classes.addr}>
                              <ul>
                                <li>
                                  {" "}
                                  <LocationOnIcon />
                                </li>
                                <li>
                                  No:2, 4th Avenue, Newyork, USA, Near to
                                  Airport
                                </li>
                              </ul>
                            </span>
                            <span className={classes.pho}>
                              <ul>
                                <li>
                                  <PhoneAndroidIcon />
                                </li>
                                <li>
                                  <a href="/">35465436543</a>
                                </li>
                              </ul>
                            </span>
                            <span className={classes.mail}>
                              <ul>
                                <li>
                                  {" "}
                                  <MailOutlineIcon />
                                </li>
                                <li>
                                  <a href="/">thedirectoryfinder@gmail.com</a>
                                </li>
                              </ul>
                            </span>
                            <div className={classes.links}>
                              <a href="#" className={classes.getquote}>
                                Get quote
                              </a>
                              <a href="#" className={classes.viewmore}>
                                view more
                              </a>
                              <a
                                href="Tel:35465436543"
                                className={classes.callnow}
                              >
                                Call Now
                              </a>
                              <a
                                href="https://wa.me/987654621"
                                class="what"
                                target="_blank"
                                className={classes.whatsapp}
                              >
                                <WhatsAppIcon />
                                WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SearchResults;
