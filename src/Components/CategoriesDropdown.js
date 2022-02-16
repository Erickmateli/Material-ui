import React from "react";
import { useStyle } from "./Mainstyles";

const CategoriesDropdown = () => {
    const classes = useStyle();
    return (
        <React.Fragment>
             <span className={classes.categories}>All Categories</span> 
        </React.Fragment>
    )
}

export default CategoriesDropdown;