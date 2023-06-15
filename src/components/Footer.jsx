import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaDownload,
  FaLinkedin
} from 'react-icons/fa';



function Footer() {
  return (
    <div className='w-full bg-black py-6 px-2 text-[#ccd6f6]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 border-gray-600 py-8'>
        <div>
          <h6 className='font-bold uppercase pt-2 text-gray-500'>GitHub</h6>
          <ul>
            <li className='py-1 text-[#8892b0]'></li>
            <li><a className='border-none bg-transparent text-white mr-4  hover:text-blue-600' href='https://github.com/Tam55si' target="_blank" rel="noreferrer"><FaGithub /></a></li>

          </ul>

        </div>
        <div>
          <h6 className='font-bold uppercase pt-2 text-gray-500'>Twitter</h6>
          <ul>
            <li className='py-1 text-[#8892b0]'></li>
            <li><a className='border-none bg-transparent text-white mr-4 hover:text-blue-600' href='https://www.linkedin.com/in/tanmoy-si-1a2329b4/' target="_blank" rel="noreferrer"><FaLinkedin /></a></li>

          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2 text-gray-500'>LinkedIn</h6>
          <ul>
            <li className='py-1 text-[#8892b0]'></li>
            <li><a className='border-none bg-transparent text-white mr-4 hover:text-blue-600' href='https://twitter.com/tanmoy_si' target="_blank" rel="noreferrer"><FaTwitter /></a></li>

          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2 text-gray-500'>download my resume</h6>
          <ul>
            <li className='py-1 text-[#8892b0]'></li>
            <li><a href={'/resume_tanmoy_si.pdf'} download={"resume_tanmoy_si"} target="_blank"
              rel="noreferrer"><FaDownload /></a></li>

          </ul>

        </div>

        <div className='flex max-w-[1240px] py-5'>
          <p className='uppercase sm:max-w-[300px] text-gray-500 font-bold'>2023 ©Tanmoy Si</p>
        </div>
      </div>
      <div className='flex max-w-[1240px] m-auto justify-between flex-grow h-px bg-gray-900 sm:flex-row text-center px-2 py-1'>

      </div>
    </div>
  )
}

export default Footer;
