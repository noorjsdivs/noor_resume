import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import resume from "../assets/docs/noor_mohammad.pdf";

const SocialLinks = () => {
  const links = [
    {
      id: 2001,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/noor-mohammad-ab2245193/",
      style: "rounded-tr-md",
    },
    {
      id: 2000,
      child: (
        <>
          Facebook <AiFillFacebook size={32} />
        </>
      ),
      href: "https://www.facebook.com/Noorlalu143",
      style: "rounded-tr-md",
    },
    {
      id: 2002,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/noorjsdivs",
      style: "rounded-tr-md",
    },
    {
      id: 2003,
      child: (
        <>
          Instagram <GrInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/simplenoor143/",
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
      href: resume,
      style: "rounded-br-md",
    },
  ];
  return (
    <motion.div
      initial={{ y: -500, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50"
    >
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
              className="flex justify-between items-center w-56 text-white bg-primary_color h-14 px-3 hover:rounded-md"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
