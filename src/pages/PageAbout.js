import React from "react";
import { Link, NavLink } from "react-router-dom";
import Content from "../components/content.json";
function About() {
  console.log(Content);
  return (
    <section className="about-wrapper">
      <div className="logo-about">
        <NavLink to="/">
          {Content && <img src={Content.icons[10]} alt="favicon" />}
        </NavLink>
      </div>

      <div className="about-span-large">
        <span>
          ABOUT. ABOUT. ABOUT. ABOUT. ABOUT. ABOUT. ABOUT. ABOUT. ABOUT. ABOUT.
          ABOUT. ABOUT.
        </span>
      </div>
      <section className="about-image-content">
        <div className="about-image">
          {Content && <img src={Content["about"].image1} alt="tyler" />}
        </div>

        <div className="about-content">
          <h2>{Content && Content.about.contentTitle}</h2>
          <p>{Content && Content.about.contents}</p>
        </div>
      </section>
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
