import React from "react";
import Content from "../components/content.json";
function About() {
  console.log(Content);
  return (
    <section className="about-wrapper">
      <div className="logo-about">
        {Content && <img src={Content.icons[10]} alt="favicon" />}
      </div>
      <div className="about-image">
        {Content && <img src={Content["about"].image1} alt="tyler" />}
      </div>

      <div className="about-content">
        <p>{Content && Content.about.contents}</p>
      </div>
      <div className="art-website">
        <a href="https://tylerhoman.com" target="_blank" rel="noreferrer">
          Art Website!
        </a>
      </div>
      <div className="git">
        <a
          href="https://github.com/TylerHoman"
          target="_blank"
          rel="noreferrer"
        >
          {Content && <img src={Content.icons[9]} alt="git" />}
        </a>
      </div>
    </section>
  );
}

export default About;
