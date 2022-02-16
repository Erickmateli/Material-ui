import React from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

//custom  imports
import { useStyle } from "./Mainstyles";
import Millionbusiness from "../Assets/millionbusiness.png";
import Experts from "../Assets/experts.png";
import Findnextjob from "../Assets/findnextjob.png";

const Advertboxes = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <Grid container spacing={2} className={classes.Advertboxescontainer}>
        <Grid item xs={12} sm={4} md={4}>
          <div className={classes.Advertbox}>
            <img src={Millionbusiness} alt="24 Million BusinessF" />
            <h2>24 Million Business in kenya</h2>
            <p>
              Choose from a collection of handpicked luxury villas {"&"}{" "}
              apartments
            </p>
            <Button variant="contained">Explore Now</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <div className={classes.Advertbox}>
            <img src={Experts} alt="24 Million BusinessF" />
            <h2>500+ Service Experts</h2>
            <p>
              Are you looking for the best Service Expert? We make it easy to
              hire the right professional
            </p>
            <Button variant="contained">Book Expert Now</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <div className={classes.Advertbox}>
            <img src={Findnextjob} alt="24 Million BusinessF" />
            <h2>Find Your Next Job Now</h2>
            <p>
              Search latest job openings online including IT, Sales, Banking,
              Fresher, Walk-ins, Part-time {"&"} more
            </p>
            <Button variant="contained">Find you Job</Button>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Advertboxes;
