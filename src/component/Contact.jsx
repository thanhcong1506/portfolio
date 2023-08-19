import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form
        className=" flex flex-col w-full max-w-[600px] "
        action="https://getform.io/f/7e74183b-43ae-49c1-945e-6d5362108ba3"
        method="POST"
      >
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            thanhcong1506@gmail.com
          </p>
        </div>
        <input
          placeholder="Name"
          className=" p-2 bg-[#ccd6f6] "
          type="text"
          name="name"
          id=""
        />
        <input
          placeholder="Email"
          className=" p-2 bg-[#ccd6f6] my-4"
          type="email"
          name="email"
          id=""
        />
        <textarea
          placeholder="Message"
          className=" p-2 bg-[#ccd6f6] "
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className=" my-3 text-white border-2 flex hover:bg-pink-600 hover:border-pink-600 items-center mx-auto p-2">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
