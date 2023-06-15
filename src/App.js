import React from "react";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
import Contactme from "./components/Contactme";
// import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import About2 from "./components/About2";

import Experience from "./components/Experience";
import Home2 from "./components/Home2";
import Portfolio from "./components/Portfolio";
import Home3 from "./components/Home3";
// import Smooth from "./components/Smooth";


function App() {
  return (
    <>
      <Navbar />
      {/* <Home3 /> */}
      <Home2 />

      <About2 />
      <Experience />
      <Portfolio />
      <Contactme />
      <Footer />

    </>
  )
}

export default App;
