import React from "react";
import Topbar from "../navbar/Topbar";
import Hero from "./hero/Hero";

import "./home.css";
const Home = () => {
  const videosrc =
    "https://cdn.coverr.co/videos/coverr-electric-car-driving-in-the-dark-woods-668/1080p.mp4";
  return (
    <div className="heropage">
      {/* <video loop autoPlay="" src={videosrc}></video> */}
      <Topbar />
      <Hero />
    </div>
  );
};

export default Home;
