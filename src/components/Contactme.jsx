import React from "react";
import {
  IoLogoLinkedin, IoLogoGithub
} from 'react-icons/io';
import { IoLocation, IoMail } from "react-icons/io5";

const Contactme = () => {
  return (
    // <div
    //   name="contact"
    //   className="w-full h-screen bg-gradient-to-b from-[#0a192f] via-black to-black text-gray-300"
    // >
    //   <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
    //     <div className="pb-8 text-center">
    //       <p className="text-4xl font-bold inline border-b-4 py-2 border-yellow-500">
    //         Contact me
    //       </p>
    //       <p className="py-6">Submit the form below to get in touch with me</p>
    //     </div>

    //     <div className=" flex justify-center items-center">
    //       <form
    //         action="https://getform.io/f/e489c281-2f74-4fd4-be61-cdca5e4acc7c"
    //         method="POST"
    //         className=" flex flex-col w-full md:w-1/2"
    //       >
    //         <input
    //           type="text"
    //           name="name"
    //           placeholder="Enter your name"
    //           className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
    //         />
    //         <input
    //           type="text"
    //           name="email"
    //           placeholder="Enter your email"
    //           className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
    //         />
    //         <textarea
    //           name="message"
    //           placeholder="Enter your message"
    //           rows="10"
    //           className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
    //         ></textarea>

    //         <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
    //           Let's talk
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className='antialiased bg-gradient-to-b from-[#0a192f] via-black to-black' name='contact' id="contact">
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className=' flex flex-col space-y-6 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-gray-300 md:flex-row md:space-x-6 md:space-y-0 mb-14'>

          <div className='flex flex-col justify-between space-y-8'>

            <div>
              <h1 className='font-bold text-4xl text-center border-b-2 border-yellow-500 py-2'>Contact me</h1>
              <p className='pt-6 text-gray-100 text-sm'>Hello! my name is  Tanmoy Si motivated fresher
                pursuing a career as a full-stack developer </p>
            </div>
            <div className='flex flex-col space-y-6'>
              {/* <div className='inline-flex space-x-2 items-center'><IoMdCall className=' text-xl' /><span>+919874229022</span></div> */}
              <div className='inline-flex space-x-2 items-center'><IoMail className=' text-xl' /><span>tanmoy.si20@gmail.com</span></div>
              <div className='inline-flex space-x-2 items-center'><IoLocation className=' text-xl' /><span>Kolkata, India</span></div>
            </div>
            <div className='flex space-x-4 text-lg'>
              <a href='https://www.linkedin.com/in/tanmoy-si-1a2329b4/' target="_blank" rel="noreferrer"><IoLogoLinkedin /></a>
              <a href='https://github.com/Tam55si' target="_blank" rel="noreferrer"><IoLogoGithub /></a>

            </div>
          </div>
          <div>
            <div className='  rounded-xl shadow-lg p-8 text-black md:w-[80]' >
              <form className='flex flex-col space-y-4' action="https://getform.io/f/e489c281-2f74-4fd4-be61-cdca5e4acc7c" method="POST">
                <div>
                  <label htmlFor='' className='text-sm'>Your Name</label>

                  <input type='text' placeholder='Your Name' name='name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2 bg-gray-200' />
                </div>
                <div>
                  <label htmlFor='' className='text-sm'>Your Email id</label>

                  <input type='email' placeholder='Your Email' name='email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2 bg-gray-200' />
                </div>
                <div>
                  <label htmlFor='' className='text-sm'>Your Message</label>

                  <textarea placeholder='Your Message' rows="4" name='text' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2 bg-gray-200' />
                </div>
                <button className='inline-block self-center bg-blue-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm' type='submit'>Submit</button>
              </form>
            </div></div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;