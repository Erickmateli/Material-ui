import React, {useState} from "react";

//react router dom imports
import { Link } from "react-router-dom";

//material ui imports
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import IconButton from"@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Icon";

//custom imports
import { useStyle } from "./Mainstyles";

const Mobilemenu = () => {
  const classes = useStyle();

  //Create a hook that allows us to use state on the drawer component, that is will be displayed when there is an action to call it.
  //set use state to false becouse the drawer will be called once we call it/click it
  
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
     {/**We will then pass the state as a prop to the Drawer component. **/}
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}> 
        <List>
          {/**Repeat the same process for the ListItems. This will close the drawer when the items are clicked. **/}
          <ListItem onClick={()=>setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/add-business" className={classes.link}>
                Add Business
              </Link>
              <Link to="/sign-in" className={classes.link}>
                Sign In
              </Link>
            </ListItemText>
          </ListItem>
        </List>
        <Button
          component={Link}
          to="/add-business"
          variant="contained"
          className={classes.btn}
        >
          Create an account
        </Button>
      </Drawer>
       {/**mobile icons import **/}
      <IconButton className={classes.mobileiconcontainer} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.mobileicon} />
      </IconButton>
    </React.Fragment>
  );
};

export default Mobilemenu;