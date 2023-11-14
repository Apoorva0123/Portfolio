import React from "react";
import Overstock from "../assets/overstock.png";
import Expedia from "../assets/expedia.png";
const Projects = () => {
  return (
    <div name="work" className="w-full md:h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Overstock})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Overstock-Clone
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://overstock-clone-unit-4.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Apoorva0123/Overstock"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="border-2 border-pink-600 rounded-md">
            <h3 className="font-bold text-3xl text-center border-b-2 border-pink-600">
              Overstock-Clone
            </h3>
            <p className="text-center">
              Overstock.com is a website where we can buy furniture and home
              decor items. It has wide ranging products in furniture decor
              categories.
            </p>
          </div>

          <div className="border-2 border-pink-600 rounded-md">
            <h3 className="font-bold text-3xl text-center border-b-2 border-pink-600">
              Tech-Stack
            </h3>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>MongoDB</li>
            <div className="pt-8 text-center">
              <a
                href="https://overstock-clone-unit-4.netlify.app/"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/Apoorva0123/Overstock"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Expedia})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Expedia-Clone
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://project-expedia-masai.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Apoorva0123/Project_Expedia_Masai"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="border-2 border-pink-600 rounded-md">
            <h3 className="font-bold text-3xl text-center border-b-2 border-pink-600">
              Expedia-Clone
            </h3>
            <p className="text-center">
              Expedia is one of the fastest growing online travel portals in
              Asia, offering travellers an extensive selection of hotels,
              activities and travel services to meet every budget and activities
              of every kind at competitive rates.
            </p>
          </div>

          <div className="border-2 border-pink-600 rounded-md">
            <h3 className="font-bold text-3xl text-center border-b-2 border-pink-600">
              Tech-Stack
            </h3>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <div className="pt-8 text-center">
              <a
                href="https://project-expedia-masai.vercel.app/"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/Apoorva0123/Project_Expedia_Masai"
                target="_blank"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
