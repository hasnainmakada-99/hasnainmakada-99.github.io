import React from "react";
import { CSSTransition } from "react-transition-group";

const About = ({ content }) => {
  return (
    <div
      id="about"
      className="bg-[#0a192f] text-gray-300 min-h-screen py-20 flex items-center justify-center"
    >
      <div className="max-w-md mx-auto bg-slate-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-4xl font-bold inline text-sky-800">
              About Myself
            </div>
            <p className="pt-10 block mt-1 text-2xl leading-tight font-medium text-black">
              {content?.fields.about_caption}
            </p>
            <p className="mt-2 pt-5 text-black text-xl">
              {content?.fields.about_details}
            </p>
            <p className="mt-3 text-black">Tech Geek | DevOps & Flutter</p>
            <p className="mt-4 text-black">
              Blogger at
              <a href="https://hasnainm.hashnode.dev"> Hashnode</a> and
              <a href="https://showwcase.com/hasnainmakada-99"> Showwcase</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
