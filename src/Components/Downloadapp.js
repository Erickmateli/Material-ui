import React from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

//custom imports
import { useStyle } from "./Mainstyles";
import takeypwithyou from "../Assets/take-yp-with-you-thumb.webp"
import gstore from '../Assets/gstore.png';
import astore from '../Assets/astore.png';
import citybg from '../Assets/city-bg.png';
const Downloadapp = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div className={classes.downloadappcontainer}>
      <div className={classes.downloadappcontainerinner}>
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              container
              xs={12}
              sm={6}
              md={6}
            className={classes.mobileapp}
            >
            <img src={takeypwithyou} alt="Take yellow pages with you"/>
            </Grid>
            <Grid item  xs={12} sm={6} md={6} >
            <div className={classes.mobileappcontent}>
                <h2>Looking for the Best Service Provider? and Business Listing Get the App!</h2>
                      <ul>
                        <li><span><ChevronRightIcon/></span>Find nearby listings</li>
                        <li><span><ChevronRightIcon/></span>Easy service enquiry</li>
                        <li><span><ChevronRightIcon/></span>Listing reviews and ratings</li>
                         <li><span><ChevronRightIcon/></span>Manage your listing, enquiry and reviews</li>
                     </ul>
                    <span>We'll send you a link, to you below provided email id &amp; open it on your smart phone to download the app</span>
                    <a href="#"><img src={gstore} alt="google play store"/> </a>
                   <a href="#"><img src={astore} alt="apple app store" /> </a>
            </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <img src={citybg} alt="city bg"/>
      </div>
    </React.Fragment>
  );
};
export default Downloadapp;
