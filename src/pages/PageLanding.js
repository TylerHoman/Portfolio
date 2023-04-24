import React from "react";
import Content from "../components/content.json";

function Landing() {
  return (
    <div className="landing-wrapper">
      <div className="logo">
        {Content && <img src={Content.icons[10]} alt="favicon" />}
      </div>
      <div className="designdev">
        <span>
          Design. Development. Design. Development. Design. Development. Design.
          Development. Design. Development. Design. Development. Design.
          Development. Design. Development. Design. Development. Design.
          Development. Design. Development. Design. Development. Design.
          Development. Design. Development. Design. Development. Design.
          Development. Design. Development. Design. Development. Design.
          Development. Design. Development.
        </span>
      </div>
      <div className="tyler">
        <span>
          TYLER.TYLER.TYLER.TYLER.TYLER. TYLER.TYLER.TYLER.TYLER.TYLER.
        </span>
      </div>

      <div className="homan">
        <span>
          HOMAN.HOMAN.HOMAN.HOMAN.HOMAN. HOMAN.HOMAN.HOMAN.HOMAN.HOMAN.
        </span>
      </div>
      <div className="git" hidden>
        <a
          href="https://github.com/TylerHoman"
          target="_blank"
          rel="noreferrer"
        >
          {Content && <img src={Content.icons[9]} alt="JavaScript" />}
        </a>
      </div>
    </div>
  );
}

export default Landing;
