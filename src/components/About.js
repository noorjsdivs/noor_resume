import React from "react";
import resume from "../assets/docs/noor_mohammad.pdf";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div name="about" className="h-full  w-full text-white">
      <div className="max-w-7xl mx-auto h-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 py-20">
        <motion.div
          initial={{ y: 200, opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className=" border-setBorder border-extra_color w-4/5 sm:w-3/5 md:w-3/5 lg:w-full mx-auto"
        >
          <h1 className="text-4xl w-full h-full py-28 font-semibold  font-title_font text-center">
            About Me
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0, scale: 0.7 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className=" w-full h-full px-20 sm:px-36 md:px-16 lg:px-0 md:mt-10 lg:mt-0"
        >
          <p className="text-lg text-gray-300 font-semibold ">
            There is no better time to start what you love to do or follow. I
            have tried a lot of other platforms to shine but never find my
            passion till I find out coding. Coding is what I am loosing the
            count of times.
          </p>
          <a href={resume} rel="noreferrer" target="_blank">
            <button className="bg-white text-black px-6 py-2 absolute bottom-0 md:bottom-0  lg:bottom-28 text-lg hover:bg-gray-300 duration-200 cursor-pointer">
              Hire me
            </button>
          </a>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0, scale: 0.7 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className=" w-full h-full px-20 sm:px-36 md:px-16 md:ml-8 lg:ml-0 lg:px-0"
        >
          <p className="text-lg text-gray-300 ">
            I started to learn coding just to explore new possibilites for
            making an outstanding move. It was hard to learn by myself from the
            internet search and youtube materials. In 2021 I took a couse on
            MERN Stack Development from Creative IT Institute in Bangladesh to
            develop my coding skills.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0, scale: 0.7 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className=" w-full h-auto px-20 sm:px-36 md:px-16 lg:px-0"
        >
          <p className="text-lg text-gray-300 ">
            Currently I am working with various projects and looking forward to
            have a proper course on Blockchain when I can make a suitable time
            for it. I am also available to work with new people or team. So if
            you are looking someone to help you out or to work for you as a Full
            stack developer you can always find me at your service.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
