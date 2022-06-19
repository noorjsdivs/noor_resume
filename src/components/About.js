import React from "react";
import { BsFillDiscFill } from "react-icons/bs";

const About = () => {
  return (
    <div name="about" className="h-full  w-full text-white">
      <div className="max-w-7xl px-4 mx-auto py-12 shadow-md felx flex-col justify-center items-center w-full h-full mb-6">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline-block border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="w-4/5 text-justify mx-auto lg:mx-0">
          <p className="text-xl mt-4">
            There is no better time to start what you love to do or follow. I
            have tried a lot of other platforms to shine but never find my
            passion till I find out coding. Coding is what I am loosing the
            count of times.
          </p>
          <br />
          <p className="text-lg mb-1">
            Some of the working platforms I explored before coding :
          </p>
          <ul className="text-lg">
            <li className="flex items-center">
              <BsFillDiscFill size={20} className="mr-2 animate-spin" />
              Housekeeping Supervisor ( 2012 - 2014 )
            </li>
            <li className="flex items-center">
              <BsFillDiscFill size={20} className="mr-2 animate-spin" />
              Receptionist ( 2015 - 2018 )
            </li>
            <li className="flex items-center">
              <BsFillDiscFill size={20} className="mr-2 animate-spin" />
              Accountant ( 2019 - 2021 )
            </li>
          </ul>
        </div>
        <br />
        <div className="w-4/5 text-justify mx-auto lg:mx-0">
          <p className="text-xl mt-2">
            Those jobs help me to earn but never fullfill the desire to gain the
            working satisfaction. I started to learn coding just to explore new
            possibilites for making an outstanding move. It was hard to learn by
            myself from the internet search and youtube materials. To understand
            the fundamentals of javaScript it took my 600+ hours of videos
            watching and other documents reading. In 2021 I got a chance to take
            MERN Stack Development course from Creative IT Institute in
            Bangladesh and got a proper guideline to have a professional touch
            of coding. Right now I am working with various projects and looking
            forward to have a proper course on Blockchain when I can make a
            suitable time for it. I am agog to learn new ideas and technologies
            and each and everyday searching to find out latest one to fill my
            hunger about it. I am also available to work with new people or
            team. So if you are looking someone to help you out or to work for
            you as a Full stack developer you can always find me at your
            service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
