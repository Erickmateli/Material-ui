import React from "react";
import {Link} from "react-router-dom"

import VerifiedIcon from "@mui/icons-material/Verified";
import AppsIcon from "@mui/icons-material/Apps";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import { makeStyles } from "@material-ui/styles";

//search result styling

const useStyle = makeStyles((Yellowpagestheme) => ({
  detailbox: {
    margin: "0px 15px 15px 15px",
    border: "6px solid #fff",
    float: "left",
    transition: " all 0.5s ease",
    boxShadow: "0px 2px 8px rgb(0 0 0 / 5%)",
    background: "#fff",
  },
  businesslogo: {
    float: "left",
    width: "25%",
    position: "relative",
  },
  openstat: {
    fontSize: "11px !important",
    fontWeight: "500",
    borderRadius: "5px",
    padding: "1px 5px 2px 5px !important",
    position: "absolute",
    zIndex: "3",
    top: "5px",
    left: "5px",
    background: "green",
    color: "#fff",
  },
  clossedstat:{
    fontSize: "11px !important",
    fontWeight: "500",
    borderRadius: "5px",
    padding: "1px 5px 2px 5px !important",
    position: "absolute",
    zIndex: "3",
    top: "5px",
    left: "5px",
    background: "black",
    color: "#fff",
  },
  listcon: {
    overflow: "initial",
    float: "left",
    width: "75%",
    padding: "15px 25px 12px 25px",
    position: "relative",
    "& h4": {
      paddingBottom: "10px",
      margin: "0px",
      lineHeight: "0px",
      overflow: "hidden",
      whiteSpace: "pre",
      textOverflow: "ellipsis",
      textTransform: "capitalize",
      "& a": {
        color: "#212529",
        float: "left",
        lineHeight: "28px",
        fontSize: "18px",
        fontWeight: 600,
        textDecoration: "none",
      },
      "& svg": {
        marginLeft: "5px",
        width: "15px",
        marginTop: "3px",
        color: "green",
      },
    },
  },
  listratall: {
    position: "absolute",
    padding: "12px 12px 10px 12px !important",
    width: "100px",
    right: "10px",
    top: "10px",
    background: "#fff6e8",
    borderRadius: "10px",
    textAlign: "center",
    "& b": {
      fontSize: "15px",
      padding: "4px 6px",
      marginBottom: "10px",
      color: "#fff",
      background: "#ffa31d",
    },
    "& span": {
      fontSize: "12px",
    },
  },
  rat: {
    width: "75px",
    position: "relative",
    padding: "0px",
    right: "initial",
    top: "initial",
    height: "15px",
    margin: "0 auto",
    display: "table",
    lineHeight: "15px",
    "& svg": {
      fontSize: "15px",
      width: "12px",
      margin: "0px 1px",
      lineHeight: "15px",
      color: "#ff9800",
      marginTop: "10px",
    },
  },
  addr: {
    width: "100%",
    color: "#232323",
    float: "left",
    fontSize: "13px",
    "& svg": {
      color: "#9d9a98",
      fontWeight: "500",
    },
    "& ul": {
      "& li": {
        float: "left",
        padding: "0",
        marginRight: "5px",
      },
    },
  },
  pho: {
    width: "35%",
    float: "left",
    marginTop: "20px",
    "& svg": {
      color: "#9d9a98",
      fontWeight: "500",
    },
    "& ul": {
      "& li": {
        float: "left",
        padding: "0",
        marginRight: "5px",
        "& a": {
          color: "#232323",
          textDecoration: "none",
          fontSize: "13px",
        },
      },
    },
  },
  mail: {
    width: "65%",
    float: "left",
    marginTop: "20px",
    "& svg": {
      color: "#9d9a98",
      fontWeight: "500",
    },
    "& ul": {
      "& li": {
        float: "left",
        padding: "0",
        marginRight: "5px",
        "& a": {
          color: "#232323",
          textDecoration: "none",
          fontSize: "13px",
        },
      },
    },
  },
  links: {
    width: "100%",
    float: "left",
    padding: "0px",
    border: "0px",
    paddingTop: "19px",
  },

  getquote: {
    background: "#f44336",
    color: "#fff",
    border: "1px solid #f44336",
    float: "left",
    textDecoration: "none",
    fontSize: "11.5px",
    margin: "0px 3px",
    fontWeight: "600",
    padding: "5px 18px",
    borderRadius: "2px",
    width: "auto",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  viewmore: {
    float: "left",
    fontSize: "11.5px",
    margin: "0px 3px",
    fontWeight: "600",
    border: "1px solid #827e7e",
    textDecoration: "none",
    color: "#3e4c56",
    padding: "5px 18px",
    borderRadius: "2px",
    width: "auto",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  callnow: {
    float: "left",
    fontSize: "11.5px",
    margin: "0px 3px",
    fontWeight: "600",
    border: "1px solid #827e7e",
    textDecoration: "none",
    color: "#3e4c56",
    padding: "5px 18px",
    borderRadius: "2px",
    width: "auto",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  whatsapp: {
    float: "left",
    fontSize: "11.5px",
    margin: "0px 3px",
    fontWeight: "600",
    border: "1px solid #827e7e",
    textDecoration: "none",
    color: "#3e4c56",
    padding: "5px 18px",
    borderRadius: "2px",
    width: "auto",
    cursor: "pointer",
    fontFamily: "inherit",
    "& svg": {
      float: "left",
      fontSize: "16px",
      marginRight: "5px",
      color: "green",
    },
  },
}));

const Searchresult = ({
  bizcategory,
  bizid,
  bizlogo,
  bizname,
  bizaddress,
  isverified,
  bizphonenumber,
  bizemail,
  bizwhatsapp,
  open,
}) => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <ul>
        <li>
          <div className={classes.detailbox}>
            <div className={classes.businesslogo}>
              {open ? (
                <span className={classes.openstat}>Open</span>
              ) : (
                <span className={classes.clossedstat}>Closed</span>
              )}
              
              <Link
                to={
                  "/business-details/" +
                  bizcategory +
                  "/" +
                  bizid +
                  "-" +
                  bizname.replace(/\s+/g, '-')
                }
              >
                <img src={bizlogo} alt={bizname} />
              </Link>
            </div>
            <div className={classes.listcon}>
              <h4>
                <a
                  href={
                    "/business-details/" +
                    bizcategory +
                    "/" +
                    bizid +
                    "-" +
                    bizname.replace(/\s+/g, '-')
                  }
                >
                  {bizname}
                </a>
                <span>{isverified ? <VerifiedIcon /> : null}</span>
              </h4>
              <div className={classes.listratall}>
                <b>4.0</b>
                <label className={classes.rat}>
                  <StarRateIcon></StarRateIcon>
                  <StarRateIcon></StarRateIcon>
                  <StarRateIcon></StarRateIcon>
                  <StarRateIcon></StarRateIcon>
                </label>
                <span>1 Reviews</span>
              </div>
              <span className={classes.addr}>
                <ul>
                  <li>
                    {" "}
                    <LocationOnIcon />
                  </li>
                  <li>{bizaddress.substring(0,60) + "..."}</li>
                </ul>
              </span>
              <span className={classes.pho}>
                <ul>
                  <li>
                    <PhoneAndroidIcon />
                  </li>
                  <li>
                    <a href={"tel:" + bizphonenumber}>{bizphonenumber}</a>
                  </li>
                </ul>
              </span>
              <span className={classes.mail}>
                <ul>
                  <li>
                    {" "}
                    <MailOutlineIcon />
                  </li>
                  <li>
                    <a href={"mailto:" + bizemail}>{bizemail}</a>
                  </li>
                </ul>
              </span>
              <div className={classes.links}>
                <a
                  href={
                    "/business-details/" +
                    bizcategory +
                    "/" +
                    bizid +
                    "-" +
                    bizname.replace(/\s+/g, '-')
                  }
                  className={classes.getquote}
                >
                  Get quote
                </a>
                <a
                  href={
                    "/business-details/" +
                    bizcategory +
                    "/" +
                    bizid +
                    "-" +
                    bizname.replace(/\s+/g, '-')
                  }
                  className={classes.viewmore}
                >
                  view more
                </a>
                <a href={"tel:" + bizphonenumber} className={classes.callnow}>
                  Call Now
                </a>
                <a
                  href={"https://wa.me/" + bizwhatsapp.replace(/\s+/g, '')}
                  className={classes.what}
                  target="_blank"
                  className={classes.whatsapp}
                >
                  <WhatsAppIcon />
                 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Searchresult;
