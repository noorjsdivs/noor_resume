import React from "react";
import { projects } from "../constants.js";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Pagination from "./Pagination.js";

const Projects = () => {
  return (
    <div name="projects" className=" w-full text-white h-full mt-10 lg:mt-0">
      <div className="max-w-7xl px-4 py-12 shadow-lg mx-auto flex flex-col justify-center items-center">
        <div className="pb-8">
          <div className="flex items-center">
            <p className="text-4xl flex font-bold  border-b-4 border-cyan-500">
              Projects
            </p>
            <span className="text-gray-400 ml-4 mt-3">
              <BsFillArrowDownCircleFill size={30} className="animate-bounce" />
            </span>
          </div>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <Pagination itemsPerPage={9} projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
