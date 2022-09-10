import React, { useRef, useEffect } from "react";
import heroImg from "../assets/images/Noor_1.jpg";
import { ImSpinner9 } from "react-icons/im";
import { Link } from "react-scroll";
import { HiCode } from "react-icons/hi";
import Typed from "typed.js";

const Home = () => {
  const typeTarget = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        "Amazon Clone_",
        "Personal Blogs_",
        "Twitter Clone_",
        "Resume Demo_",
      ],
      typeSpeed: 120,
      smartBackspace: true,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

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
    <div name="home" className="w-full h-auto  ">
      <div className="max-w-7xl mx-auto flex flex-col py-20 shadow-md hover:border-b-2 border-primary_color gap-8 items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col  w-5/6  justify-center h-full sm:mt-10 md:mt-0">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white ">
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-400 hover:text-gray-50 duration-200 pt-4 pb-2 text-justify">
            I have 2 years of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React, Tailwind css, Next JS, Sanity and many more. It is always
            exciting to work on new projects by sharing the knowledge I have and
            getting the valuable viewpoints from others.
          </p>
          <p className="text-gray-400 pt-4 pb-3 text-justify">
            Please check out the most common Framework I am using:
          </p>
          <div>
            <div className="flex">
              <ul className="text-gray-300 hidden mb-3 font-semibold lg:grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 justify-between w-full  h-auto ">
                {frameworks.map(({ id, title, href }) => (
                  <div key={id} className="">
                    <a href={href} target="_blank" rel="noreferrer">
                      <li className="favSubjectList">
                        <span className=" favSubject favSubjectHover ">
                          <HiCode size={20} />
                          {title}
                        </span>
                      </li>
                    </a>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center ">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-white group w-fit px-6 py-3 mt-4 flex items-center rounded-md bg-gradient-to-r from-primary_color to-extra_color cursor-pointer hover:bg-gradient-to-t duration-300 "
            >
              Projects
              <span>
                <ImSpinner9
                  size={20}
                  className="ml-2 text text-primary_color animate-spin group-hover:text-cyan-400"
                />
              </span>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <h3 className="text-gray-400 group text-sm  ml-6 -mt-6 pt-4 md:text-lg absolute font-semibold  duration-500 cursor-pointer">
                Some of my finished projects inclueds:
                <span
                  className="text-sm md:text-2xl  text-gray-200 ml-2 tracking-widest"
                  ref={typeTarget}
                ></span>
                <span className="w-1 h-0.5 bg-transparent group-hover:bg-cyan-400 inline-block absolute -bottom-1 left-0 group-hover:w-full duration-700 rounded-md"></span>
              </h3>
            </Link>
          </div>
        </div>
        <div className="bg-cyan-300 rounded-2xl border-none">
          <a
            href="https://noormohmmad.com/static/media/Noor_1.b07195c1451c29e845c7.jpg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={heroImg}
              alt="Profile_pic"
              className="rounded-2xl mx-auto w-full md:w-full hover:-translate-y-2 hover:-translate-x-2 duration-500 brightness-75 hover:brightness-100"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
