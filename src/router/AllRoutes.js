import React from "react";
import Preview from "../views/Preview";
// import HomeDark from "../views/HomeDark";
// import HomeRtl from "../views/all-home-version/HomeRtl";
// import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ContextProvider from "../Context/ContextProvider";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ContextProvider>
        <ScrollTopBehaviour />
        <Routes>

          {/* <Route path="/home-dark" element={<HomeDark />} /> */}
          {<Route path="/" element={<Preview />} />}
          {/* <Route path="/home-rtl" element={<HomeRtl />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </ContextProvider>
    </>
  );
};

export default AllRoutes;
