import React from "react";
import { data } from "../data/data";

const Work = () => {
  return (
    <div
      name="work"
      className=" w-full sm:h-screen text-gray-300 bg-[#0a192f]  "
    >
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {data &&
            data.map((item) => (
              <div
                key={item.id}
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] content-div group flex items-center justify-center text-center container rounded-md mx-auto "
              >
                <div className=" opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={item.github} target="_blank">
                      <button className=" bg-white text-gray-700 font-bold text-lg py-3 px-4 m-2 rounded-lg">
                        Code
                      </button>
                    </a>
                    <a href={item.live} target="_blank">
                      <button className=" bg-white text-gray-700 font-bold text-lg py-3 px-4 m-2 rounded-lg">
                        Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
