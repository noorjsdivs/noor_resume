import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GiTireIronCross } from "react-icons/gi";
import { Link } from "react-scroll";
import logoImg from "../assets/images/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1001,
      link: "home",
    },
    {
      id: 1002,
      link: "about",
    },
    {
      id: 1003,
      link: "projects",
    },
    {
      id: 1004,
      link: "experience",
    },
    {
      id: 1005,
      link: "contact",
    },
  ];
  return (
    <div className="bg-primary_color  h-24 w-full top-0 sticky z-10 text-white flex items-center justify-between px-4">
      <div className="cursor-pointer group bg-cyan-400 w-72 h-14 flex">
        <a
          href="https://www.noormohammad.live/"
          target="_blank"
          without
          rel="noreferrer"
        >
          <img
            src={logoImg}
            className="h-14 bg-primary_color w-72 group-hover:bg-gray-800 group-hover:translate-x-1 group-hover:-translate-y-1 duration-500"
            alt="logo"
          />
        </a>
      </div>
      <ul className="hidden md:inline-flex gap-6">
        {links.map(({ id, link }) => (
          <div key={id} className="w-full h-auto bg-cyan-400  ">
            <li className="px-4 py-1 bg-primary_color hover:bg-gray-900 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white hover:translate-x-1 hover:-translate-y-1 duration-300">
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          </div>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden pr-4 z-10 text-gray-500 hover:text-white duration-200"
      >
        {nav ? (
          <GiTireIronCross className="animate-pulse text-white" size={30} />
        ) : (
          <AiOutlineMenuUnfold size={35} />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 w-full left-0 h-96 bg-gradient-to-b from-black to-gray-900">
          {links.map(({ id, link }) => (
            <div key={id} className="w-auto h-auto bg-cyan-400 mb-4">
              <li className="px-4  cursor-pointer bg-black hover:translate-x-1 hover:-translate-y-1  capitalize py-2 text-2xl text-gray-300 hover:text-gray-200 duration-300">
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth={true}
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
