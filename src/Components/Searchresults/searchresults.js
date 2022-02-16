import React, { useState } from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AppsIcon from "@mui/icons-material/Apps";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/styles";

//custom imports
import Businessdetailsdata from "../../utils/Businessdetailsdata";
import image1 from "../../Assets/image1.jpg";
import Searchresult from "./searchresult";

import yellowpagesflipbookad from "../../Assets/yellow-pages-flip-book-min.gif";


//search results styling
const useStyle = makeStyles((Yellowpagestheme) => ({
    breadcrumb:{
        background: "#d4d3d3",
        width: "100%",
        padding: "20px",
        "& h1":{
          fontWeight: "600",
          margin: "0px",
          fontSize: "32px",
          lineHeight: "34px",
          width: "100%",
          color: "#000",
          paddingBottom: "10px",
          position: "relative",
         textTransform: "capitalize",
         fontFamily: "Open Sans",
        },
        "& ul":{
          float: "left",
          position: "relative",
          padding: "0",
          "& li":{
            float: "left",
            marginRight: "3px",
            listStyleType: "none",
            "&:after":{
              content: "'>'",
              color: "#000",
              fontSize: "16px",
              padding: "2px",
            },
            "& a":{
             color: "#000",
             fontSize: "16px",
             textTransform: "capitalize",
             textDecoration: "none",
             fontFamily: "Roboto",
            }
          }
        }
      },

      Searchresultscontainer:{
        background: "#f2f2f2",
        marginBottom: "40px",
      },
      SearchResultswrapper:{
        boxShadow: "0px 4px 30px rgb(0 0 0 / 22%)",
      },

      filterwrapper:{
        padding: "0px 0px 30px 0px",
        background: "#fff",
        borderRadius: "5px 0 0 0",
        float: "left",
      },

      filtercat:{
        float: "left",
        marginBottom: "25px",
        width: "100%",
        padding: "0px 18px",
        "& h4":{
          display: "inline-flex",
          fontSize: "18px",
          color: "#3c4043",
          marginBottom: "12px",
          fontWeight: "600",
          "& span":{
            marginRight: "10px",
          }
        },
       
      },
      filterloc:{
        marginTop: "20px !important"
      },
      adspace:{
        float: "left",
       marginBottom: "25px",
       width: "100%",
      padding: "0px 18px",
      "& ul":{
        padding: "0px",
        margin: "0px",
        listStyleType: "none",
        "& li":{
          marginBottom: "15px",
        }
      },
      },
      adbox:{
        position: "relative",
        borderRadius: "7px",
        boxShadow: "0px 16px 11px -7px rgb(0 0 0 / 30%)",
        transition:" all 0.5s ease",
        "& span":{
          position: "absolute",
          color: "#fff",
          fontSize: "10px",
          padding: "1px 3px",
          borderRadius: "2px",
          background: "#000",
        },
        "& img":{
          width: "100%"
        }
      },
      listbizform:{
        float: "left",
       width: "100%",
      background: "#f5f7fb",
      paddingTop: "10px",
      position: "sticky",
       top: "50px",
      },
      tit:{
        textAlign: "center",
        width: "100%",
        margin: "0px 0px 10px 0px",
        "& h3":{
          fontSize: "16px",
          fontWeight: "400",
         lineHeight: "24px",
         marginBottom: "0px",
         "& span":{
          display: "block",
          fontWeight: "600",
         },
        },
        },
        formouter:{
          background: "#f5f7fb",
          margin: "0px",
          boxShadow: "none",
          "& form":{
            padding: "20px 30px 30px 30px",
          }
        },
        formgroup:{
          float: "left",
          width: "100%",
          position: "relative",
          marginBottom: "10px",
        },
        formControl:{
          display: "block",
          width: "100%",
          height: "calc(1.5em + 0.75rem + 9px)",
         padding: "0.375rem 0.75rem",
         background: "#fff",
         fontSize: "12px",
         border: "1px solid #e8e8e8",
         "& textarea":{
          background: "#fff",
          fontSize: "12px",
          border: "1px solid #e8e8e8",
         },
        },
        btnlead:{
          width: "100%",
          borderRadius: "50px",
          fontSize: "17px",
          color: "#fff",
          border: "0",
          fontWeight: "500",
          padding: "8px 0px",
          transition:" all ease 0.5s",
          background: Yellowpagestheme.pallete.common.Black,
        },
        allresults:{
          background: "#eaeaea",
          padding: "20px 0px 40px 0px",
          float: "left",
        },
        adsearchresults:{
          padding: "0px 25px",
          position: "relative",
          float: "left",
          width: "100%",
          margin: "20px 0px",
         
          "& img":{
            width: "100%"
          }
        },
        adtag:{
          position: "absolute",
          color: "#fff",
          fontSize: "10px",
          padding: "1px 3px",
          borderRadius: "2px",
          background: "#000",
        },
        singlesearchresult:{
          "& ul":{
            padding: "0px",
            margin: "0px",
           listStyleType: "none",
           "& li":{
            padding: "0px 10px 15px 10px",
           },
          }
        },
     
      
  
  }));
  
