import React from "react";
import web from "../src/images/img1.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;
