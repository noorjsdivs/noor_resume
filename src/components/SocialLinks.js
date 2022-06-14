import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

const SocialLinks = () => {
  const links = [
    {
      id: 2001,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkein.com",
      style: "rounded-tr-md",
    },
    {
      id: 2000,
      child: (
        <>
          Facebook <AiFillFacebook size={32} />
        </>
      ),
      href: "https://facebook.com",
      style: "rounded-tr-md",
    },
    {
      id: 2002,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com",
      style: "rounded-tr-md",
    },
    {
      id: 2003,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "https://linkein.com",
      style: "rounded-tr-md",
      download: true,
    },
    {
      id: 2004,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[43%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center h-14 w-40 ml-[-105px] hover:ml-[-10px]  duration-300 pl-2" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-56 text-white bg-gray-800 h-14 px-3 hover:rounded-md"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
