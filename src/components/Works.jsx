import React from "react";

const Works = ({ content }) => {
  return (
    <div id="work" className="w-full bg-[#0a192f] text-gray-300 pt-20">
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center">
            Projects
          </p>
          <p className="py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Here are some of my recent projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {content?.fields.work.map((work, index) => (
            <div className="max-w-sm transition duration-300  hover:scale-105 rounded overflow-hidden bg-white">
              <a href={work.github_url} target="_blank">
                <div className="px-6 py-4">
                  <div
                    key={index}
                    className="font-bold text-xl mb-2 text-black"
                  >
                    {work.work_title}
                  </div>
                </div>
                <p className="text-gray-700 text-base">
                  {work.work_description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
