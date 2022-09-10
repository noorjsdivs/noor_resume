import React from "react";
import {
  cyberBlogImg,
  reactBlogImg,
  amazonImg,
  aaqhseImg,
  modernPaymentImg,
  sharaImg,
  groupImg,
  resumeOneImg,
  resumeTwoImg,
  sliderImg,
  galleryImg,
} from "../assets/Assets";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Projects = () => {
  const projects = [
    {
      id: 3000,
      src: cyberBlogImg,
      title: "Cyber Security Blog",
      href: "https://noormohammad.live/",
    },
    {
      id: 3001,
      src: reactBlogImg,
      title: "Personal Blog",
      href: "https://my-blog-delta-eight.vercel.app/",
    },
    {
      id: 3002,
      src: amazonImg,
      title: "Amazon clone",
      href: "https://amazonproone.vercel.app/",
    },
    {
      id: 3003,
      src: aaqhseImg,
      title: "AA QHSE Demo",
      href: "https://aaoman.vercel.app/",
    },
    {
      id: 3004,
      src: modernPaymentImg,
      title: "Modern Payment Gateway",
      href: "https://modernpayment.vercel.app/",
    },
    {
      id: 3005,
      src: sharaImg,
      title: "Sahara Website Demo",
      href: "https://unknown2832021.github.io/Sahara_New_Beginning/",
    },
    {
      id: 3006,
      src: groupImg,
      title: "Group Work",
      href: "https://noormohammad-profile.netlify.app/",
    },
    {
      id: 3007,
      src: resumeOneImg,
      title: "Resume Test_Two",
      href: "https://noorjsdivs.github.io/portfolio-2/",
    },

    {
      id: 3008,
      src: resumeTwoImg,
      title: "Resume Test_One",
      href: "https://noorjsdivs.github.io/portfolio/",
    },
    {
      id: 3009,
      src: sliderImg,
      title: "Image Slider",
      href: " https://unknown2832021.github.io/slider/",
    },

    {
      id: 3010,
      src: galleryImg,
      title: "Image Gallery",
      href: "https://unknown2832021.github.io/image-viewer/",
    },
  ];
  return (
    <div name="projects" className=" w-full text-white h-full mt-10 lg:mt-0">
      <div className="max-w-7xl px-4 py-12 shadow-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <div className="flex items-center">
            <p className="text-4xl flex font-bold  border-b-4 border-cyan-500">
              Projects
            </p>
            <span className="text-gray-400 ml-4 mt-3">
              <BsFillArrowDownCircleFill size={30} className="animate-bounce" />
            </span>
          </div>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-12 px-12 sm:px-0 h-full max-w-screen-xl mx-auto">
          {projects.map(({ id, src, title, href }) => (
            <div
              key={id}
              className="bg-cyan-500 h-logical mb-6 md:mb-0 rounded-lg relative w-96  group overflow-hidden"
            >
              <div>
                <a href={href} target="_blank" rel="noreferrer">
                  <img
                    src={src}
                    alt={title}
                    className="rounded-md w-full mx-auto h-logical object-fill px-2 py-1 hover:scale-105 duration-500 cursor-pointer"
                  />
                  <p className="text-center hidden absolute bottom-0 bg-primary_color w-full py-2 group-hover:inline-flex duration-500 justify-center items-center font-body_font text-2xl">
                    {title}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
