import React from "react";
import heroImg from "../assets/images/Noor_1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { HiCode } from "react-icons/hi";

const Home = () => {
  const frameworks = [
    {
      id: 701,
      title: "javaScript",
      href: "https://www.javascript.com/",
    },
    {
      id: 702,
      title: "React",
      href: "https://reactjs.org/",
    },
    {
      id: 703,
      title: "Next js",
      href: "https://nextjs.org/",
    },
    {
      id: 704,
      title: "Node",
      href: "https://nodejs.org/en/",
    },
    {
      id: 705,
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
    },
    {
      id: 706,
      title: "Express",
      href: "https://expressjs.com/",
    },
    {
      id: 707,
      title: "MongoDB",
      href: "https://www.mongodb.com/",
    },
    {
      id: 708,
      title: "Firebase",
      href: "https://firebase.google.com/",
    },
    {
      id: 709,
      title: "HTML",
      href: "https://html.com/",
    },
    {
      id: 710,
      title: "CSS3",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 711,
      title: "Tailwind",
      href: "https://tailwindcss.com/",
    },
    {
      id: 712,
      title: "github",
      href: "https://github.com/",
    },
  ];
  return (
    <div name="home" className="w-full h-auto py-20 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col  w-5/6  justify-center h-full sm:mt-10 md:mt-0">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white ">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-400 pt-4 pb-2 text-justify">
            I have 2 years of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React, Tailwind css, Next JS and GraphQL. It is always exciting to
            work on new projects by sharing the knowledge I have and getting the
            valuable viewpoints from others.
          </p>
          <p className="text-gray-400 pt-4 pb-3 text-justify">
            Please check out the most common Framework I am using:
          </p>
          <div>
            <div className="flex">
              <ul className="text-gray-300 hidden mb-3 font-semibold lg:grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 justify-between w-full  h-auto ">
                {frameworks.map(({ id, title, href }) => (
                  <div key={id} className="">
                    <a href={href} target="_blank">
                      <li className="favSubjectList">
                        <span className=" favSubject favSubjectHover ">
                          <HiCode size={20} />
                          {title}
                        </span>
                      </li>
                    </a>
                  </div>
                ))}
                {/* <li className="favSubjectList">
                  <span className="favSubject favSubjectHover">
                    <HiCode size={20} />
                    React
                  </span>
                </li>
                <li className="favSubjectList">
                  <span className="favSubject favSubjectHover">
                    <HiCode size={20} />
                    Next js
                  </span>
                </li>
                <li className="favSubjectList">
                  <span className=" favSubject favSubjectHover ">
                    <HiCode size={20} />
                    HTML-5
                  </span>
                </li> */}
              </ul>
            </div>
          </div>

          <div>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-primary_color to-extra_color cursor-pointer hover:bg-gradient-to-t duration-300 "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="bg-cyan-300 rounded-2xl border-none">
          <a
            href="http://localhost:3000/static/media/Noor_1.b07195c1451c29e845c7.jpg"
            target="_blank"
          >
            <img
              src={heroImg}
              alt="Profile_pic"
              className="rounded-2xl mx-auto w-full md:w-full hover:-translate-y-2 hover:-translate-x-2 duration-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
