import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
import { Link } from "react-scroll";
import logoImg from "../assets/images/logo.png";

const Footer = () => {
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
    <div className="w-full h-auto bg-primary_color text-white pt-0">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full  items-center  ">
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
              alt="LogoImg"
            />
          </a>
        </div>
        <div className="flex gap-3 my-2">
          <span className="cursor-pointer hover:scale-125 duration-300">
            <FaGithub size={20} />
          </span>
          <span className="cursor-pointer hover:scale-125 duration-300">
            <FaLinkedin size={20} />
          </span>
          <span className="cursor-pointer hover:scale-125 duration-300">
            <HiOutlineMail size={20} />
          </span>
          <span className="cursor-pointer hover:scale-125 duration-300">
            <BsFillPersonLinesFill size={20} />
          </span>
          <span className="cursor-pointer hover:scale-125 duration-300">
            <AiFillFacebook size={20} />
          </span>
        </div>
        <div className="flex">
          {links.map(({ id, link }) => (
            <div key={id}>
              <p
                className="px-4 my-1 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white
              hover:bg-extra_color p-2 rounded-md "
              >
                <Link to={link} smooth={true} duration={500}>
                  {link}
                </Link>
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center text-gray-500 mt-1 ">
          <p className="mr-2 underline">
            copyrights reserved by_
            <a
              href="https://noormohammad.live"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-gray-300 font-signature_font ">
                Noor Mohammad
              </span>
            </a>
          </p>
          <BiCopyright />
          <p className="text-sm">2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
