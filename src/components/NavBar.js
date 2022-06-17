import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

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
    <div className="bg-primary_color h-20 w-full top-0 sticky z-10 text-white flex items-center justify-between px-4">
      <div className="cursor-pointer">
        <a
          href="https://www.noormohammad.live/"
          target="_blank"
          without
          rel="noreferrer"
        >
          <h1 className="text-5xl font-signature_font ml-2">
            Noor <span className="md:hidden lg:inline-block">Mohammad</span>
          </h1>
        </a>
      </div>
      <ul className="hidden md:inline-flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white"
          >
            <Link to={link} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden pr-4 z-10 text-gray-500 hover:text-white duration-200"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 w-full left-0 h-96 bg-gradient-to-b from-black to-gray-900">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-2 text-2xl text-gray-500 hover:text-gray-200 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth={true}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
