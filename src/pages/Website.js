import React, { useState } from "react";
import BtnSlider from "../components/Slider/BtnSlider.js";
// import dataSlider from "./dataSlider";
import Content from "../components/content.json";
import Slider from "../components/Slider/slider";
import Accordion from "../components/accordion";
import AccordionReflect from "../components/accordionReflect.js";

function WebSite() {
  const data = Content["movie-database"];
  return (
    <>
      <section className="upper">
        <div className="logo">
          {Content && <img src={Content.icons[10]} alt="favicon" />}
        </div>
        <h2>{data.title}</h2>

        <div className="slider">
          <Slider data={data} />
        </div>

        <div className="contents">
          <p>{data.contents}</p>
        </div>
      </section>
    </>
  );
}

export default WebSite;
