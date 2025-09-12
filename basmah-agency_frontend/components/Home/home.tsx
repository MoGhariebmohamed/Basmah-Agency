import React from "react";
import Mainsec from "./Mainsec/main";
import Secondsec from "./Secondsec/Secondsec";
import Thirdsec from "./Thirdsec/Thirdsec";
import Fourthsec from "./Fourthsec/Fourthsec";
import Achievments from "./Achievments/Acheivments";
import Academy from "./Academy/Academy";
import Footer from "./Footer/Footer";


// This is the main page for basmah-agency app

const Home = () => {
  return <div className="overflow-hidden ">
    <section id="main">
      <Mainsec />
    </section>

    <section id="second">
      <Secondsec />
    </section>

    <section id="third">
      <Thirdsec />
    </section>

    <section id="fourth">
      <Fourthsec />
    </section>

    <section id="achievments">
      <Achievments />
    </section>

    <section id="academy">
      <Academy />
    </section>
  
  </div>;
};

export default Home;