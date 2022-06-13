import React from "react";
import heroImg from "../assets/images/Noor.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-600"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl md:text-5xl font-bold text-white">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4">
            I have 2 years of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React, Tailwind css, Next JS and GraphQL.
          </p>
          <div>
            <button>
              Portfolio
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroImg}
            alt="my Profile Image"
            className="rounded-2xl mx-auto w-5/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
