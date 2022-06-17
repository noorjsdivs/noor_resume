import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="  w-full text-white h-screen">
      <div className="flex flex-col p-4 justify-center max-w-7xl mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
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
              // onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your messages"
              // onChange={(e) => setMessage(e.target.value)}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white px-6 py-3 my-8 text-center items-center rounded-md bg-gradient-to-r from-primary_color to-extra_color cursor-pointer hover:bg-gradient-to-t duration-300 ">
              Let's talk
            </button>
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
