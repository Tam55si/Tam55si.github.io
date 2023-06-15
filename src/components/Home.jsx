import React from 'react';
import { ArrowSmRightIcon } from '@heroicons/react/solid';

function Home() {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
    <div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-yellow-600'>
        Hi, my name is
    </p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tanmoy Si</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] '>I'm a Full Stack Developer.</h2>
    <p className=' text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer specializing in building exceptional digital experience. Currently, I'm focused on building responsive full-stack web applications.</p>
    <div>
        <button className='text-white border-2 px-6 py-3 my-2 flex items-center bg-[#0a192f] hover:bg-yellow-300 hover:border-yellow-200 hover:text-black hover:font-bold'>View Projects
        <ArrowSmRightIcon className='ml-2 hover:rotate-90 duration-300'/>
        </button>
    </div>
    </div>
    </div>
  )
}

export default Home;
