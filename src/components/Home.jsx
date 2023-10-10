import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

import me2 from "../assets/New_Profile.jpg";

const Home = ({ content }) => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-[#0a192f] flex justify-center items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-4">
        <div className="flex-shrink-0 w-full md:w-auto mb-8 md:mb-0">
          <img
            src={me2}
            alt="my profile"
            className="rounded-2xl flex-shrink-0 mx-auto object-cover object-center h-60 sm:h-80 md:h-96 max-w-full sm:max-w-80 md:max-w-96"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center md:text-left md:ml-12">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mb-8">
            {content?.fields.landing_caption}
          </h2>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-sm md:text-base"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={20} className="ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
