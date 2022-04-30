import React from 'react';
import Photo from "../assets/Passport_pic2.jpg";

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='mx-auto'>
                        <img src={Photo} alt="picture" style={{width:"150px"}}/>
                    </div>
                    <div>
                        <p>I am passionate about building web applications that makes lives easier of those around me. I specialise in creating websites for clients.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About