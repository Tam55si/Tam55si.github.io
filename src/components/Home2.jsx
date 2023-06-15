import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import pgImg1 from '../assets/img21.png';

const Home2 = () => {
  return (
    <div
      name="home" id="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-[#0a192f] sm:text-right scroll-smooth">
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div className="py-8"></div>
          <div>
            <p className='text-yellow-600'>
              Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Tanmoy Si</h1>

            <h2 className="text-4xl sm:text-6xl font-bold py-4 text-[#8892b0]">
              Welcome to my Portfolio Website
              {/* <Typewriter onInit={(typewriter)=> {
            typewriter.typeString("Welcome to my Website").start(); 
            }}/> */}
            </h2>

            {/* <p className="text-gray-500 py-4 max-w-md">
              I'm a full-stack developer specializing in building exceptional digital experience. Currently, I'm focused on building responsive full-stack web applications.
            </p> */}

            {/* <div className="">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit justify-end px-6 py-3 my-2 flex rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div> */}
          </div>
        </div>

        <div className="animate-fade-left animate-duration-1000 animate-delay-500">
          {/* <div className="py-1"></div> */}
          <img
            src={pgImg1}
            // smooth
            // duration={500}
            alt="my profile"
            className="p-8 mx-auto w-9/10 md:w-full hover:animate-jump hover:animate-once hover:animate-duration-[1250ms] hover:animate-delay-[10ms] hover:animate-ease-linear"
          />
        </div>
      </div>
    </div>
  );
};

export default Home2;