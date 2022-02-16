import React from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

//react router dom imports
import { Link } from "react-router-dom";

//custom imports
import Popularservice from "./Popularservice";
import Popularservicedata from "./popularservicedata";

//popular service near you
const useStyle = makeStyles((Yellowpagestheme) => ({
  Popularservicescontainer: {
    marginTop: "12em",
    marginBottom: "5em",
    height: "auto",
  },
  populartitle: {
    textAlign: "center",
    margin: "30px 0 30px 0",
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
  popularservistlistcontainer: {
    marginTop: "20px",

    "& a": {
      textDecoration: "none",
      display: "inline-block",
      position: "relative",
      overflow: "hidden",
      /* height: 180px; */
      boxSizing: "border-box",
      borderRadius: "0px",
      backgroundColor: " #fff",
      backgroundClip: "border-box",
      boxShadow: "0px 2px 8px rgb(0 0 0 / 15%)",
      margin: "0px 10px 5px",
      textAlign: "center",
      width: "100%",
      "& img": {
        width: "100%",
        transition: "all .5s ease",
        height: "150px",
        objectFit: "cover",
      },
      "& ul": {
        display: "inline",
        listStyle: "none",
        "& li": {
          "&:nth-child(1)": {
            display: "inline",
            float: "left",
            padding: "15px",
            fontWeight: "600",
            textAlign: "left",
            color: "#273440",
            fontSize: "14px",
            margin: "0px",
          },
          "&:nth-child(2)": {
            color: "#a7a7a7",
            fontSize: "11.5px",
            float: "right",
            fontWeight: "600",
            paddingTop: "15px",
            marginRight: "22px",
          },
          "& span": {
            color: "#a7a7a7",
            fontSize: "11.5px",
            float: "right",
            paddingTop: "3px",
          },
        },
      },
    },
  },
  popularbutton: {
    textAlign: "center",
    margin: "20px 0",
  },
  btn: {
    color: "#fff",
    backgroundColor: Yellowpagestheme.pallete.common.Black,
    fontFamily: 'Roboto',
    fontSize: "1rem",
    fontWeight: 100,
    marginRight: "50px",
    marginLeft: "25px",
    height: "40px",
    marginTop: "6px",
    textTransform: "capitalize",
    "&:hover": {
        backgroundColor: "#000"
    }
  },
}));

const Popularservices = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div className={classes.Popularservicescontainer}>
        <Grid container className={classes.populartitle}>
          <Grid item xs={12} sm={12} md={12}>
            <h2>
              <span>Popular Services</span> near you
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
            className={classes.popularservistlistcontainer}
            spacing={2}
          >
            {/** display eight resultsmax is 8 **/}

            {Popularservicedata.slice(0,8).map((service) => (
              <Popularservice
                key={service.id}
                popularcategorytitleclass={service.popularcategorytitleclass}
                popularcategorycountclass={service.popularcategorycountclass}
                popularcategorytitle={service.title}
                popularcategoryimage={service.image.url}
                popularcategoryhits={service.hits}
              />
            ))}
          </Grid>
        </Container>
        {/** display button if the results are to many max is 8 **/}
        <Grid container className={classes.popularbutton}>
          <Grid item xs={12} sm={12} md={12}>
         
              <Button 
              variant="contained" 
              className={classes.btn}
              component={Link}
              to="/popular-categories"
              >
                View All Categories
              </Button>
        
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Popularservices;
