import React from 'react';
import {
   
    CodeIcon,
    TerminalIcon,
    CollectionIcon,
    FolderOpenIcon,
    DocumentReportIcon,
    DatabaseIcon
} from '@heroicons/react/solid';

function About() {
  return (
    <div className='w-full my-32'>
      <div className='text-center'>
        <div className='grid nd:grid-col-3 gap-1 px-2'>
            <div className='flex flex-col py-8 nd:min-w-[760px] bottom-[5%] mx-1 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
          <p className='text-3xl font-medium text-gray-500'>About Me</p>
          <br />
          <p className='text-5xl font-medium'>I am an aspiring (MERN)<br/><br/><p>FULL STACK JAVASCRIPT DEVELOPER</p></p>
          <br />
          <br/>
          <p className='text-3xl font-medium text-gray-500'>I'm interested in the below tech stack</p>
          <br />
          <br/>
          <div className='px-4'>
          <div className='flex justify-center'>
            <p className='flex px-4 py-2 text-slate-500'><CodeIcon className='h-6 text-indigo-600' /> &nbsp;HTML, CSS, Javascript</p>
            <p className='flex px-4 py-2 text-slate-500'><TerminalIcon className='h-6 text-indigo-600'/>&nbsp;Node.js, Express.js</p>
          </div>
          <div className='flex justify-center'>
            <p className='flex px-4 py-2 text-slate-500'><CodeIcon className='h-6 text-indigo-600'/>&nbsp;React.js, Nest.js, Material UI</p>
            <p className='flex px-4 py-2 text-slate-500'><CollectionIcon className='h-6 text-indigo-600'/> &nbsp;Git, GitHub</p>
            </div>
            <div className='flex justify-center'>
            <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600'/> &nbsp;Mongo DB</p>
            <p className='flex px-4 py-2 text-slate-500'><FolderOpenIcon className='h-6 text-indigo-600'/> &nbsp;NPM, Yarn</p>
            </div>
            <div className='flex justify-center'>
            <p className='flex px-4 py-2 text-slate-500'><DocumentReportIcon className='h-6 text-indigo-600'/> &nbsp;React Context API, Redux(Toolkit)</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About;
