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
                        <img className="w-[160px] ml-36" src={Photo} alt="picture" style={{width:"150px"}}/>
                    </div>
                    <div>
                        <p>I am a web developer who has a true passion for learning to code. I started with the web basics consisting of HTML and CSS then soon progressed to JavaScript, Node and React. Developing and programming is exciting to me since learning never stops. I enjoy discovering new technologies and building creative projects with what I learn. My goal is to work as a contributing member as a full-stack web developer on a team of co-workers.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About
