import React from "react";
import ReactImg from "../assets/images/icons/react.png";
import NextImg from "../assets/images/icons/nextjs.png";
import JsImg from "../assets/images/icons/javascript.png";
import NodeImg from "../assets/images/icons/node.png";
import TailwindImg from "../assets/images/icons/tailwind.png";
import GraphqlImg from "../assets/images/icons/graphql.png";
import HtmlImg from "../assets/images/icons/html.png";
import CssImg from "../assets/images/icons/css.png";
import GithubImg from "../assets/images/icons/github.png";

const Experience = () => {
  const techs = [
    {
      id: 4001,
      src: ReactImg,
      title: "react",
      style: "shadow-blue-600",
    },
    {
      id: 4002,
      src: NextImg,
      title: "next js",
      style: "shadow-white",
    },
    {
      id: 4003,
      src: JsImg,
      title: "javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4004,
      src: NodeImg,
      title: "node",
      style: "shadow-orange-500",
    },
    {
      id: 4005,
      src: TailwindImg,
      title: "Tailwind css",
      style: "shadow-sky-400",
    },
    {
      id: 4006,
      src: GraphqlImg,
      title: "GraphQl",
      style: "shadow-pink-400",
    },
    {
      id: 4007,
      src: HtmlImg,
      title: "html",
      style: "shadow-blue-500",
    },
    {
      id: 4008,
      src: CssImg,
      title: "css",
      style: "shadow-orange-500",
    },
    {
      id: 4009,
      src: GithubImg,
      title: "github",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-700 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-400 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>
        <div className="w-full   grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div>
              <div
                key={id}
                className={`shadow-md hover:scale-105  duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="react" className="w-32 mx-auto" />
                <p className="mt-4 uppercase">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
