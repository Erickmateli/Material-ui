import React from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//custom imports
import { useStyle } from "./Mainstyles";
import hotel from "../Assets/hotel.jpg";
import education from "../Assets/education.jpeg";
import hospital from "../Assets/hospital.jpeg";
import technology from "../Assets/technology.jpg";
import realestate from "../Assets/realestate.jpeg";

const Explorecitycategory = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div className={classes.Explorecitycategorycontainer}>
        <Grid container className={classes.explorertitle}>
          <Grid item xs={12} sm={12} md={12}>
            <h2>
              <span>Explore City </span> Category
            </h2>
            <p>
              lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
              fringilla.
            </p>
          </Grid>
        </Grid>
        <Container>
          <Grid
            container
            className={classes.Explorecitycategorylist}
            spacing={2}
          >
            <Grid item xs={12} sm={6} md={6}>
              <div className={classes.Explorecitycategorybig}>
                <a href="/">
                  <div className={classes.hotelcity}>
                    <img src={hotel} alt="hotels" />
                  </div>
                  <div className={classes.exploredetails}>
                    <h4>Hotels And Resorts</h4>
                    <p>05 Listings</p>
                  </div>
                </a>
              </div>
            </Grid>
            <Grid container item xs={12} sm={6} md={6}>
              <Grid item container spacing={2} >
                <Grid item xs={6} sm={6} md={6}>
                  <div className={classes.Explorecitycategorybig}>
                    <a href="/">
                      <div className={classes.exploresmall}>
                        <img src={education} alt="hotels" />
                      </div>
                      <div className={classes.exploredetailssmall}>
                        <h4>Education</h4>
                        <p>05 Listings</p>
                      </div>
                    </a>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <div className={classes.Explorecitycategorybig}>
                    <a href="/">
                      <div className={classes.exploresmall}>
                        <img src={hospital} alt="hotels" />
                      </div>
                      <div className={classes.exploredetailssmall}>
                        <h4>Hospitals</h4>
                        <p>05 Listings</p>
                      </div>
                    </a>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <div className={classes.Explorecitycategorybig}>
                    <a href="/">
                      <div className={classes.exploresmall}>
                        <img src={technology} alt="hotels" />
                      </div>
                      <div className={classes.exploredetailssmall}>
                        <h4>Technology</h4>
                        <p>05 Listings</p>
                      </div>
                    </a>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <div className={classes.Explorecitycategorybig}>
                    <a href="/">
                      <div className={classes.exploresmall}>
                        <img src={realestate} alt="hotels" />
                      </div>
                      <div className={classes.exploredetailssmall}>
                        <h4>Real Estate</h4>
                        <p>05 Listings</p>
                      </div>
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Explorecitycategory;
