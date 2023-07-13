import React from "react";
import { Link, NavLink } from "react-router-dom";
import Content from "../components/content.json";

function PageWorks() {
  return (
    <div className="page-works-wrapper">
      <div className="logo">
        {Content && <img src={Content.icons[10]} alt="favicon" />}
      </div>

      <section className="website-wrapper">
        <div className="website-title">
          <NavLink to="/website">
            <h2>{Content && Content["website"].title}</h2>
          </NavLink>
        </div>
        <div className="website-image">
          <NavLink to="/website">
            {Content && (
              <img src={Content["capstone"].images[0]} alt="WebSite" />
            )}
          </NavLink>
        </div>
      </section>
      <div className="work-icons-website">
        {Content && <img src={Content.icons[0]} alt="wordpress" />}
        {Content && <img src={Content.icons[1]} alt="sass" />}
        {Content && <img src={Content.icons[2]} alt="woo" />}
      </div>

      <section className="capstone-wrapper">
        <div className="capstone-title">
          <NavLink to="/capstone">
            <h2>{Content && Content["capstone"].title}</h2>
          </NavLink>
        </div>
        <div className="capstone-image">
          <NavLink to="/capstone">
            {Content && (
              <img src={Content["capstone"].images[0]} alt="capstone" />
            )}
          </NavLink>
        </div>
      </section>
      <div className="work-icons-capstone">
        {Content && <img src={Content.icons[0]} alt="wordpress" />}
        {Content && <img src={Content.icons[1]} alt="sass" />}
        {Content && <img src={Content.icons[2]} alt="woo" />}
      </div>

      <section className="movie-database-wrapper">
        <div className="movie-database-title">
          <NavLink to="/movie-database">
            <h2> {Content && Content["movie-database"].title}</h2>
          </NavLink>
        </div>

        <div className="movie-database-image">
          <NavLink to="/movie-database">
            {Content && (
              <img
                src={Content["movie-database"].images[1]}
                alt="Movie database"
              />
            )}
          </NavLink>
        </div>
      </section>
      <div className="work-icons-movie-database">
        {Content && <img src={Content.icons[8]} alt="React" />}
        {Content && <img src={Content.icons[1]} alt="sass" />}
        {Content && <img src={Content.icons[3]} alt="illustrator" />}
      </div>

      <section className="hi-lo-wrapper">
        <div className="hi-lo-title">
          <NavLink to="/hilo">
            <h2> {Content && Content["hilogame"].title}</h2>
          </NavLink>
        </div>
        <div className="hi-lo-image">
          <NavLink to="/hilo">
            {Content && (
              <img src={Content["hilogame"].images[0]} alt="Hi-Lo Game!" />
            )}
          </NavLink>
        </div>
      </section>
      <div className="work-icons-hi-lo">
        {Content && <img src={Content.icons[6]} alt="HTML" />}
        {Content && <img src={Content.icons[3]} alt="Illustrator" />}
        {Content && <img src={Content.icons[5]} alt="JavaScript" />}
      </div>
    </div>
  );
}

export default PageWorks;
