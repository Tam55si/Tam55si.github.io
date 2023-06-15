import React, { useState } from 'react';
import sign3 from "../assets/sign3.png";
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaHome,
  FaCommentDots,
  FaReadme,
  FaInfoCircle,
  FaBookmark
} from 'react-icons/fa';


function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <div className='w-screen h-[80px] z-10 bg-black fixed drop-shadow-lg text-white'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <img src={sign3} alt="/" className='w-[50px] h-[50px] ml-4' />
          {/* <h1 className='text-3xl font-bold ml-4 sm:text-4xl font-Alkatra cursive'>Tanmoy</h1> */}
          <ul className='hidden md:flex ml-8'>
            <Link className='border-none bg-transparent text-white mr-4 w-full px-3' to="home" spy={true} smooth={true} offset={-100} duration={500}><FaHome /></Link>
            <Link className='border-none bg-transparent text-white mr-4 w-full px-3 ' to="about" spy={true} smooth={true} offset={-100} duration={500}><FaInfoCircle /></Link>
            <Link className='border-none bg-transparent text-white mr-4 w-full px-3 ' to="experience" spy={true} smooth={true} offset={-100} duration={500}><FaReadme /></Link>
            <Link className='border-none bg-transparent text-white mr-4 w-full px-3 ' to="portfolio" spy={true} smooth={true} offset={-100} duration={500}><FaBookmark /></Link>
            <Link className='border-none bg-transparent text-white mr-4 w-full px-3 ' to="contact" spy={true} smooth={true} offset={-100} duration={500}><FaCommentDots /></Link>
          </ul>
        </div>
        <div className='hidden md:flex pr-4 '>
          <a className='border-none bg-transparent text-white mr-4  hover:text-blue-600' href='https://github.com/Tam55si' target="_blank" rel="noreferrer"><FaGithub /></a>
          <a className='border-none bg-transparent text-white mr-4 hover:text-blue-600' href='https://www.linkedin.com/in/tanmoy-si-1a2329b4/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a className='border-none bg-transparent text-white mr-4 hover:text-blue-600' href='https://twitter.com/tanmoy_si' target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-black w-full px-8 text-white'}>
        <li className='border-b-2 border-zinc-300 w-full text-center'><Link className='border-none bg-transparent text-white mr-4 w-full px-3' to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
        <li className='border-b-2 border-zinc-300 w-full text-center'><Link className='border-none bg-transparent text-white mr-4 w-full px-3 ' to="about" spy={true} smooth={true} offset={-100} duration={500}>About Me</Link></li>
        <li className='border-b-2 border-zinc-300 w-full text-center'><Link className='border-none bg-transparent text-white mr-4 w-full px-3 ' to="experience" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link></li>
        <li className='border-b-2 border-zinc-300 w-full text-center'><Link className='border-none bg-transparent text-white mr-4 w-full px-3 ' to="portfolio" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
        <li className='border-b-2 border-zinc-300 w-full text-center'><Link className='border-none bg-transparent text-white mr-4 w-full px-3 ' to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact Me</Link></li>
        <div className='flex flex-col my-4 text-center items-center'>
          <button className='border-none bg-transparent text-white mr-4 px-8 py-3 mb-4'><FaGithub /></button>
          <button className='border-none bg-transparent text-white mr-4 px-8 py-3 mb-4'><FaLinkedin /></button>
          <button className='border-none bg-transparent text-white mr-4 px-8 py-3 mb-4'><FaTwitter /></button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar;
