import React, { useState } from "react";
import BtnSlider from "../components/Slider/BtnSlider.js";
import Content from "../components/content.json";
import Slider from "../components/Slider/slider";
import Accordion from "../components/accordion";
import AccordionReflect from "../components/accordionReflect.js";

function MovieDatabase() {
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
          <h3>{data.overview}</h3>
          <p>{data.contents}</p>
        </div>
      </section>

      <section className="process">
        <Accordion data={data} />
      </section>

      <section className="reflection">
        <AccordionReflect data={data} />
      </section>

      <section className="view-live">
        <a
          href="https://tylerhoman.org/neonnights"
          target="_blank"
          rel="noreferrer"
        >
          <p>Check out the live project!</p>
        </a>
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

export default MovieDatabase;
