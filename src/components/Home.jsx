import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Apoorva Kaniti
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Full-Stack Web Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a full-stack Developer specialised in MERN stack. I am currently
          focused on building responsive full-stack web applications
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/1Y_TIBbw_U0c3lprxxC1apMbK_nEIfhJd/view?usp=sharing"
            target="_blank"
          >
            <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              Resume <HiArrowNarrowRight className="ml-4" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
