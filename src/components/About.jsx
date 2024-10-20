// import React from "react";
// import { CSSTransition } from "react-transition-group";

// const About = ({ content }) => {
//   return (
//     <div
//       id="about"
//       className="bg-[#0a192f] text-gray-300 min-h-screen py-20 flex items-center justify-center"
//     >
//       <div className="max-w-md mx-auto bg-slate-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//         <div className="md:flex">
//           <div className="p-8">
//             <div className="uppercase tracking-wide text-4xl font-bold inline text-sky-800">
//               About Myself
//             </div>
//             <p className="pt-10 block mt-1 text-2xl leading-tight font-medium text-black">
//               {content?.fields.about_caption}
//             </p>
//             <p className="mt-2 pt-5 text-black text-xl">
//               {content?.fields.about_details}
//             </p>
//             <p className="mt-3 text-black">Tech Geek | DevOps & Flutter</p>
//             <p className="mt-4 text-black">
//               Blogger at
//               <a href="https://hasnainm.hashnode.dev"> Hashnode</a> and
//               <a href="https://showwcase.com/hasnainmakada-99"> Showwcase</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



import React from "react";

const About = ({ content }) => {
  return (
    <div
      id="about"
      className="bg-[#0a192f] text-gray-300 min-h-screen flex items-center justify-center px-4"
      style={{ scrollMarginTop: "90px" }} // Adjust offset to prevent overlap with navbar
    >
      <div className="max-w-4xl mt-24 w-full bg-slate-100 rounded-lg shadow-lg p-8 md:p-12">
        <div className="flex flex-col justify-center items-center">
          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold text-sky-900 text-center mb-6">
            About Myself
          </h2>

          {/* Caption */}
          <p className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-4">
            {content?.fields.about_caption || "Passionate About Technology and Innovation"}
          </p>

          {/* Details */}
          <p className="text-gray-700 text-base md:text-lg text-center leading-relaxed mb-6">
            {content?.fields.about_details ||
              "As a tech enthusiast, I’m focused on building high-performance, scalable solutions using modern technologies like DevOps and Flutter. I thrive on creating impactful products that improve user experiences."}
          </p>

          {/* Tech Info */}
          <p className="text-gray-800 font-medium text-center mb-4">
            DevOps & Flutter Developer | Tech Enthusiast
          </p>

          {/* Blogger Links */}
          <div className="text-center mb-6">
            <p className="text-gray-800">
              Blogger at:{" "}
              <a
                href="https://hasnainm.hashnode.dev"
                className="text-blue-500 hover:underline ml-1"
              >
                Hashnode
              </a>
              ,{" "}
              <a
                href="https://showwcase.com/hasnainmakada-99"
                className="text-blue-500 hover:underline ml-1"
              >
                Showwcase
              </a>
            </p>
          </div>

          {/* Call to Action */}
          <a
            href="#projects"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
          >
            Explore My Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
