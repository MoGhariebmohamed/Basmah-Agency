import React from "react";
import Mainsec from "./Mainsec/main";
import Secondsec from "./Secondsec/Secondsec";
import Thirdsec from "./Thirdsec/Thirdsec";
import Fourthsec from "./Fourthsec/Fourthsec";
import Achievments from "./Achievments/Acheivments";


// This is the main page for basmah-agency app

const Home = () => {
  return <div className="overflow-hidden ">
    <Mainsec />
    <Secondsec />
    <Thirdsec />
    <Fourthsec />
    <Achievments />
  </div>;
};

export default Home;