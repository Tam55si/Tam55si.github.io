import React from 'react';
import back1 from '../assets/back1.png';
import profileimg from '../assets/profileimg.png';

function Home3() {
    return (
        <div className='h-[100%] flex justify-around'>
            <div className='w-[30%] h-[100%] float-left relative'>
                <div className='w-[20%] h-[40%] top-[130px] left-[100px] absolute'>
                    <img src={back1} alt='background' className='bottom-0 left-0 absolute h-[80%] w-auto' />
                    <img src={profileimg} alt='background' className='bottom-0 left-0 absolute h-[100%] w-auto translate-x-[-18.5%]' />
                </div>
            </div>
            <div className='w-[50%] float-right relative bg-gray-600'>
                <p>About</p>
            </div>
        </div>
    )
}

export default Home3
