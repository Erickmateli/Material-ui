import React, { useState } from "react";

//slider settings
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";


//custom imports
import { useStyle } from "../Components/Mainstyles";
import gallary1 from "../Assets/gallery1.jpg";

//slider init
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Businessphotogallary = () => {
  const classes = useStyle();

  const [getindex, setIndex] = useState(0);

  const handleChangeIndex = (getindex) => {
    setIndex({
        getindex,
    });
  };
  return (
    <React.Fragment>
      <AutoPlaySwipeableViews
        getindex={getindex}
        onChangeIndex={handleChangeIndex}
      >
        <div className={classes.bizslide}>
          <img src={gallary1} alt="biz gallery" />
        </div>
        <div className={classes.bizslide}>
          <img src={gallary1} alt="biz gallery" />
        </div>
        <div className={classes.bizslide}>
          <img src={gallary1} alt="biz gallery" />
        </div>
      </AutoPlaySwipeableViews>
     
    </React.Fragment>
  );
};

export default Businessphotogallary;
