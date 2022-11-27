import React from "react";
import Footer from "./footer";
import Navbar from "./Navbar";
import Slider from "./Carousel";
import Service from "./service";
import Cont from "./touch";
import About from "./about";
import Posts from "./posts";
import Passport from "./passport";
function Main() {
  return (
    <>
     <Navbar />
     
      <Slider></Slider>
      <Service />
      <Passport/>
      <Posts></Posts>
      <About />
      <Cont />
      <Footer />
    </>
  );
}

export default Main;
