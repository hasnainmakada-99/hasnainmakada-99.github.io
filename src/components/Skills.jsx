import React from "react";

const Skills = ({ content }) => {
  return (
    <div id="skills" className="w-full bg-[#0a192f] text-gray-300 pt-12 md:pt-16 lg:pt-20 xl:pt-24">
      <div className="max-w-[800px] mx-auto p-4">
        <div className="w-full flex justify-center items-center flex-col mb-3 md:mb-5">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold inline border-b-2 md:border-b-4 border-cyan-500 text-center">
            Skills
          </p>
          <p className="py-2 text-base sm:text-xl md:text-2xl lg:text-3xl text-center">
            I enjoy diving into learning new things. Here's a list of technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 text-center py-2 md:py-4 lg:py-6 xl:py-8">
          {content?.fields.skills.map((skill, index) => {
            return (
              <div
                className="bg-[#152c48] rounded-lg p-2 md:p-4 hover:scale-105 duration-300 transform flex flex-col justify-center items-center h-full"
                key={index}
              >
                <p className="my-1 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
                  {skill.skill_tag}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

