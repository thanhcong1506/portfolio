import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import tailwind from "../assets/tailwind.png";

const Skill = () => {
  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skill
          </p>
          <p className="py-4 ">
            // These are the technologies I've worked with
          </p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className=" shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img src={html} alt="" className=" w-20 mx-auto" />
            <p className=" py-4">HTML</p>
          </div>
          <div className=" shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img src={css} alt="" className=" w-20 mx-auto" />
            <p className=" py-4">CSS</p>
          </div>
          <div className=" shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img src={javascript} alt="" className=" w-20 mx-auto" />
            <p className=" py-4">JAVASCRIPT</p>
          </div>
          <div className=" shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img src={react} alt="" className=" w-20 mx-auto" />
            <p className=" py-4">REACT</p>
          </div>
          <div className=" shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img src={node} alt="" className=" w-20 mx-auto" />
            <p className=" py-4">NODE JS</p>
          </div>
          <div className=" shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img src={mongo} alt="" className=" w-20 mx-auto" />
            <p className=" py-4">MONGO DB</p>
          </div>
          <div className=" shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img src={github} alt="" className=" w-20 mx-auto" />
            <p className=" py-4">GITHUB</p>
          </div>
          <div className=" shadow-sm shadow-[#040c16] hover:scale-110 duration-500">
            <img src={tailwind} alt="" className=" w-20 mx-auto" />
            <p className=" py-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
