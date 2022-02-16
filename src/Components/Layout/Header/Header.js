import React from "react";
import { ReactDOM } from "react";

//react router dom imports
import { Link } from "react-router-dom";

//material ui imports
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

//custom imports
import Logo from "../../../Assets/logo.svg";
import { useStyle } from "../../Mainstyles";
import CategoriesDropdown from "../../CategoriesDropdown";
import Mobilemenu from "../../Mobilemenu";

//media query and breakpoints and MU theme imports
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const Header = () => {
  const classes = useStyle();
  //set use theme function to access MUI themes and get breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      {/** use tarnary operator to check if mobile then display the relavant menu**/}

      <AppBar position="fixed" className={classes.appbar}>
        <Container >
          <Toolbar disableGutters>
            <Button disableRipple component={Link} to="/home">
              <img
                className={classes.logo}
                src={Logo}
                alt="Yellow pages kenya"
              />
            </Button>
            {isMobile ? (
              <Mobilemenu />
            ) : (
              <React.Fragment>
                <Typography variant="h5">
                  <CategoriesDropdown />
                </Typography>
                <div className={classes.navlinks}>
                  <ul className={classes.navlinksul}>
                    <li>
                      <Link to="/add-business" className={classes.link}>
                        Add Business
                      </Link>
                      <Link to="/sign-in" className={classes.link}>
                        Sign In
                      </Link>
                    </li>
                  </ul>

                  <Button
                    component={Link}
                    to="/add-business"
                    variant="contained"
                    className={classes.btn}
                  >
                    Create an account
                  </Button>
                </div>
              </React.Fragment>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.ToolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
