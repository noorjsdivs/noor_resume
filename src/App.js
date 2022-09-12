import React from "react";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import Pagination from "./components/Pagination";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
// import { projects } from "./constants.js";

function App() {
  return (
    <div>
      <NavBar />
      <div
        className="bg-gradient-to-b from-secondry_color
       to-slate-600 w-full mx-auto"
      >
        <div className="max-w-screen-xl mx-auto">
          <Home />
          <SocialLinks />
          <About />
          <Projects />
          {/* <Pagination  /> */}
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
