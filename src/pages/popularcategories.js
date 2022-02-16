import React from "react"

//material ui imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//custom imports
import Popularservice from "../Components/Topservices/Popularservice";
import Popularservicedata from "../Components/Topservices/popularservicedata";
import { makeStyles } from "@material-ui/styles";

//popular service near you
const useStyle = makeStyles((Yellowpagestheme) => ({
    Popularservicescontainerpage: {
      marginTop: "3em",
      marginBottom: "10em",
      height: "auto",
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
  }));

const Popularcategories = () =>{
    const classes = useStyle();
    return(
        <>
        <Container className={classes.Popularservicescontainerpage}>
        <Grid
         container
         className={classes.popularservistlistcontainer}
         spacing={2}
        >
         {Popularservicedata.map((service) => (
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
        </>
    )
}

export default Popularcategories;