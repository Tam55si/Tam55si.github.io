import React from 'react';
import hackathon from '../assets/hackathon.png';
import fullstack from '../assets/full_stack_certificate.png';
import cousera from '../assets/cousera_certificate.png';


const Certificates = () => {
    const certificates = [
        {
          id: 1,
          src: fullstack,
          link: "https://drive.google.com/file/d/1cKvm2ADag_swdUwnPxzQdal219DDduu5/view?usp=sharing",
          text: "Full Stack Development - Bootcamp",
        },
        {
          id: 2,
          src: hackathon,
          link: "https://drive.google.com/file/d/1BJSBM8E5UjSvYWlafHLxgjuipCXUKs1a/view?usp=sharing",
          text: "Full Stack Development - Hackathon",
        },
        {
          id: 3,
          src: cousera,
          link: "https://coursera.org/share/319da548bfb50dd15e614385ff3649a8",
          text: "IBM Full Stack Software Developer - Cousera",
        },
        
    ];

  return (
    <div
    name="certificate" id='certificate'
    className="bg-[#0a192f] w-full text-white md:h-screen pt-6"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center text-center w-full h-full">
      <div className="pb-8  justify-center">
        <p className="text-4xl font-bold inline border-b-4 border-yellow-500 py-2 justify-center">
          Certificates
        </p>
        <p className="py-12">Check out some of my certificates and badges</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {certificates.map(({ id, src, link, text }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt="project"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div><p>{text}</p></div>
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={(e) => {
                e.preventDefault();
                window.open(`${link}`, '_blank'); 
                
              }}>
                View
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};


export default Certificates



