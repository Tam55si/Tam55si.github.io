import React from 'react';
import { ArrowSmRightIcon } from '@heroicons/react/solid';


// import pgImg from '../assets/profileimg.png';
import pgImg1 from '../assets/img21.png';


function Hero() {
  return (
    <div name='hero' className='w-full h-screen bg-[#0a192f] text-grey-300 pt-16 sm:pt-32' >
    <div className='flex flex-col justify-center items-center w-full h-full'>
       <div className='max-w-[1000px] w-full grid grid-row-2 gap-2'>
        <div className='sm:text-right pb-8 pl-4 md:text-center'>
            <p className='text-4xl font-bold inline text-[#ccd6f6] md:text-5xl animate-bounce animate-twice animate-ease-in-out animate-alternate animate-fill-both'>Welcome To My Website</p>
            <br/>
            <br />
            <p className='text-4xl font-bold inline text-[#ccd6f6] md:text-5xl animate-bounce animate-twice animate-ease-in-out animate-alternate animate-fill-both'>Hi, I'm Tanmoy, nice to meet you.</p>
        </div>
        <div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
        <div className='sm:text-right'>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] '>I'm a Full Stack Developer.</h2>
        <p className=' text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer specializing in building exceptional digital experience. Currently, I'm focused on building responsive full-stack web applications.</p>
        <button className='text-white border-2 px-6 py-3 my-2 flex items-center bg-[#0a192f] hover:bg-yellow-300 hover:border-yellow-200 hover:text-black hover:font-bold'>View Projects
        <ArrowSmRightIcon className='ml-2 hover:rotate-90 duration-300'/>
        </button>
        </div>
        <div className='py-7'>
  
            <img className='sm:w-50 w-96 rounded-full animate-fade-left animate-duration-[2000ms] animate-delay-100 animate-ease-in-out' src={pgImg1} alt='/' />

        </div>
        <div>
        
    </div>
    
    
        
        </div>
       </div> 
    </div>
      
    </div>
  )
}

export default Hero;
