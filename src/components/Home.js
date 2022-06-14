import React from "react";
import heroImg from "../assets/images/Noor.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-600"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full sm:mt-10 md:mt-0">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white ">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 text-justify">
            I have 2 years of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React, Tailwind css, Next JS and GraphQL. It is always exciting to
            work on new projects by sharing the knowledge I have and getting the
            valuable viewpoints from others.
          </p>
          <div>
            <button className="text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroImg}
            alt="Profile_pic"
            className="rounded-2xl mx-auto w-full md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
