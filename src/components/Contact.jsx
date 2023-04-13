import React from "react";

import showwcase from "../assets/Showwcase_Icon.png";
import twitter from "../assets/Twitter_logo.png";
import linkedin from "../assets/Linked_in_logo.png";
import github from "../assets/github_logo.jpeg";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
            Contact
          </p>
        </div>
        <div class="grid grid-rows-1 grid-flow-col gap-4">
          {/* <!-- ... --> */}
          <div class="justify-self-center text-white">
            {" "}
            <a href="https://hasnainmakada-99.showwcase.com" target="_blank">
              <img
                src={showwcase}
                width={55}
                height={55}
                className="rounded-xl"
              />
            </a>
          </div>

          <div class="justify-self-center text-white">
            {" "}
            <a href="https://twitter.com/Hasnain_Makada" target="_blank">
              <img
                src={twitter}
                width={55}
                height={55}
                className="rounded-xl"
              />
            </a>
          </div>
        </div>
        <br />
        <br />
        <div class="grid grid-rows-1 grid-flow-col gap-4">
          {/* <!-- ... --> */}
          <div class="justify-self-center text-white">
            {" "}
            <a
              href="https://www.linkedin.com/in/hasnain-makada-5b47271aa/"
              target="_blank"
            >
              <img
                src={linkedin}
                width={55}
                height={55}
                className="rounded-none"
              />
            </a>
          </div>

          <div class="justify-self-center text-white">
            {" "}
            <a href="https://github.com/hasnainmakada-99" target="_blank">
              <img src={github} width={55} height={55} className="rounded-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
