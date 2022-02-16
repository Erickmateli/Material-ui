import React from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//component import
import Businessphotogallary from "../Components/Businessphotogallary";
import Bizoffers from "../Components/Bizoffers";

//material icons
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CollectionsIcon from "@mui/icons-material/Collections";
import StyleIcon from "@mui/icons-material/Style";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarRateIcon from "@mui/icons-material/StarRate";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

//smooth scroll imports
import { Link, animateScroll as scroll } from "react-scroll";

//custom imports
import { useStyle } from "../Components/Mainstyles";
import listingbanner from "../Assets/listingbanner.jpg";
import miaskin from "../Assets/miaskin.jpg";
import yellowpagesflipbookad from "../Assets/yellow-pages-flip-book-min.gif";

const Businessdetails = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <section className={classes.topnavigation}>
        <Container>
          <Grid container>
            <Grid item sm={12} md={12} xs={12}>
              <ul>
                <Link
                  activeClass="active"
                  to="aboutbiz"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <li className={classes.active}>
                    <span>
                      <PersonIcon />
                      About
                    </span>
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <li>
                    <span>
                      <BusinessCenterIcon />
                      Services
                    </span>
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="gallary"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <li>
                    <span href="#">
                      <CollectionsIcon />
                      Gallery
                    </span>
                  </li>
                </Link>

                <li>
                  <span href="#">
                    <StyleIcon />
                    Offers
                  </span>
                </li>
                <li>
                  <span href="#">
                    <StarHalfIcon />
                    Write Review
                  </span>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.listbanner}>
        <img src={listingbanner} alt="banner image" />
      </section>
      <section className={classes.listaddressbox}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={2} md={2}>
              <div className={classes.bizlogowrapper}>
                <img src={miaskin} alt="biz logo" />
                <span className={classes.stat}>
                  <VerifiedIcon />
                </span>
              </div>
            </Grid>
            <Grid item xs={12} sm={9} md={9}>
              <div className={classes.bizaddresswrapper}>
                <h3>Mia Skin Care</h3>

                <p>
                  <b>Address:</b> No:2, 4th Avenue, Newyork, USA, Near to
                  Airport
                </p>
                <div className={classes.listnumber}>
                  <ul>
                    <a href="tel:876587675">
                      <li>
                        <PhoneAndroidIcon />
                      </li>
                      <li className={classes.icphp}>876587675</li>
                    </a>
                    <a href="#">
                      <li>
                        {" "}
                        <MailOutlineIcon />
                      </li>
                      <li className={classes.icmai}>johnitsmes@gmail.com</li>
                    </a>
                    <a target="_blank" href="#">
                      <li>
                        <LanguageIcon />
                      </li>
                      <li className={classes.icweb}>www.miaskincare.com</li>
                    </a>
                  </ul>
                </div>
                <div className={classes.listratall}>
                  <b>3.0</b>
                  <label className={classes.rat}>
                    <StarRateIcon></StarRateIcon>
                    <StarRateIcon></StarRateIcon>
                    <StarRateIcon></StarRateIcon>
                    <StarRateIcon></StarRateIcon>
                  </label>
                  <span>1Reviews</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.calltoactionbtnbiz}>
        <ul>
          <li>
            <a href="/">
              <span>
                <PhoneAndroidIcon />
              </span>
              <span>Call Now</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <WhatsAppIcon />
              </span>
              whatsapp
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <ChatBubbleOutlineIcon />
              </span>
              Get Quote
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                <ShareIcon />
              </span>
              Share
            </a>
          </li>
        </ul>
      </section>
      <section className={classes.bizinfo}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} sm={8}>
              <section id="aboutbiz">
                <div className={classes.bizinfowrapper}>
                  <div className={classes.bizinfotit}>
                    <h3>
                      {" "}
                      <span>About</span> Mia Skin Care
                    </h3>
                  </div>
                  <div className={classes.bizinfocontent}>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of "de Finibus
                      Bonorum et Malorum" (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                      comes from a line in section 1.10.32.
                    </p>
                  </div>
                </div>
              </section>
              <div className={classes.bizinfowrapper}>
                <div className={classes.bizinfotit}>
                  <h3>
                    {" "}
                    <span>Address</span> Mia Skin Care
                  </h3>
                </div>
                <div className={classes.bizinfocontent}>
                  <p>
                    Africa Re Centre, 5th Flr, Hospital Rd, Nairobi P.O.Box:
                    40193 - 00100 Nairobi GPO
                  </p>
                </div>
              </div>

              <div className={classes.bizinfowrapper}>
                <div className={classes.bizinfotit}>
                  <h3>
                    {" "}
                    <span>Brands</span> Mia Skin Care
                  </h3>
                </div>
                <div className={classes.bizinfocontent}>
                  <p>Tony Lamore</p>
                </div>
              </div>
              <div className={classes.bizinfowrapper}>
                <div className={classes.bizinfotit}>
                  <h3>
                    {" "}
                    <span>Activity</span> Mia Skin Care
                  </h3>
                </div>
                <div className={classes.bizinfocontent}>
                  <p>Facial makeup, Beuty shop</p>
                </div>
              </div>

              <div className={classes.bizinfowrapper}>
                <div className={classes.bizinfotit}>
                  <h3>
                    {" "}
                    <span>Payment Methods</span> Mia Skin Care
                  </h3>
                </div>
                <div className={classes.bizinfocontent}>
                  <p>Cash, Cheque, EFT Transfer, Mpesa</p>
                </div>
              </div>
              <section id="services">
                <div className={classes.bizinfowrapper}>
                  <div className={classes.bizinfotit}>
                    <h3>
                      {" "}
                      <span>Products</span> OFFERED
                    </h3>
                  </div>
                  <div className={classes.bizinfocontent}>
                    <p>Facial</p>
                    <p>SPA</p>
                    <p>Massage</p>
                    <p>Body Massage</p>
                  </div>
                </div>
              </section>
              <section id="gallary">
                <div className={classes.bizinfowrapper}>
                  <div className={classes.bizinfotit}>
                    <h3>
                      {" "}
                      <span>PHOTO</span>GALLERY
                    </h3>
                  </div>
                  <div className={classes.bizinfocontent}>
                    <Businessphotogallary />
                  </div>
                </div>
              </section>
              {/* <div className={classes.bizinfowrapper}>
                <div className={classes.bizinfotit}>
                  <h3>
                    {" "}
                    <span>SPECIAL</span> OFFERS
                  </h3>
                </div>
                <div className={classes.bizinfocontent}>
                  <Bizoffers/>
                </div>
              </div> */}
            </Grid>
            <Grid item xs={12} md={4} sm={4}>
              <div className={classes.getbizquote}>
                <div className={classes.bizquoteinner}>
                  <h3>COMPANY INFO</h3>
                  <div className={classes.companyinfo}>
                    <ul>
                      <li>
                        Open Time
                        <span>8:00 AM</span>
                      </li>
                      <li>
                        Close Time
                        <span>5:00 PM</span>
                      </li>
                      <li>
                        Category
                        <span>
                          <a href="/">Beauty</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={classes.getbizquote}>
                <div className={classes.bizquoteinner}>
                  <h3>GET QUOTE</h3>
                  <form
                    method="post"
                    name="biz_detail_enquiry_form"
                    id="detail_enquiry_form"
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
                        type="text"
                        name="enquiry_mobile"
                        required="required"
                        className={classes.formcontrol}
                        placeholder="Enter mobile number *"
                        pattern="[7-9]{1}[0-9]{9}"
                        title="Phone number"
                        required=""
                      />
                    </div>
                    <div className={classes.formgroup}>
                      <input
                        type="email"
                        name="enquiry_email"
                        required="required"
                        className={classes.formcontrol}
                        placeholder="Enter your email *"
                        pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                        title="email"
                        required=""
                      />
                    </div>
                    <div className={classes.formgroup}>
                      <textarea
                        className={classes.formcontrol}
                        rows="3"
                        name="enquiry_message"
                        placeholder="Enter your query or message"
                      ></textarea>
                    </div>
                    <button
                      disabled="disabled"
                      type="submit"
                      id="detail_enquiry_submit"
                      name="enquiry_submit"
                      className={classes.btnbizenquiry}
                    >
                      Login to send enquiry
                    </button>
                  </form>
                </div>
              </div>
              <div className={classes.getbizquote}>
                <div className={classes.bizquoteinner}>
                  <h3>OUR LOCATION</h3>
                  <div className={classes.map}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.1513063787!2d36.8109996!3d-1.3022462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xad278f1678dd2163!2sAfrica%20Re%20Centre!5e0!3m2!1sen!2ske!4v1643794209288!5m2!1sen!2ske"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className={classes.getbizquote}>
                <div className={classes.bizquoteinner}>
                  <h3>Are you the owner of this business?</h3>
                  <div className={classes.companyinfo}>
                    <p>
                      Keep your business details up to date by adding/updating
                      contact information, website link, working hours, etc.
                    </p>
                    <button
                      disabled="disabled"
                      type="submit"
                      id="detail_suggest_edit_submit"
                      name="enquiry_submit"
                      className={classes.btnbizenquiry}
                    >
                      Suggist Edit
                    </button>
                  </div>
                </div>
              </div>
              <div className={classes.listingad}>
                <a href="/">
                  <span>Ad</span>
                  <img src={yellowpagesflipbookad} alt="flip book ad" />
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Businessdetails;
