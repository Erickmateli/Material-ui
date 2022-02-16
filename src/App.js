import React from "react";

//style imports
import { ThemeProvider } from "@material-ui/styles";
import {Yellowpagestheme} from "./Components/Yellowpagestheme";

//react router dom imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//material ui imports
import CssBaseline from "@mui/material/CssBaseline";


//custom imports
import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home";
import Addbusiness from "./pages/Addbusiness"
import SearchResults from "./Components/Searchresults/searchresults";
import Register from "./Components/Register/Register";
 import Businessdetails from "./pages/Businessdetails";
import Businessdetail from "./Components/Businessdetails/Businessdetail";
import Popularcategories from "./pages/popularcategories";
import Businessdetailsdata from "./utils/Businessdetailsdata";

function App() {
  
  return (
    <ThemeProvider theme={Yellowpagestheme}>
       <CssBaseline />
      <BrowserRouter>
        <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="add-business" element={<Addbusiness/>}></Route>
          <Route exact path="search-results" element={<SearchResults/>}></Route>
          <Route exact path="Register" element={<Register/>}></Route>
          {/* <Route path="/business-details/?:category?/:id-?:name" element={<Businessdetail/>}></Route> */}

          <Route path="/business-details/" element={<Businessdetails/>}>
          {/* <Route path=":id" element={<Businessdetail />} />
          <Route path=":name" element={<Businessdetail />} /> */}
          </Route>

          <Route path="popular-categories" element={<Popularcategories/>}></Route>
        </Routes>
        </Layout>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
