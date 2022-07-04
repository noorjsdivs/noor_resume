import React from "react";
import ReactImg from "../assets/images/icons/react.png";
import NextImg from "../assets/images/icons/nextjs.png";
import JsImg from "../assets/images/icons/javascript.png";
import NodeImg from "../assets/images/icons/node.png";
import TailwindImg from "../assets/images/icons/tailwind.png";
import HtmlImg from "../assets/images/icons/html.png";
import CssImg from "../assets/images/icons/css.png";
import GithubImg from "../assets/images/icons/github.png";
import { BsCodeSlash, BsFillArrowDownCircleFill } from "react-icons/bs";

const Experience = () => {
  const techs = [
    {
      id: 4001,
      src: ReactImg,
      title: "react",
      skill_1: "Function(al) Components",
      skill_2: "React Hooks",
      skill_3: "React Context API",
      skill_4: "Redux",
      skill_5: "Styled-components",
      icon: (
        <BsCodeSlash
          size={20}
          className="group-hover:animate-pulse  group-hover:text-cyan-400"
        />
      ),
      style: "hover:shadow-blue-600",
    },
    {
      id: 4002,
      src: NextImg,
      title: "next js",
      skill_1: "Basic Features",
      skill_2: "Advance Layouts",
      skill_3: "Routing",
      skill_4: "Api Routes",
      skill_5: "Deployment & Authentication",
      icon: (
        <BsCodeSlash
          size={20}
          className="group-hover:animate-pulse  group-hover:text-white"
        />
      ),
      style: "hover:shadow-white",
    },
    {
      id: 4003,
      src: JsImg,
      title: "javascript",
      skill_1: "JavaScript building blocks",
      skill_2: "JavaScript Instantiation Patterns",
      skill_3: "JavaScript typed arrays",
      skill_4: "client-side JavaScript frameworks",
      skill_5: "Asynchronous JavaScript",
      icon: (
        <BsCodeSlash
          size={20}
          className="group-hover:animate-pulse  group-hover:text-yellow-400"
        />
      ),
      style: "hover:shadow-yellow-500",
    },
    {
      id: 4004,
      src: NodeImg,
      title: "node",
      skill_1: "Web application frameworks",
      skill_2: "Security",
      skill_3: "Package management",
      skill_4: "Cloud platforms",
      skill_5: "Source control",
      icon: (
        <BsCodeSlash
          size={20}
          className="group-hover:animate-pulse  group-hover:text-green-400"
        />
      ),
      style: "hover:shadow-orange-500",
    },
    {
      id: 4005,
      src: TailwindImg,
      title: "Tailwindcss",
      skill_1: "Optimizing for Production",
      skill_2: "Responsive Design",
      skill_3: "Reusing Styles",
      skill_4: "Advanced Customization",
      skill_5: "Custom Styles & Functions",
      icon: (
        <BsCodeSlash
          size={20}
          className="group-hover:animate-pulse  group-hover:text-cyan-500"
        />
      ),
      style: "hover:shadow-sky-400",
    },

    {
      id: 4007,
      src: HtmlImg,
      title: "html",
      skill_1: "Multimedia and embedding",
      skill_2: "Basic HTML elements",
      skill_3: "Global attributes",
      skill_4: "Input types",
      skill_5: "HTML tables",
      icon: (
        <BsCodeSlash
          size={20}
          className="group-hover:animate-pulse  group-hover:text-orange-400"
        />
      ),
      style: "hover:shadow-blue-500",
    },
    {
      id: 4008,
      src: CssImg,
      title: "css",
      skill_1: "CSS building blocks",
      skill_2: "Styling text & Layout",
      skill_3: "Modules & Selectors",
      skill_4: "Advance Guides",
      skill_5: "Responsive Structures",
      icon: (
        <BsCodeSlash
          size={20}
          className="group-hover:animate-pulse  group-hover:text-blue-400"
        />
      ),
      style: "hover:shadow-orange-500",
    },
    {
      id: 4009,
      src: GithubImg,
      title: "git & github",
      skill_1: "Git Auto Completion",
      skill_2: "Git system Management",
      skill_3: "Staging and Commits",
      skill_4: "Connecting remote repository",
      skill_5: "Github data Stroage system",
      icon: (
        <BsCodeSlash
          size={20}
          className="group-hover:animate-pulse  group-hover:text-gray-400"
        />
      ),
      style: "hover:shadow-gray-400",
    },
  ];
  return (
    <div name="experience" className=" w-full text-white h-full py-4">
      <div className="max-w-7xl py-12 px-4 mx-auto flex flex-col border-primary_color border-b-2 justify-center w-full h-full">
        <div>
          <div className="flex items-center">
            <p className="text-4xl flex font-bold  border-b-4 border-cyan-500">
              Experiences
            </p>
            <span className="text-gray-400 ml-4 mt-3">
              <BsFillArrowDownCircleFill size={30} className="animate-bounce" />
            </span>
          </div>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>
        <div className="w-full px-24 lg:px-0 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center py-8  sm:px-0">
          {techs.map(
            ({
              id,
              src,
              title,
              style,
              skill_1,
              skill_2,
              skill_3,
              skill_4,
              skill_5,
              icon,
            }) => (
              <div key={id}>
                <div
                  className={`shadow-md hover:scale-105 group  duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="react" className="w-32 mx-auto h-full" />
                  <p className="mt-4 text-left ml-4 text-gray-200 group-hover:underline underline-offset-2 duration-500 uppercase">
                    {title}
                  </p>
                  <div className="text-left ml-4 text-sm text-gray-400 group-hover:text-white duration-300">
                    <p className="flex">
                      <span className="mr-2"> {icon}</span>
                      {skill_1}
                    </p>
                    <p className="flex">
                      <span className="mr-2"> {icon}</span>
                      {skill_2}
                    </p>
                    <p className="flex">
                      <span className="mr-2"> {icon}</span>
                      {skill_3}
                    </p>
                    <p className="flex">
                      <span className="mr-2"> {icon}</span>
                      {skill_4}
                    </p>
                    <p className="flex">
                      <span className="mr-2"> {icon}</span>
                      {skill_5}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
