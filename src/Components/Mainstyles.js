import { makeStyles } from '@material-ui/styles';
import { fontSize, height } from '@mui/system';

//custom imports
import defaultbanner from "../Assets/default-hero-banner.jpg";


export const useStyle = makeStyles(Yellowpagestheme => ({
    body: {
      margin: "0",
    },
    ToolbarMargin: {
        ...Yellowpagestheme.mixins.toolbar,
        // marginBottom: "1em"
    },
    appbar: {
        backgroundColor: Yellowpagestheme.pallete.common.Yellow
    },
    categories: {
        marginLeft: "1.2rem"
    },
    navlinks: {
        marginLeft: "auto",
        display: "flex",
      },
     logo: {
        width: "200px",
        flexGrow: "1",
        cursor: "pointer",
      },
      link: {
        ...Yellowpagestheme.typography.h5,
        textDecoration: "none",
        marginLeft: Yellowpagestheme.spacing(3),
        "&:hover": {
          color: "#000",
          borderBottom: "1px solid #000",
        },
      },
      navlinksul: {
        listStyle: "none"
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
      mobileiconcontainer: {
        marginLeft: "auto",
        borderRadius: "0"
      },
      mobileicon: {
        backgroundColor: "#000",
        
      },
      defaulthomebanner:{
        backgroundImage: `url(${defaultbanner})`,
        height: "500px",
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        position: "relative",
        ' &:before ': {
         content: '" "',
         position: "absolute",
         width: "100%",
         height: "100%",
         left: "0px",
         right: "0px",
         top: "0px",
         bottom: "0px",
         background: "#231e1e1f",
         background: "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.08))",
     },
        },

        herotext:{
          textAlign: "center",
          marginTop: "80px !important",
          "& h1":{
            display: "block",
            fontWeight: "600",
            fontFamily: 'open sans',
            fontSize: "44px",
            color: "#fff",
            textShadow: "0px 1px 0 rgb(0 0 0 / 39%)",
            marginBottom: "0"
          },
          "& p":{
            color: "#fff",
            fontWeight: "400",
           fontSize: "24px",
           fontFamily: 'Roboto',
           textShadow: "0px 1px 0 rgb(0 0 0 / 39%)",
           marginTop: "0"
          }
        },
           Searchbar: {
            margin: "20px auto !important",
          },
           //styling the search form
           label: {
            "&$focusedLabel": {
              color: "cyan"
            },
            "&$erroredLabel": {
              color: "orange"
            }
          },
          focusedLabel: {},
          erroredLabel: {},
         
           inputRoot: {
              background: "#fff",
              fontSize: "15px !important",
              outline: "none",
              height: "58px",
              boxSizing: "border-box",
              color: "#1a2a38",
              fontWeight: "500",
             boxShadow: "0px 7px 20px -5px rgb(150 150 150 / 29%)",
             borderRadius: "0px",
            // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
            '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
              // Default left padding is 6px
              paddingLeft: 26
            },
            "& MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
              fontSize: "24px"
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff"
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "red"
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "purple"
            }
          },
          Advertboxescontainer: {
            margin: "50px auto !important"
          },
          Advertbox:{
            transition: "all .5s ease",
            color: "#000",
            background: "#fff",
            textAlign: "center",
            padding: "25px 20px 27px 20px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0px 0px 12px 2px rgb(0 0 0 / 7%)",
            borderRadius: "15px",
            "& img": {
            width: "60px",
            background: "#ffffff",
            padding: "6px",
            borderRadius: "15px",
            },
            "& h2":{
            fontSize: "16px",
           fontWeight: "600",
           margin: "12px 0px 15px 0px",
           color: "#243c50",
            },
            "& p": {
            display: "block",
            fontSize: "12px",
            paddingBottom: "5px",
            fontWeight: "500",
           color: "#818181",
           marginBottom: "0px",
          paddingBottom: "18px",
            },
            "& button":{
              padding: "4px 7px",
              borderRadius: "30px",
              fontSize: "12px",
              border: "1px dashed #fff",
              boxShadow: "0 0 0 3px #151f31",
              color: "#fff",
              backgroundColor: "#3f4550",
              "&:hover":{
                backgroundColor: "#000"
              }
            }
          },
  
          explorertitle:{
            textAlign: "center",
            margin: "30px 0 30px 0",
            "& h2":{
             fontSize: "32px",
             fontWeight: "300",
             marginBottom: 0,
             "& span":{
               fontWeight: "600"
             },
            },
            "& p":{
              fontSize: "15px",
              fontWeight: "400",
              display: "block",
              margin: "0px",
             }
          },
          Explorecitycategorycontainer:{
            marginTop: "5em",
            marginBottom: "5em",
            height: "auto",      
          },
          Explorecitycategorybig:{
            float: "left",
            position: "relative",
            transition: "all 0.5s ease",
            width: "100%",
          },
          hotelcity:{
            float: "left",
            position: "relative",
            transition: "all 0.5s ease",
            width: "100%",
            "&:before":{
              content: " '' ",
              position: "absolute",
              width: "100%",
              height: "100%",
             background: "linear-gradient(to top,#2e3b44,#b7a23a00 100%)",
             zIndex: "2",
             left: "0px",
            borderRadius: "5px",
           transition: "all 0.5s ease",
              },
              "& img":{
                width: "100%",
                objectFit: "cover",
                height: "347px",
                borderRadius: "5px",
              },
              
          },
          exploredetails:{
            marginTop: "-180px",
            textAlign: "left",
            zIndex: 2,
            width: "100%",
            color:" #fff",
           position: "absolute",
           bottom: "5px",
          left: "0px",
         paddingLeft: "20px",
         "& h4":{
          fontSize: "32px",
          fontWeight: "500",
           margin: "10px 0px 8px 0px",
         },
         "& p":{
          fontWeight: "300",
          fontSize: "14px",
         },
          },
          exploresmall:{
            float: "left",
            position: "relative",
            transition: "all 0.5s ease",
            width: "100%",
            "&:before":{
              content: " '' ",
              position: "absolute",
              width: "100%",
              height: "100%",
             background: "linear-gradient(to top,#2e3b44,#b7a23a00 100%)",
             zIndex: "2",
             left: "0px",
            borderRadius: "5px",
           transition: "all 0.5s ease",
              },
              "& img":{
                width: "100%",
                objectFit: "cover",
                height: "150px",
                borderRadius: "5px",
              },
          },
          exploredetailssmall:{
            marginTop: "-180px",
            textAlign: "left",
            zIndex: 2,
            width: "100%",
            color:" #fff",
           position: "absolute",
           bottom: "5px",
          left: "0px",
         paddingLeft: "20px",
         "& h4":{
          fontSize: "20px",
          fontWeight: "500",
           margin: "10px 0px 8px 0px",
         },
         "& p":{
          fontWeight: "300",
          fontSize: "14px",
         },
          },
          Yellowpageshomeformcontainer:{
            background: "#f6f6f7",
            width: "100%",
            margin: "90px 0px 40px 0px",
            paddingBottom: "80px",
            height: "auto",
            padding: "40px",
            
          },
          formcontent:{
            "& h3":{
             fontWeight: "300",
             fontSize: "24px",
             marginBottom: "0",
             "& span": {
              textTransform: "capitalize",
              fontWeight: "600",
              fontSize: "42px",
              color: "#333333",
              display: "block",
             }
              },
              "& p":{
              fontSize:" 13px",
              },
              "& ul":{
                padding: "0px",
                marginBottom: "0px",
               marginTop: "50px",
               "& li":{
                paddingTop: "25px",
                paddingBottom: "30px",
                listStyleType: "none",
                "& img":{
                textAlign: "center",
                float: "left",
                width: "50px",
                },
                "& div": {
                  display: "block",
                 marginLeft: "80px",
                 marginTop: "-10px",
                 "& h5":{
                  fontWeight: "600",
                  fontSize: "16px",
                 },
                 "& p":{
                  paddingTop: "8px",
                  fontSize: "13px",
                 }
                },
               },
              },
            },
            homeformenquiry:{
              background: "#000",
              margin: "80px 0px 0px 80px",
              borderRadius: "10px",
              boxShadow: "0 2px 15px -5px rgb(0 0 0 / 76%)",
              "& h4":{
                textAlign: "center",
                paddingTop: "30px",
               fontWeight: "600",
               marginBottom: "0px",
               color: "#fff",
               fontSize: "20px",
              },
              "& form":{
                padding: "20px 40px 30px 40px",
                "& input":{
                  border: "1px solid #e4e4e4",
                  background: "#f7fafb",
                  fontSize: "15px",
                  fontWeight: "500",
                },
                "& textarea":{
                  height: "130px"
                }
              },
             
            
            },
            formgroup:{
              float: "left",
              width: "100%",
              position: "relative",
              marginBottom: "25px",
            },
            formcontrol:{
              display: "block",
              width: "100%",
              height: "calc(1.5em + 0.75rem + 9px)",
              padding: "0.375rem 0.75rem",
              fontSize: "1rem",
             fontWeight: "400",
             lineHeight: "1.5",
            color: "#495057",
            backgroundColor: "#fff",
           backgroundClip: "padding-box",
           border:" 1px solid #dfdfdf",
           borderRadius: "3px",
          transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
            },
            log:{
             background: "#e1ffec",
             border: "1px solid #6acc8e",
            padding: "7px",
            display: "none"
            },
            homeenquirysubmit:{
              width: "100%",
              borderRadius: "50px",
              fontSize: "17px",
              fontWeight: "500",
              padding: "8px 0px",
              transition: "all ease 0.5s",
              background: Yellowpagestheme.pallete.common.Yellow,
              border: "1px solid #fef200"
            },
         
          
            howitworkslist:{
              marginTop: "30px !important"
            },
            howitworkstop:{
              "& ul":{
              padding: "0px",
              margin: "0px",
              listStyleType: "none",
              "& li":{
                listStyleType: "none",
              }
              }
            },
            Howitworkscontent:{
              textAlign: "center",
              border: "1px solid #f1f1f1",
              borderRadius: "5px",
              padding: "30px",
              margin: "0px 10px",
              position: "relative",
              transition: "all 0.5s ease",
              cursor: "pointer",
              "&:hover":{
                background: "#fff",
               transform: "translateY(-8px)",
               boxShadow: "0 19px 46px -39px rgb(37 39 42)",
              },
              "& span":{
                position: "relative",
                width: "30px",
                height: "30px",
                borderRadius: "50px",
                color: "#fff",
                fontSize: "16px",
                padding: "3px 0px",
                display: "table",
                margin: "0 auto",
                marginTop: "-44px",
                background: Yellowpagestheme.pallete.common.Black,
              },
              "& img":{
                width: "72px",
                marginTop: "25px",
              },
              "& h4":{
               fontWeight: "600",
               fontSize: "18px",
               padding: "20px 0px 2px 0px",
              },
              "& p":{
                margin: "0px",
               fontSize: "13px",
               color: "#636363",
              }
            },
            downloadappcontainer:{
              "& img":{
                width: "100%"
              }
            },
            downloadappcontainerinner:{
              background: "#f6f6f7",
              width: "100%",
              margin: "90px 0px 40px 0px",
              paddingBottom: "80px",
              height: "562px",
              padding: "40px",
            },
            mobileapp:{
              "& img":{
                width: "60%"
              },
            },
            mobileappcontent:{
              "& h2":{
                fontSize: "32px",
                paddingBottom: "20px",
              },
              "& ul":{
                paddingBottom: "20px",
                "& li":{
                  fontSize: "15px",
                  paddingBottom: "10px",
                  paddingLeft: "30px",
                  listStyleType: "none",
                  "& span":{
                    margin: "-2px 0px 0px -27px",
                    "& svg":{
                      paddingTop: "10px",
                    }
                  }
                }
              },
              "& span":{
                fontSize: "14px",
                float: "left",
               paddingBottom: "20px",
              },
              "& a":{
                textDecoration: "none",
                "& img":{
                width: "150px",
                float: "left",
               margin:" 0px 5px 5px 0px",
                }
              }
            },
          
        
            topnavigation:{
              position: "fixed",
              top: "60px",
              width: "100%",
              height: "auto",
              zIndex: 16,
              boxShadow: "0 0px 10px 2px rgb(0 0 0 / 24%)",
              background: "#fff",
              "& ul":{
                display: "table",
                margin: "0 auto",
                listStyle: "none",
                "& li":{
                  display: "inline-block",
                  "& span":{
                    color: "#000",
                    borderRight: "1px solid #e4ecf2",
                    lineHeight: "30px",
                    display: "block",
                   padding: "12px 15px",
                   fontSize: "13.5px",
                  fontWeight: "500",
                  textDecoration: "none",
                  cursor: "pointer",
                  "& svg":{
                    marginRight: "5px",
                    verticalAlign: "middle",
                    fontSize: "17px",
                    marginTop: "-1px",
                  },
                  },
                },
              }
            },
            listbanner:{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              marginTop: "20px",
              "&:before":{
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "#3e5662cc",
                background: "linear-gradient(to top, rgb(27 28 32 / 76%) -8%, rgb(249 247 247 / 2%) 50%)",
                left: "0px",
              },
              "& img":{
                width: "100%",
                float: "left",
               objectFit: "cover",
              height: "345px",
              }
            },
            listaddressbox:{
              position: "relative",
              width: "100%",
             boxSizing: "content-box",
             margin: "-160px 0px 15px 0px",
            },
            bizlogowrapper:{
              float: "left",
              width: "175px",
              position: "relative",
              zIndex: 2,
              top: "3%",
              "& img":{
                width: "180px",
                height: "180px",
                float: "left",
                objectFit: "cover",
                borderRadius: "50%",
                border: "8px solid #fffdfd",
                boxShadow: "-1px 0px 16px -6px rgb(0 0 0 / 25%)",
                margin: "-5px 0px 0px 77px",
              }
            },
            stat:{
              position: "absolute",
             background: "#2cbd32",
             color: "#fff",
            left: "147px",
             bottom: "-7px",
           width: "36px",
           height: "36px",
           textAlign: "center",
          textShadow: "0 0 2px #333333a8",
          borderRadius: "50px",
          "& svg":{
            verticalAlign: "middle",
            paddingTop: "10px",
          }
            },
            bizaddresswrapper:{
            position: "relative",
            color:" #000",
            background: "#fff",
            borderRadius: "10px",
            padding: "30px 30px 50px 140px",
           boxShadow: "0px 1px 10px -4px #3333337a",
           "&:before":{
            content: " '' ",
            position: "absolute",
            width: "150px",
            height: "110%",
            left: "-30px",
            top: "-12px",
            bottom: "0px",
            borderRadius: "11px",
            transform: "rotate(-8deg)",
            background: Yellowpagestheme.pallete.common.Yellow,
           },
           "& h3":{
            fontWeight: "700",
            fontSize: "30px",
            marginBottom: 0,
           },
           "& p":{
            fontSize: "15px",
            display: "block",
            fontWeight: "600",
            width: "100%",
           },
            },
            listnumber:{
              float: "left",
              width: "100%",
              "& ul":{
                padding: "0px",
                margin: "0px",
                listStyleType: "none",
                "& a":{
                  textDecoration: "none",
                  "& li":{
                    fontSize: "14px",
                    float: "left",
                    marginRight: "5px",
                    color: "#505a61",
                    fontWeight: "500",
                    "&:nth-child(2)":{
                      padding: "0px 15px 10px 0px",
                    },
                    "& svg":{
                      margin: "1px 0px 0px -2px",
                      color: "#505a61",
                      fontSize: "18px",
                      fontWeight: "500",
                    },
                  }
                }
              }
            },
            calltoactionbtnbiz:{
              width: "100%",
              padding: "20px 0px 30px 0px",
              textAlign: "center",
              "& ul":{
                padding: "0px",
                margin: "0px",
                listStyleType: "none",
                "& li":{
                  display: "inline-block",
                  margin: "0px 5px 0px 10px",
                  fontWeight: "600",
                  padding: "8px 25px 8px 40px",
                  borderRadius: "2px",
                  cursor: "pointer",
                  background: "#fff",
                  border: "1px solid #d5d9e8",
                  color: "#2f3a54",
                  fontSize: "13px",
                  
                  animation: "none",
                  textDecoration: "none",
                 "& a":{
                   textDecoration: "none",
                   color: "#2f3a54",
                   float: "left",
                  "& span":{
                    float: "left",
                    fontSize: "14px",
                    "& svg":{
                    marginLeft: "-23px",
                    marginTop: "-2px",
                    color: "#9d9a98",
                    fontSize: "14px",
                    fontWeight: "500"
                    }
                  },
                 }
                }
              },
            },
            bizinfo:{
              marginTop: "40px",
              marginBottom: "100px",
            },
            bizinfowrapper:{
              background: "#fff",
              border: "1px solid #e0e6f5",
              borderRadius: "10px",
              marginBottom: "20px",
              paddingBottom: "20px",
            },
            bizinfotit:{
              borderBottom: "1px solid #e0e6f5",
              "& h3":{
                padding: "15px 20px",
                background: "#fff",
                fontWeight: "600",
                fontSize: "16px",
                textTransform: "uppercase",
                marginBottom: "0px",
                borderRadius: "10px",
                "& span":{
                  color: "#8a8d92",
                  fontWeight: "600",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }
              }
            },
            bizinfocontent:{
              padding: "20px 20px 0px 20px",
              "& p":{
                fontSize: "14px",
                color: "#56595d",
                lineHeight: "24px",
                fontWeight: "500",
              }
            },
            bizslide:{
              "& img":{
                width: "100%"
              }
            },
            getbizquote:{
             background: "#fff",
             borderRadius: "10px",
             marginBottom: "20px",
            },
            bizquoteinner:{
              padding: "0px",
             background: "#f2f4f6",
             
             "& h3":{
              fontWeight: "600",
              fontSize: "15px",
              textAlign: "center",
              color: "#fff",
             background: "#000",
             padding: "12px",
            borderRadius: "10px 10px 0 0",
             textTransform: "uppercase",
             },
             "& form":{
              padding: "0 30px 25px 30px",
              borderTop: "0",
              border: "1px solid #e0e6f5",
              "& textarea":{
                height: "100px"
              }
             },
            },
            btnbizenquiry:{
              width: "100%",
              border: "0px",
             fontWeight: "600",
            opacity: 1,
            textTransform: "uppercase",
            fontSize: "13px",
            letterSpacing: "1px",
            padding: "10px 10px",
           borderRadius: "2px",
           borderRadius: "20px",
            background: Yellowpagestheme.pallete.common.Black,
            color: "#fff",
            },
            map:{
              padding: "0 30px 25px 30px",
              borderTop: "0",
              border: "1px solid #e0e6f5",
              "& iframe":{
                width: "100%",
                height: "200px",
                border: 0,
              }
            },
            companyinfo:{
              padding: "0 30px 25px 30px",
              borderTop: "0",
              border: "1px solid #e0e6f5",
              "& ul":{
                padding: "0px",
                margin: "0px",
               listStyleType: "none",
               "& li":{
                borderBottom: "1px solid #e0e6f5",
                padding: "10px 0px",
                fontWeight: "500",
                fontSize: "13px",
                color:" #56595d",
                "& span":{
                  float: "right",
                  textAlign: "right",
                  background: "#f7f8fa",
                  borderRadius: "5px",
                  padding: "0px 5px",
                  border: "1px solid #e2e2e2",
                  fontSize: "13px",
                }
               }
              }
            },
            listingad:{
              padding: "20px 0px",
              paddingBottom: "140px",
              "& span":{
                position: "absolute",
                color: "#fff",
                fontSize: "10px",
                padding: "1px 3px",
                borderRadius: "2px",
                background: Yellowpagestheme.pallete.common.Black,
              },
              "& img":{
                width: "100%"
              },
            },
 
     
    
}))
