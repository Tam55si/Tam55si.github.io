import React from 'react';
import bgimg from '../assets/agency.webp';
import { ArrowSmRightIcon, DesktopComputerIcon } from '@heroicons/react/solid';

function Projects() {
  return (
    <div className='w-full h-screen mt-24'>
      <div className='w-full h-[700px] absolute bg-gray-800/90'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={bgimg} alt="/" />
      </div>
      <div className='max-w-[1240px] mx-auto text-white relative'>
      <div className='px-4 py-12'>
        <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Projects</h2>
        <h3 className='text-5xl font-bold py-6 text-center'>Web Development Projects</h3>
        <p className='py-4 text-3xl text-slate-300 text-center'>Projects that are build using React </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sn:pt-20 text-black'>
        <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <DesktopComputerIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <p className='font-bold text-2xl my-6'>Project 1</p>
                <p className='text-gray-600 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eos exercitationem sit nesciunt vitae natus aliquam et voluptate tenetur ea similique, deleniti doloribus error voluptatem cupiditate illum culpa voluptas aperiam.</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'>More Information on the Project <ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <DesktopComputerIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <p className='font-bold text-2xl my-6'>Project 2</p>
                <p className='text-gray-600 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eos exercitationem sit nesciunt vitae natus aliquam et voluptate tenetur ea similique, deleniti doloribus error voluptatem cupiditate illum culpa voluptas aperiam.</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'>More Information on the Project <ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
                <DesktopComputerIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <p className='font-bold text-2xl my-6'>Project 3</p>
                <p className='text-gray-600 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eos exercitationem sit nesciunt vitae natus aliquam et voluptate tenetur ea similique, deleniti doloribus error voluptatem cupiditate illum culpa voluptas aperiam.</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'>More Information on the Project <ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
        </div>
        
      </div>
      <br />
      <div className='bg-slate-100 pl-8 py-4 rounded-xl shadow-2xl'>
                <p className='flex items-center text-indigo-600'>See all Projects <ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
      </div>
    </div>
  )
}

export default Projects
