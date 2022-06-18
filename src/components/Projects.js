import React from "react";
import AmazonImg from "../assets/images/projects/amazon_clone.png";
import blogImg from "../assets/images/projects/blog.png";
import groupImg from "../assets/images/projects/group.png";
import profileImg from "../assets/images/projects/dashboard.png";
import TwitterImg from "../assets/images/projects/twitter.png";
import SaharaImg from "../assets/images/projects/sahara.png";
import resume_01 from "../assets/images/projects/resume_01.png";
import resume_02 from "../assets/images/projects/resume_02.png";
import fakestoreApi from "../assets/images/projects/fakestore_api.png";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Projects = () => {
  const projects = [
    {
      id: 3001,
      src: AmazonImg,
      title: "Amazon Clone",
      href: "https://www.noormohmmad.com/",
    },
    {
      id: 3002,
      src: blogImg,
      title: "Personal Blog",
      href: "https://www.noormohammad.live/",
    },
    {
      id: 3003,
      src: groupImg,
      title: "Group Project",
      href: "https://mern-2103-gitapp.netlify.app/",
    },
    {
      id: 3004,
      src: profileImg,
      title: "Group Work",
      href: "https://noormohammad-profile.netlify.app/",
    },
    {
      id: 3005,
      src: TwitterImg,
      title: "Twitter Blog",
      href: "https://www.noormohammad.live/",
    },
    {
      id: 3006,
      src: SaharaImg,
      title: "Sahara Website",
      href: "https://unknown2832021.github.io/Sahara_New_Beginning/",
    },
    {
      id: 3007,
      src: resume_01,
      title: "Resume One",
      href: "https://unknown2832021.github.io/Sahara_New_Beginning/",
    },
    {
      id: 3008,
      src: fakestoreApi,
      title: "Fakestore Api",
      href: "https://noormohammad-profile.netlify.app/",
    },
    {
      id: 3009,
      src: resume_02,
      title: "Resume Two",
      href: "https://noorjsdivs.github.io/portfolio-2/",
    },
  ];
  return (
    <div name="projects" className=" w-full text-white h-full">
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

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-12 px-12 sm:px-0 h-full">
          {projects.map(({ id, src, title, href }) => (
            <div
              key={id}
              className="bg-cyan-400 h-logical mb-6 md:mb-0 rounded-lg relative w-96  group"
            >
              <div>
                <a href={href} target="_blank" rel="noreferrer">
                  <img
                    src={src}
                    alt={title}
                    className="rounded-md w-full mx-auto h-logical hover:-translate-y-2 hover:translate-x-2 duration-500 cursor-pointer"
                  />
                  <p className="imgTextDesign font-semibold text-lg">{title}</p>
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
