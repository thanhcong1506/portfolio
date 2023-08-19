import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" bg-[#0a192f] w-full h-screen">
      {/*Container*/}
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center  ">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className=" text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          BUI VAN CONG
        </h1>
        <h2 className=" text-[4xl] sm:text-7xl font-bold text-[#8892b0] ">
          I'm a Full Stack Deverloper
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px] text-justify">
          I just graduated with a full-stack web course at FUNiX. Besides, I am
          also a dynamic person, quickly adapting to any environment. I have 9
          years of experience studying and working in Japan. During those 9
          years, I learned a lot of new knowledge and accumulated a lot of
          experience for myself.
        </p>
        <div>
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            <button className=" text-white border px-6 py-3 group flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className=" group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
