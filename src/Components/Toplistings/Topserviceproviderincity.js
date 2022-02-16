import React,{useState} from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import VerifiedIcon from "@mui/icons-material/Verified";
import { makeStyles } from "@material-ui/styles";

//custom imports
import Topservice from "./Topservice";
import Businessdetailsdata from "../../utils/Businessdetailsdata";

const useStyle = makeStyles((Yellowpagestheme) => ({
  topserviceprovidercontainer: {
    marginTop: "4em",
    marginBottom: "4em",
    height: "auto",
  },
  topserviceprovidertitle: {
    textAlign: "center",
    "& h2": {
      fontSize: "32px",
      fontWeight: "300",
      marginBottom: 0,
      "& span": {
        fontWeight: "600",
      },
    },
    "& p": {
      fontSize: "15px",
      fontWeight: "400",
      display: "block",
      margin: "0px",
    },
  },
  topservicelist: {
    marginTop: "30px !important",
   
  },
}));

const Topserviceproviderinyourcity = () => {


  const classes = useStyle();
  return (
    <React.Fragment>
      <div className={classes.topserviceprovidercontainer}>
        <Grid container className={classes.topserviceprovidertitle}>
          <Grid item xs={12} sm={12} md={12}>
            <h2>
              <span>Top Listings In </span> Your City
            </h2>
            <p>
              lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
              fringilla.
            </p>
          </Grid>
        </Grid>
        <Container>
          <Grid container className={classes.topservicelist} spacing={2}>
      
            {/**Filter an Array of Objects by Value category */}
           {
           Businessdetailsdata.filter(topcat => topcat.category === "Hotels").slice(0,12).map(filteredcat => 
            <Topservice
            key={filteredcat.id}
            bizid={filteredcat.id}
            bizcategory={filteredcat.category}
            bizname={filteredcat.name}
            bizlogo={filteredcat.logo.url}
            bizaddress={filteredcat.Address}
            isverified={filteredcat.isverified}
            />
            )
           }
          </Grid>
        </Container>
        
      </div>
    </React.Fragment>
  );
};

export default Topserviceproviderinyourcity;


