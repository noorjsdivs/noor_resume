import React from "react";
import AmazonImg from "../assets/images/projects/amazon.png";
import blogImg from "../assets/images/projects/blog.png";
import groupImg from "../assets/images/projects/group.png";
import profileImg from "../assets/images/projects/profile.png";
import TwitterImg from "../assets/images/projects/twitter.png";
import SaharaImg from "../assets/images/projects/sahara.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 3001,
      src: AmazonImg,
    },
    {
      id: 3002,
      src: blogImg,
    },
    {
      id: 3003,
      src: groupImg,
    },
    {
      id: 3004,
      src: profileImg,
    },
    {
      id: 3005,
      src: TwitterImg,
    },
    {
      id: 3006,
      src: SaharaImg,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-700 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt="amazon"
                className="rounded-md duration-200 hover:scale-105 h-40 w-full"
              />
              <div className="flex items-center justify-between">
                <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
