import React from 'react';
import Typewriter from "typewriter-effect";

function About2() {
  return (
    <div name='about' id='about' className='w-full h-screen bg-[#0a192f] text-grey-300 scroll-smooth' >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-row-2 gap-2'>
          <div className=' pb-8 text-center py-4 justify-center'>
            <p className='text-4xl font-bold inline border-b-4 py-2 border-yellow-500 text-[#ccd6f6]'>About</p>
          </div>
          <div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p className='text-[#ccd6f6]'>
                <Typewriter onInit={(typewriter) => {
                  typewriter.typeString("Hi, I'm a Full Stack Developer.").start();
                }} /></p>
            </div>
            <div>
              <p className='text-[#8892b0]'>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-business all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About2
