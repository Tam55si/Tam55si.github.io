// import "./App.css";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Smooth() {
  return (
    <>
      <section id="header">
        <Navbar />
      </section>
      <div className="flex flex-col h-screen items-center justify-center additional gap-3">
        <h1 className="text-5xl">TailwindCSS & React.js</h1>
        <h2 className="text-3xl pb-5">smooth scrolling behavior</h2>
        <div className="flex gap-5 items-center justify-center text-2xl underline bg-white rounded-md p-2">
          <a href="#one" className="text-orange-600">
            Section One
          </a>
          <a href="#two" className="text-red-600">
            Section Two
          </a>
          <a href="#three" className="text-green-700">
            Section Three
          </a>
        </div>
      </div>
      <div className="text-center text-3xl">
        <section id="one" className="h-screen bg-orange-600">
          Section One
        </section>
        <About />
        <section id="two" className="h-screen bg-red-600">
          Section Two
        </section>
        <Hero />
        <section id="three" className="h-screen bg-green-700">
          Section Three
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Smooth;