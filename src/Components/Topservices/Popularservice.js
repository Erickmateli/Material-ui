import React from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";



const Popularservice = ({popularcategoryimage,popularcategorytitle,popularcategoryhits,popularcategorytitleclass,popularcategorycountclass}) =>{
    return(
        <>
        <Grid item xs={12} sm={3} md={3}>
              <a href={"/Popular-categories/" + popularcategorytitle}>
                <div>
                  <img src={popularcategoryimage} alt={popularcategorytitle} />
                  <ul>
                    <li className={popularcategorytitleclass}>
                      {popularcategorytitle}
                    </li>
                    <li className={popularcategorycountclass}>
                      <span>Show All {popularcategoryhits}</span>
                    </li>
                  </ul>
                </div>
              </a>
            </Grid>
        </>
    )
}

Popularservice.defaultProps = {
    popularcategorytitleclass: "popularcounttitle",
    popularcategorycountclass: "popularcount",
  }

export default Popularservice;