import React from "react";

const About = ({ content }) => {
  return (
    <div
      name="about"
      id="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 pt-20"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/5 md:w-4/6 lg:w-3/5 xl:w-1/2">
          <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            <div className="text-center md:text-right pb-8 md:pb-0 md:pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-auto text-2xl font-bold">
              <p>{content?.fields.about_caption}</p>
              <p className="my-4">Tech Geek | DevOps & Flutter</p>
              <p>
                Blogger at
                <a href="https://hasnainm.hashnode.dev"> Hashnode</a> and
                <a href="https://showwcase.com/hasnainmakada-99"> Showwcase</a>
              </p>
            </div>
            <div>
              <p>{content?.fields.about_details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
