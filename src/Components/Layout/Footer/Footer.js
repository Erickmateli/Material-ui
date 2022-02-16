import React from "react";

//material ui imports
import Grid from "@mui/material/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";

//custom imports

import { Typography } from "@material-ui/core";
import idea from "../../../Assets/idea.png";
import facebookicon from "../../../Assets/facebook.png";
import twittericon from "../../../Assets/twitter.png";
import linkedinicon from "../../../Assets/linkedin.png";
import appstoreicon from "../../../Assets/appstore.png";
import playstoreicon from "../../../Assets/playstore.png";
import Topcategory from "./Topcategory";
import topcats from "./topcategorydata";
import toptrending from "./toptrendingdata";

//footer styling
export const useStyle = makeStyles((Yellowpagestheme) => ({
  dotteddivider: {
    borderTop: "1px dashed #5d5b5b",
    padding: "25px 0px 5px 0px",
    marginTop: "20px",
  },

  Footercontainer: {
    backgroundColor: "#0a2236",
    height: "auto"
  },
  directoryaddbizad: {
    background: Yellowpagestheme.pallete.common.Yellow,
    margin: "-60px auto !important",
    padding: "50px",
    borderRadius: "5px",
    boxShadow: "0px 4px 17px -8px rgb(0 0 0 / 86%)",
  },
  customercaremailandnumber: {
    marginTop: "86px",
    textAlign: "center",
  },
  supportnumber: {
    textAlign: "right",
    '& span': {
      color: "#fff",
      fontWeight: "300",
      fontSize: "20px",
      fontFamily: 'Roboto'
  },
  '& a': {
    color: "#fff",
    fontWeight: "300",
    fontFamily: 'Roboto',
    fontSize: "20px",
    textDecoration: "none",
    marginleft: "10px",
},
  },
  supportemail:{
    textAlign: "left",
    paddingLeft: "15px",
    '& span': {
      color: "#fff",
      fontWeight: "300",
      fontSize: "20px",
      fontFamily: 'Roboto'
  },
  '& a': {
    color: "#fff",
    fontWeight: "300",
    fontFamily: 'Roboto',
    fontSize: "20px",
    textDecoration: "none",
    marginleft: "10px",
},
  },

  footerlinkcontainer: {
    "& h6": {
      fontSize: "13px",
      fontFamily: "Roboto",
      color: " #fff",
      fontWeight: "500",
      textTransform: "uppercase",
      letterSpacing: "1px",
      float: "left",
    },
    "& ul": {
      listStyle: "none",
      padding: "0",
      marginLeft: "15px",
      "& li": {
        marginBottom: "8px",
        fontWeight: "300",
        width: "50%",
        float: "left",
        "& a": {
          color: "#7f7f7f",
          fontSize: "16px",
          fontFamily: "Roboto",
          textDecoration: "none",
        },
      },
    },
  },
  getintouch: {
    marginTop: "50px !important",
    color: "#7f7f7f",
    fontSize: "16px",
    fontFamily: "Roboto",
    fontWeight: 500,
    textDecoration: "none",
    "& div": {
      marginBottom: "10px",
    },
    "& span": {
      fontWeight: 800,
      marginRight: "10px",
    },
    "& a": {
      color: "#7f7f7f",
      fontSize: "16px",
      fontFamily: "Roboto",
      fontWeight: 500,
      textDecoration: "none",
    },
  },
  downloadapps: {
    marginTop: "50px !important",
    "& ul": {
      margin: "0",
      "& li": {
        display: "inline",
        "& img": {
          width: "150px",
        },
      },
    },
  },
  socialmedia: {
    marginTop: "50px !important",
    "& ul": {
      margin: "0",
      "& li": {
        display: "inline",
        marginLeft: "10px",
      },
    },
  },
  dotteddividercountries: {
    borderTop: "1px dashed #5d5b5b",
    padding: "10px 0px 5px 0px",
    marginTop: "20px",
  },
  countriescontainer: {
    textAlign: "center",
    "& ul": {
      "& li": {
        display: "inline",
        marginLeft: "10px",
        "& a": {
          color: "#7f7f7f",
          fontSize: "16px",
          fontFamily: "Roboto",
          fontWeight: 500,
          textDecoration: "none",
        },
      },
    },
  },
  copyrightfooter: {
    backgroundColor: "#040404",
    textAlign: "center",
    padding: "10px",
    "& p": {
      color: "#7f7f7f",
      fontSize: "16px",
      fontFamily: "Roboto",
      fontWeight: 500,
    },
  },
}));



