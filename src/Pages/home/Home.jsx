import React from "react";
import NavBar from "../../shared/NavBar";
import Slider from "../../components/Slider";
import Stats from "../../components/Stats";

const Home = () => {
  return (
    <div className=" my-5 rounded-lg shadow-md">
      <Slider />
      <Stats />
    </div>
  );
};

export default Home;
