import React from 'react';
import text from '../assets/text_utils.jpg';
import todo from '../assets/todolist.png';
import expense from '../assets/expensemaster.png';
import joninc from '../assets/joninc.jpg'


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: text,
      link: "https://sentencetranslator-tanmoy1.vercel.app/",
      github: "https://github.com/Tam55si/sentence-modifier",
    },
    {
      id: 2,
      src: todo,
      link: "https://todowizard.vercel.app/",
      github: "https://github.com/Tam55si/ToDoWizard",
    },
    {
      id: 3,
      src: expense,
      link: "https://weak-gold-monkey-sock.cyclic.app/",
      github: "https://github.com/Tam55si/ExpenseMaster",
    },
    {
      id: 4,
      src: joninc,
      link: "https://jobinc-tanmoy.vercel.app/",
      github: "https://github.com/Tam55si/jobINC-frontend",
    },
  ];

  return (
    <div
      name="portfolio" id='portfolio'
      className="bg-[#0a192f] w-full text-white md:h-screen pt-6"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center text-center w-full h-full">
        <div className="pb-8  justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500 py-2 justify-center">
            Projects
          </p>
          <p className="py-12">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="project"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `${link}`;
                }}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `${github}`;
                }}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;