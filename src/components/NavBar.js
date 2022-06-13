import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
      link: "portfolio",
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
    <div className="bg-gray-900 h-20 w-full top-0 sticky z-10 text-white flex items-center justify-between px-4">
      <div className="cursor-pointer">
        <h1 className="text-5xl font-signature_font ml-2">
          Noor <span className="md:hidden lg:inline-block">Mohammad</span>
        </h1>
      </div>
      <ul className="hidden md:inline-flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white"
          >
            {link}
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
        <ul className="flex flex-col justify-center items-center absolute top-0 w-full_width left-0 h-96 bg-gradient-to-b from-black to-gray-900">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-2 text-2xl text-gray-500 hover:text-gray-200 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
