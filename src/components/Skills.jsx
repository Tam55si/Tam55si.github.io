import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import jscript from "../assets/javascript.png";
import react from "../assets/react.png";
import mongo from "../assets/mongo.png";
import github from "../assets/github.png";
import node from "../assets/node.png";


function Skills() {
  return (
    <div name="skills" className="bg-[#0a192f] w-full text-gray-300 py-4">
      <div className="max-w-[1000px] mx-auto p-4  justify-center w-full h-full">
        <p className="text-4xl text-grey-300 py-4 border-yellow-500 ">Skills</p>
        <p className="py-4">These are the technologies I have worked with</p>
      </div>
      <div className="max-w-[1000px] mx-auto p-4 grid grid-cols-2 justify-center w-full h-full">
        <div className="w-ful grid grid-cols-1 sm:grid-cols-4 text-center py-8">
          <div className="shadow-md shadow-[#f4926b] hover:scale-110 duration-500 bg-[#061327]">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
        </div>
        <div className="w-ful grid grid-cols-2 sm:grid-cols-4 text-center py-8">
          <div className="shadow-md shadow-[#6fa3e4] hover:scale-110 duration-500 bg-[#061327]">
            <img className="w-20 mx-auto" src={css} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
        </div>
        <div className="w-ful grid grid-cols-2 sm:grid-cols-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={jscript} alt=" icon" />
            <p className="my-4">Javascript</p>
          </div>
        </div>
        <div className="w-ful grid grid-cols-2 sm:grid-cols-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="React icon" />
            <p className="my-4">React</p>
          </div>
        </div>
        <div className="w-ful grid grid-cols-2 sm:grid-cols-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mongo} alt="MongoDB icon" />
            <p className="my-4">MongoDB</p>
          </div>
        </div>
        <div className="w-ful grid grid-cols-2 sm:grid-cols-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
        </div>
        <div className="w-ful grid grid-cols-2 sm:grid-cols-4 text-center py-8">
          <div className="shadow-md shadow-[#6fa3e4] hover:scale-110 duration-500 bg-[#061327]">
            <img className="w-20 mx-auto" src={node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
