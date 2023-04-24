import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (navBarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavBarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [navBarOpen]);
  function handleBlurOnClick(e) {
    e.target.blur();
  }

  return (
    <>
      <div className="nav">
        {/* <nav className="main-nav" onClick={handleBlurOnClick}> */}
        <nav ref={ref} className="main-nav">
          {/* <nav className="main-nav1" onClick={handleBlurOnClick}></nav> */}

          {/* HOW BUTTON SHOULD LOOK ONCE YOU GET ICONS */}

          <button
            className="toggle"
            onClick={() => setNavBarOpen((prev) => !prev)}
          >
            {navBarOpen ? (
              <MdClose style={{ width: "40px", height: "40px" }} />
            ) : (
              <FiMenu
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            )}
          </button>

          {/* <ul className="nav-links"> */}
          <ul className={`menu-nav${navBarOpen ? " show-menu" : ""}`}>
            <li className="landing">
              <NavLink to="/" onClick={() => setNavBarOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="works">
              <NavLink to="/works" onClick={() => setNavBarOpen(false)}>
                Works
              </NavLink>
            </li>

            <li className="about">
              <NavLink to="/about" onClick={() => setNavBarOpen(false)}>
                About
              </NavLink>
            </li>

            {/* <li className="singletest">
              <NavLink to="/singleworks" onClick={() => setNavBarOpen(false)}>
                single test
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
