import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";


const useStyle = makeStyles((Yellowpagestheme) => ({
  topservicebody:{
    position: "relative",
    overflow: "hidden",
    background: "#ffffff",
    padding: "15px",
    marginBottom: "5px",
    width: "100%",
    boxShadow: "0px 7px 20px -5px rgb(150 150 150 / 29%)",
    borderRadius: "0px 0px 10px 10px",
    "& ul":{
      padding: "0",
      "& li":{
        listStyleType: "none",
        borderBottom: "1px solid #efefef",
        position: "relative",
        overflow: "hidden",
        padding: "10px 0px",
        transition: "all 0.5s ease",
        
      }
    },
  },
   topservicelogo: {
    float: "left",
    "& img":{
     width: "36px",
     height: "36px",
     borderRadius: "50%",
     objectFit: "cover",
    }
  },
  topservicecontent:{
    float: "left",
    width: "80%",
    padding: "0px 15px",
    "& h5":{
      marginTop: "0px",
      marginBottom: "0px",
      color: "#000000",
      fontSize: "13px",
      fontWeight: "500",
      webkitTransition: "all 0.5s ease",
      mozTransition:" all 0.5s ease",
      oTransition:" all 0.5s ease",
      transition: "all 0.5s ease",
      textOverflow:" ellipsis",
      whiteSpace: "pre",
      overflow: "hidden",
      position: "relative",
    },
    "& span":{
     fontSize: "11px",
     color: "#525252",
     lineHeight: "19px",
     paddingTop: "2px",
     textOverflow: "ellipsis",
    whiteSpace: "pre",
    overflow: "hidden",
    float: "left",
    width: "100%",
   fontWeight: "400",
    },
  },
  topserviceverified:{
    float: "left",
    "& span":{
      position: "absolute",
      padding: "0px 4px",
      borderRadius: "2px",
      fontSize: "12px",
      zIndex: "9",
      lineHeight: "20px",
      fontWeight: "600",
      textAlign: "center",
      textShadow: "0px -1px 0 rgb(0 0 0 / 28%)",
      right: "0px",
    },
    "& svg":{
      fill: "green"
    },
  },
  
}));

const Topservice = ({
  bizcategory,
  bizid,
  bizlogo,
  bizname,
  bizaddress,
  isverified,
}) => {

  const classes = useStyle();
  return (
    <React.Fragment>
      <Grid item xs={12} sm={4} md={4} >
         <div className={classes.topservicebody}>
            <ul>
              <li>
                <a
                  href={
                    "/business-details/" + bizcategory + "/" + bizid + "/"+ bizname
                  }
                >
                  <div className={classes.topservicelogo}>
                    <img src={bizlogo} alt={bizname} />
                  </div>
                  <div className={classes.topservicecontent}>
                    <h5>{bizname}</h5>
                    <span>{bizaddress}</span>
                  </div>
                  <div className={classes.topserviceverified}>
                    <span>{isverified ? <VerifiedIcon /> : null}</span>
                  </div>
                </a>
              </li>
            </ul>
            </div>
        
      </Grid>
    </React.Fragment>
  );
};

export default Topservice;