const Footer = () => {
  const classes = useStyle();
  return (
    <footer className={classes.Footercontainer}>
      <Container>
        <Grid container>
          <Grid item xs={10} md={10} className={classes.directoryaddbizad}>
            <Grid container spacing={2}>
              <Grid item>
                <img src={idea} alt="add business" />
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="h4">
                      #1 Business Directory and Service Provider
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.btn}>
                    Add My Business
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/** support number and email container**/}
          <Grid container className={classes.customercaremailandnumber}>
            <Grid item xs={12} sm={6} md={6} className={classes.supportnumber}>
              <span>Free Support Call:</span>
              <a href="/">+254 020 7800 701</a>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className={classes.supportemail}>
              <span>Free support Email:</span>
              <a href="/">info@yellowpageskenya.com</a>
            </Grid>
          </Grid>
          {/** support number and email container**/}
        </Grid>
        {/**dotted divider**/}
        <div className={classes.dotteddivider}></div>
        {/** start of link footer grid**/}
        <Grid
          justifyContent="center"
          container
          className={classes.footerlinkcontainer}
        >
          <Grid item xs={12} sm={4} md={4} className={classes.topcategory}>
            <Typography variant="h6">TOP CATEGORY</Typography>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <ul>
                    {topcats.map((topcat) => (
                      <Topcategory key={topcat.id} category={topcat.cat} />
                    ))}
                
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4} className={classes.trendingcategory}>
            <Typography variant="h6">TRENDING CATEGORY</Typography>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <ul>
                      {
                        toptrending.map((trending) => <Topcategory key={trending.id} category={trending.cat}/>)
                      }
                </ul>
              </Grid>
           
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4} className={classes.helpsupport}>
            <Typography variant="h6">HELP AND SUPPORT</Typography>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <ul>
                  <li>
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Feedback</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
               
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4} className={classes.getintouch}>
            <Typography variant="h6">Get In Touch</Typography>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <div>
                  <span>Address: </span> Mitsumi Business Park 8th floor
                </div>
                <div>
                  <span>Phone: </span> <a href="#">+254 020 7800 701</a>
                </div>
                <div>
                  <span>Email: </span> <a href="#">info@yellowpageskenya.com</a>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4} className={classes.downloadapps}>
            <Typography variant="h6">DOWNLOAD OUR APPS</Typography>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <ul>
                  <li>
                    <a href="/">
                      <img
                        src={playstoreicon}
                        alt="yellow pages app on playstore"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src={appstoreicon}
                        alt="yellow pages app on app store"
                      />
                    </a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4} className={classes.socialmedia}>
            <Typography variant="h6">SOCIAL MEDIA</Typography>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <ul>
                  <li>
                    <a href="/">
                      <img src={facebookicon} alt="yellowpagesfacebook" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={twittericon} alt="yellowpagestwitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={linkedinicon} alt="yellowpageslinkedin" />
                    </a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/** end of link footer grid**/}
        {/**dotted divider**/}
        <div className={classes.dotteddividercountries}></div>

        {/**countries**/}
        {/**end of countries**/}
        <Grid container className={classes.countriescontainer}>
          <Grid item xs={12} sm={12} md={12}>
            <ul>
              <li>
                <a href="/">Kenya</a>
              </li>
              <li>
                <a href="/">Tanzania</a>
              </li>
              <li>
                <a href="/">Cape Verde</a>
              </li>
              <li>
                <a href="/">Mozambique</a>
              </li>
              <li>
                <a href="/">Sao Tome</a>
              </li>
              <li>
                <a href="/">East Timor</a>
              </li>
              <li>
                <a href="/">Angola</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.copyrightfooter}>
        <p>
          All Rights Reserved, © 2022 Postel the Info Co. and Walking Fingers
          are registered trademarks of Kenya Postel Directories Ltd in Kenya.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
