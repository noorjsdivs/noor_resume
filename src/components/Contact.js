import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
const Contact = () => {
  return (
    <div name="contact" className="  w-full text-white h-screen">
      <div className="flex flex-col py-12 shadow-md px-4 justify-center max-w-7xl mx-auto h-full">
        <div className="pb-8">
          <div className="flex items-center justify-center">
            <p className="text-4xl flex font-bold  border-b-4 border-cyan-500">
              Contact
            </p>
            <span className="text-gray-400 ml-4 mt-3">
              <BsFillArrowDownCircleFill size={30} className="animate-bounce" />
            </span>
          </div>
          <p className="py-4 text-center">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            id="form"
            action="https://getform.io/f/dfdd3e49-0d98-4c69-91c1-b86bb1095719"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 shadow-md shadow-primary_color focus:shadow-none hover:shadow-none border-cyan-700 focus:border-cyan-500 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 shadow-md shadow-primary_color focus:shadow-none hover:shadow-none border-cyan-700 focus:border-cyan-500 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your messages"
              rows="10"
              className="p-2 bg-transparent border-2 shadow-md shadow-primary_color focus:shadow-none hover:shadow-none border-cyan-700 focus:border-cyan-500 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white group w-full px-6 py-3 mt-4 flex items-center justify-center rounded-md bg-gradient-to-r from-primary_color to-extra_color cursor-pointer hover:bg-gradient-to-t duration-300 ">
              Let's talk
              <AiOutlineSend
                className="ml-2 animate-pulse group-hover:text-cyan-300"
                size={20}
              />
            </button>
            <span></span>
          </form>
        </div>
      </div>
      {/* <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
};

export default Contact;
