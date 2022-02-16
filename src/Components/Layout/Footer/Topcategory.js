import { React } from "react";

const Topcategory = ({ category }) => {
  return (
    <>
      <li>
      <a href={"/category/" + category}>{category}</a>
      </li>
      
    </>
  );
};

export default Topcategory;