const SearchResults = () => {
  const classes = useStyle();

  //set category state
  const [cat, setCat] = React.useState("");

  const handleChange = (event) => {
    setCat(event.target.value);
  };
  return (
    <React.Fragment>
      <div className={classes.breadcrumb}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <h1>Real Estate</h1>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">All Category</a>
                </li>
                <li>
                  <a href="#">Real Estate</a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.Searchresultscontainer}>
        <Container>
          <Grid container className={classes.SearchResultswrapper}>
            <Grid item sm={12} md={3} sm={3}>
              <div className={classes.filterwrapper}>
                
                {/**filter by category **/}
                <div className={classes.filtercat}>
                  <h4>
                    <span>
                      <AppsIcon></AppsIcon>
                    </span>
                   Filter By:
                  </h4>
                  <div className={classes.dropdown}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cat}
                        label="Category"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Automobiles</MenuItem>
                        <MenuItem value={20}>Spa and Facial</MenuItem>
                        <MenuItem value={30}>Wedding halls</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth className={classes.filterloc}>
                      <InputLabel id="demo-simple-select-label">
                        locations
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cat}
                        label="Category"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Nairobi</MenuItem>
                        <MenuItem value={20}>Kisumu</MenuItem>
                        <MenuItem value={30}>Mombasa</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                {/** Ad section**/}
                <div className={classes.adspace}>
                  <ul>
                    <li>
                      <div className={classes.adbox}>
                        <a href="/">
                          <span>Ad</span>
                          <img src={image1} alt="image space" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                {/** list your business lead form **/}
                <div className={classes.listbizform}>
                  <div className={classes.tit}>
                    <h3>
                      List your business with <span>Yellow pages Kenya</span>
                    </h3>
                  </div>
                  <div className={classes.formouter}>
                    <form>
                      <div className={classes.formgroup}>
                        <input
                          type="text"
                          name="enquiry_name"
                          required="required"
                          className={classes.formControl}
                          placeholder="Enter name*"
                        />
                      </div>
                      <div className={classes.formgroup}>
                        <input
                          type="email"
                          className={classes.formControl}
                          placeholder="Enter email*"
                          required="required"
                          name="enquiry_email"
                          pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                          title="Invalid email address"
                        />
                      </div>
                      <div className={classes.formgroup}>
                        <input
                          type="text"
                          className={classes.formControl}
                          name="enquiry_mobile"
                          placeholder="Enter mobile number *"
                          pattern="[7-9]{1}[0-9]{9}"
                          title="Phone number starting with 7-9 and remaining 9 digit with 0-9"
                          required=""
                        />
                      </div>
                      <div className={classes.formgroup}>
                        <textarea
                          className={classes.formControl}
                          rows="6"
                          name="enquiry_message"
                          placeholder="Enter your query or message"
                          style={{ height: "100px" }}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        id="home_slide_enquiry_submit"
                        name="home_slide_enquiry_submit"
                        className={classes.btnlead}
                      >
                        Submit{" "}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={9} sm={9}>
              <div className={classes.allresults}>
                <div className={classes.adsearchresults}>
                  <a href="/">
                    <span className={classes.adtag}>AD</span>
                    <img
                      src={yellowpagesflipbookad}
                      alt="yellow pages flip book"
                    />
                  </a>
                  <div className={classes.singlesearchresult}>
                      {/** loop through the search results and display data accordingly **/}
                 {
                     Businessdetailsdata.slice(0,5).map((business) => <Searchresult
                     key={business.id}
                     bizcategory={business.category}
                     bizid={business.id}
                     bizlogo={business.logo.url}
                     bizname={business.name}
                     bizaddress={business.Address}
                     isverified={business.isverified}
                     bizphonenumber={business.phonenumber}
                     bizemail={business.email}
                     bizwhatsapp={business.whatsapp}
                     open={business.open}
                     />)
                 }
                  
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SearchResults;
