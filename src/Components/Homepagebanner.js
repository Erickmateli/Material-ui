import React from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//custom imports
import { useStyle } from "./Mainstyles";
import Searchbar from "./Searchbar";
import Advertboxes from "./Advertboxes";

const Homepagebanner = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div className={classes.defaulthomebanner}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} className={classes.herotext}>
            <h1>Connect with the right Service Experts</h1>
            <p>Restaurants, cafe's, and bars in Kenya</p>
          </Grid>
        </Grid>
        <Grid container className={classes.Searchbarcontainer}>
          <Grid item xs={6} sm={6} md={6} className={classes.Searchbar}>
            <Searchbar></Searchbar>
          </Grid>
        </Grid>
        <Container>
        <Advertboxes></Advertboxes>
      </Container>
      </div>
     
    </React.Fragment>
  );
};

export default Homepagebanner;
