import React from "react";

//custom imports
import Homepagebanner from "../Components/Homepagebanner";
// import Popularservices from "../Components/PopularServicenearyou";
import Popularservices from "../Components/Topservices/PopularServicenearyou";
import Explorecitycategory from "../Components/Explorecitycategory";
import Yellowpageshomeform from "../Components/Yellowpagesdirectoryform";
import Topserviceproviderinyourcity from "../Components/Toplistings/Topserviceproviderincity";
import Howitworks from "../Components/Howitworks";
import Downloadapp from "../Components/Downloadapp";

const Home = () =>{
    return (
        <React.Fragment>
           <Homepagebanner></Homepagebanner>
           <Popularservices></Popularservices>
           <Explorecitycategory></Explorecitycategory>
           <Yellowpageshomeform></Yellowpageshomeform>
           <Topserviceproviderinyourcity></Topserviceproviderinyourcity>
           <Howitworks></Howitworks>
           <Downloadapp></Downloadapp>
        </React.Fragment>
      
    )
}
export default Home;