import React, { useState } from "react";
import BtnSlider from "../components/Slider/BtnSlider.js";
// import dataSlider from "./dataSlider";
import Content from "../components/content.json";
import Slider from "../components/Slider/slider";
import Accordion from "../components/accordion";
import AccordionReflect from "../components/accordionReflect.js";
function HiLo() {
  const data = Content["hilogame"];
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

      <section className="process">
        <Accordion data={data} />
        {/* <button className="accordion">{data.processTitle}</button>
        <p className="panel">{data.processText}</p> */}
      </section>

      <section className="reflection">
        <AccordionReflect data={data} />
        {/* <h3>{data.reflectionTitle}</h3>
        <p>{data.reflectionText}</p> */}
      </section>

      <div className="git">
        <a
          href="https://github.com/TylerHoman"
          target="_blank"
          rel="noreferrer"
        >
          {Content && <img src={Content.icons[9]} alt="JavaScript" />}
        </a>
      </div>
    </>
  );
}

export default HiLo;
