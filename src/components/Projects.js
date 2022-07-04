import React from "react";
import blogImg from "../assets/images/projects/blog.png";
import profileImg from "../assets/images/projects/dashboard.png";
import qhseImg from "../assets/images/projects/qhse.png";
import SaharaImg from "../assets/images/projects/sahara.png";
import Gallery from "../assets/images/projects/gallery.png";
import Slider from "../assets/images/projects/slider.png";
import resume_01 from "../assets/images/projects/resume_01.png";
import resume_02 from "../assets/images/projects/resume_02.png";
import TwitterImg from "../assets/images/projects/twitter.png";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Projects = () => {
  const projects = [
    {
      id: 3002,
      src: blogImg,
      title: "Personal Blog",
      href: "https://www.noormohammad.live/",
    },
    {
      id: 3003,
      src: qhseImg,
      title: "AA QHSE Demo",
      href: "https://aaoman.vercel.app/",
    },
    {
      id: 3006,
      src: SaharaImg,
      title: "Sahara Website Demo",
      href: "https://unknown2832021.github.io/Sahara_New_Beginning/",
    },
    {
      id: 3004,
      src: profileImg,
      title: "Group Work",
      href: "https://noormohammad-profile.netlify.app/",
    },
    {
      id: 3005,
      src: Gallery,
      title: "Image Gallery",
      href: "https://unknown2832021.github.io/image-viewer/",
    },

    {
      id: 3007,
      src: resume_01,
      title: "Resume Test_One",
      href: "https://noorjsdivs.github.io/portfolio/",
    },
    {
      id: 3008,
      src: Slider,
      title: "Image Slider",
      href: " https://unknown2832021.github.io/slider/",
    },
    {
      id: 3001,
      src: TwitterImg,
      title: "Twitter Clone",
      href: "https://www.noormohammad.live/",
    },
    {
      id: 3009,
      src: resume_02,
      title: "Resume Test_Two",
      href: "https://noorjsdivs.github.io/portfolio-2/",
    },
  ];
  return (
    <div name="projects" className=" w-full text-white h-full mt-10 lg:mt-0">
      <div className="max-w-7xl px-4 py-12 shadow-md mx-auto flex flex-col justify-center w-full h-full">
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

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-12 px-12 sm:px-0 h-full ">
          {projects.map(({ id, src, title, href }) => (
            <div
              key={id}
              className="bg-cyan-400 h-logical mb-6 md:mb-0 rounded-lg relative w-96  group overflow-hidden"
            >
              <div>
                <a href={href} target="_blank" rel="noreferrer">
                  <img
                    src={src}
                    alt={title}
                    className="rounded-md w-full mx-auto h-logical hover:scale-105 duration-500 cursor-pointer"
                  />
                  {/* <p className="imgTextDesign font-semibold text-lg">{title}</p> */}
                  <p className="text-center hidden absolute bottom-0 bg-primary_color w-full py-2 group-hover:inline-flex duration-500 justify-center items-center font-body_font text-2xl">
                    {title}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="max-w-7xl mx-auto">
        <div className="flex-col">
          <div className="flex lg:col-span-2 px-4 justify-center md:px-6 lg:px-0 lg:w-full lg:h-full gap-6">
            <div className="w-1/2 h-96 overflow-hidden relative group">
              <a
                href="https://www.noormohammad.live/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={blogImg}
                  className="w-full h-full object-center hover:scale-105 duration-500"
                  alt=""
                />
              </a>
              <p className="text-center hidden absolute bottom-0 bg-primary_color w-full py-3 group-hover:inline-flex duration-500 justify-center items-center font-body_font text-2xl">
                My Blog App
              </p>
            </div>
            <div className="w-1/2  h-96 overflow-hidden relative group">
              <a
                href="https://aaoman.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={qhseImg}
                  className="w-full h-full object-center hover:scale-105 duration-500"
                  alt=""
                />
              </a>
              <p className="text-center hidden absolute bottom-0 bg-primary_color w-full py-3 group-hover:inline-flex duration-500 justify-center items-center font-body_font text-2xl">
                QHSE Demo Profile
              </p>
            </div>
          </div>
          <div className="hidden lg:flex gap-6 mt-6">
            <div className="border-setBorder h-96 w-2/4 border-secondry_color flex-col justify-center items-center">
              <h1 className="text-4xl font-semibold font-title_font px-14 mt-10">
                My Latest Projects
              </h1>
              <p className="text-lg px-14 mt-5">
                Besides doing vairous comapines website, I am also developing
                some of my personal blog, webstore and portfolio webpage and
                ready to share and help the people who need it best.
              </p>
              <button className=" bg-white font-title_font ml-14 mt-8 text-black text-lg px-6 py-2 hover:bg-gray-300 duration-200 cursor-pointer">
                read more
              </button>
            </div>
            <div className="w-1/2  h-96 overflow-hidden relative group">
              <a
                href="https://unknown2832021.github.io/Sahara_New_Beginning/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={SaharaImg}
                  className="w-full h-full object-center hover:scale-105 duration-500"
                  alt=""
                />
              </a>
              <p className="text-center hidden absolute bottom-0 bg-primary_color w-full py-3 group-hover:inline-flex duration-500 justify-center items-center font-body_font text-2xl">
                Sahara Hospitality Demo
              </p>
            </div>
          </div>
          <div className="flex md:px-6 lg:px-0  mt-6 w-full h-full gap-6">
            <div className="w-1/3 h-72 overflow-hidden relative group">
              <a
                href="https://www.noormohammad.live/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={profileImg}
                  className="w-full h-full object-center hover:scale-105 duration-500"
                  alt=""
                />
              </a>
              <p className="text-center hidden absolute bottom-0 bg-primary_color w-full py-3 group-hover:inline-flex duration-500 justify-center items-center font-body_font text-2xl">
                Profile Dashboard App
              </p>
            </div>
            <div className="w-1/3 h-72 overflow-hidden relative group">
              <a
                href="https://www.noormohammad.live/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Gallery}
                  className="w-full h-full object-center hover:scale-105 duration-500"
                  alt=""
                />
              </a>
              <p className="text-center hidden absolute bottom-0 bg-primary_color w-full py-3 group-hover:inline-flex duration-500 justify-center items-center font-body_font text-2xl">
                Image Gallery
              </p>
            </div>
            <div className="w-1/3  h-72 overflow-hidden relative group">
              <a
                href="https://aaoman.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Slider}
                  className="w-full h-full object-center hover:scale-105 duration-500"
                  alt=""
                />
              </a>
              <p className="text-center hidden absolute bottom-0 bg-primary_color w-full py-3 group-hover:inline-flex duration-500 justify-center items-center font-body_font text-2xl">
                Customize Slider
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
