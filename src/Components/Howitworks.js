import React from "react";

//material ui imports
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//custom imports
import { useStyle } from "./Mainstyles";
import howit1 from '../Assets/how1.png';
import howit2 from '../Assets/how2.png';
import howit3 from '../Assets/how3.png';
import howit4 from '../Assets/how4.png';

const Howitworks = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
        <div className={classes.topserviceprovidercontainer}>
      <Grid container className={classes.topserviceprovidertitle} style={{textAlign:"center"}}>
        <Grid item xs={12} sm={12} md={12}>
          <h2>
            <span>How It Works </span> 
          </h2>
          <p>
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla.
          </p>
        </Grid>
      </Grid>
      <Container>
          <Grid container className={classes.howitworkslist} spacing={2}>
          <Grid item xs={12} sm={3} md={3}>
              <div className={classes.howitworkstop}>
                <ul>
                    <li>
                        <div className={classes.Howitworkscontent}>
                            <span>1</span>
                            <img src={howit1} alt="how it works"/>
                            <h4>Create an account</h4>
                            <p>Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.</p>
                        </div>
                    </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
            <div className={classes.howitworkstop}>
                <ul>
                    <li>
                        <div  className={classes.Howitworkscontent}>
                            <span>2</span>
                            <img src={howit2} alt="how it works"/>
                            <h4>Add your business</h4>
                            <p>Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.</p>
                        </div>
                    </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={12} sm={3} md={3}>
            <div className={classes.howitworkstop}>
                <ul>
                    <li>
                        <div  className={classes.Howitworkscontent}>
                            <span>3</span>
                            <img src={howit3} alt="how it works"/>
                            <h4>Get more leads</h4>
                            <p>Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.</p>
                        </div>
                    </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
            <div className={classes.howitworkstop}>
                <ul>
                    <li>
                        <div  className={classes.Howitworkscontent}>
                            <span>4</span>
                            <img src={howit4} alt="how it works"/>
                            <h4>Archive goals</h4>
                            <p>Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.</p>
                        </div>
                    </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Howitworks;
