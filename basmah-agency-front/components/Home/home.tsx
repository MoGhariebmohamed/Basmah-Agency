import React from "react";
import Mainsec from "./Mainsec/main";
import Secondsec from "./Secondsec/Secondsec";


// This is the main page for basmah-agency app

const Home = () => {
  return <div className="overflow-hidden ">
    <Mainsec />
    <Secondsec />
  </div>;
};

export default Home;