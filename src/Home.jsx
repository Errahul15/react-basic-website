import React from "react";
import web from "../src/images/img1.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your buisness with"
        imgsrc={web}
        visit="/services"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
