import React from "react";

import Businessdetailsdata from "../../utils/Businessdetailsdata";
import { useParams } from "react-router-dom";

const Businessdetail = () => {
        
         const {category,id,name} = useParams();

      
        //   console.log(category);
        // console.log(id);
        //  console.log(name);
      
   
   

    return(
        <>
         {
           Businessdetailsdata.filter(data => data.name === data.name).map((data,index) =>(<div key={index}>
                {data.name}
                 {/* {console.log(data.name)} */}
                
             </div>))
         }

        </>
    )
}

export default Businessdetail