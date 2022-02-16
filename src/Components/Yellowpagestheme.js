

import { createTheme } from '@material-ui/core/styles';

const Yellow = "#fef200";
const Black = "#1e1e1e";
const Grey = "#f6f5f5";

export const Yellowpagestheme = createTheme({
    components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              margin: "0",
              backgroundColor: "green"
            }
          }
        }
      },
    pallete: {
        common: {
            Yellow: `${Yellow}` ,
            Black: `${Black}`
        }
    },
    primary: {
        main: `${Yellow}`,
    },
    secondary:{
       main: `${Black}`,
    },
    typography: {
        h1: {
            fontFamily: 'Open Sans',
           fontSize: "2.3rem",
           fontWeight: 700,
           color: `${Black}`,
           lineHeight: 1.5
        },
        h2: {
            fontFamily: 'Open Sans',
           fontSize: "2.0rem",
           fontWeight: 700,
           lineHeight: 1.5
        },
        h4: {
            fontFamily: 'Open Sans',
           fontSize: "24px",
           fontWeight: 600,
           color: `${Black}`,
           lineHeight: 1.5
        },
        h5: {
            fontFamily: 'Roboto',
            fontSize: "1rem",
            fontWeight: 400,
            color: `${Black}`,
            textTransform: "capitalize"
        },
        
    },
    props: {
        // Name of the component
        MuiButtonBase: {
          // The properties to apply
          disableRipple: true // No more ripple, on the whole application!
        }
      }
  });