import React from "react";

const Works = ({ content }) => {
  return (
    <div className="w-full bg-[#0a192f] text-gray-300 pt-20">
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center">
            Projects
          </p>
          <p className="py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Here are some of my recent projects
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {content?.fields.work.map((work, index) => (
            <div
              key={index}
              className="bg-[#5e87b9] shadow-md hover:scale-105 duration-300 transform flex flex-col justify-center items-center rounded-lg p-6"
            >
              <div className="flex flex-col justify-center items-center">
                <span className="text-lg font-bold text-white tracking-wider">
                  {work.work_title}
                </span>
                <p className="text-center text-green-200">{work.work_description}</p>
                <div className="pt-8 text-center">
                  <a href={work.github_url}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg">
                      Code
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

export default Works;
