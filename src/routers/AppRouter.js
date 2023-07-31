import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Works from "../pages/PageWorks";
import About from "../pages/PageAbout";
import Landing from "../pages/PageLanding";
import "../scss/styles.scss";
import Capstone from "../pages/Capstone";
import HiLo from "../pages/HiLo";
import MovieDatabase from "../pages/MovieDatabase";
import WebSite from "../pages/Website";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Nav />

        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/works" exact element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/capstone" element={<Capstone />} />
            <Route path="/hilo" element={<HiLo />} />
            <Route path="/movie-database" element={<MovieDatabase />} />
            <Route path="/website" element={<WebSite />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default AppRouter;
