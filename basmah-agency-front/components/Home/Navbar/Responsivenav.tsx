"use client"
import React, { useState } from "react";
import Nav from "./Nav";
import PhoneNav from "./PhoneNav";

// This is the main page for basmah-agency app

const Responsivenav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false)
  return (
  <div>
    <Nav openNav={openNavHandler} />
    <PhoneNav showNav={showNav} closeNav ={closeNavHandler} />
  </div>
  );
};

export default Responsivenav;