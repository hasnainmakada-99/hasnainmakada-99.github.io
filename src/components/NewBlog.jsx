import React from "react";
import me from "../assets/1600x840.avif";

const NewBlog = () => {
  return (
    <div className="w-full min-h-screen text-black bg-[#0a192f] pt-16 md:pt-20 lg:pt-24 xl:pt-28">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full flex justify-center items-center flex-col">
          <p className="text-2xl md:text-4xl font-bold inline border-b-2 md:border-b-4 text-gray-300 border-cyan-500 mb-2 mt-11 md:mb-4">
            Blogs
          </p>
          <p className="py-2 md:py-4 text-base md:text-2xl text-gray-300">
            Here are some of my latest blogs on tech
          </p>
        </div>

        {/* <div className="grid justify-center  items-center gap-4"> */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2  justify-center items-center  grid-cols-2 gap-2 bg-[#0a192f]">
          {/* <div className="grid justify-center items-center  grid-cols-2 gap-3 bg-[#0a192f]"> */}
          {/* <div className="max-w-screen-lg w-full grid grid-cols-2 md:grid-cols-2  p-2 bg-gray-200 border-2 rounded-lg transition-all hover:shadow-lg mb-9 ">
            <img
              src={me}
              alt="Me"
              className="w-full h-auto rounded-lg md:rounded-l-lg"
            />
            <div className="font-mono text-lg md:text-center mt-3">
              Building Your Own Google Docs: Crafting a Dynamic Flutter Clone!
            </div>
          </div> */}

          <div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 bg-gray-200 border-2 rounded-lg transition-all hover:shadow-lg mb-1">
            <img
              src={me}
              alt="Me"
              className="w-full h-auto rounded-lg md:rounded-l-lg"
            />
            <div className="p-2 md:px-2 md:py-1 font-mono text-base md:text-lg text-center">
              Building Your Own Google Docs: Crafting a Dynamic Flutter Clone!
            </div>
          </div>

          <div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 bg-gray-200 border-2 rounded-lg transition-all hover:shadow-lg mb-1">
            <img
              src={me}
              alt="Me"
              className="w-full h-auto rounded-lg md:rounded-l-lg"
            />
            <div className="p-2 md:px-2 md:py-1 font-mono text-base md:text-lg text-center">
              Building Your Own Google Docs: Crafting a Dynamic Flutter Clone!
            </div>
          </div>

          <div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 bg-gray-200 border-2 rounded-lg transition-all hover:shadow-lg mb-1">
            <img
              src={me}
              alt="Me"
              className="w-full h-auto rounded-lg md:rounded-l-lg"
            />
            <div className="p-2 md:px-2 md:py-1 font-mono text-base md:text-lg text-center">
              Building Your Own Google Docs: Crafting a Dynamic Flutter Clone!
            </div>
          </div>

          <div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 bg-gray-200 border-2 rounded-lg transition-all hover:shadow-lg mb-1">
            <img
              src={me}
              alt="Me"
              className="w-full h-auto rounded-lg md:rounded-l-lg"
            />
            <div className="p-2 md:px-2 md:py-1 font-mono text-base md:text-lg text-center">
              Building Your Own Google Docs: Crafting a Dynamic Flutter Clone!
            </div>
          </div>

          <div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 bg-gray-200 border-2 rounded-lg transition-all hover:shadow-lg mb-1">
            <img
              src={me}
              alt="Me"
              className="w-full h-auto rounded-lg md:rounded-l-lg"
            />
            <div className="p-2 md:px-2 md:py-1 font-mono text-base md:text-lg text-center">
              Building Your Own Google Docs: Crafting a Dynamic Flutter Clone!
            </div>
          </div>

          <div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 bg-gray-200 border-2 rounded-lg transition-all hover:shadow-lg mb-1">
            <img
              src={me}
              alt="Me"
              className="w-full h-auto rounded-lg md:rounded-l-lg"
            />
            <div className="p-2 md:px-2 md:py-1 font-mono text-base md:text-lg text-center">
              Building Your Own Google Docs: Crafting a Dynamic Flutter Clone!
            </div>
          </div>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
