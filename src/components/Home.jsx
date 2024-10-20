

// import React, { useState, useEffect } from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";
// import { Link } from "react-scroll";

// import me2 from "../assets/New_Image.jpg";

// const Home = ({ content }) => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoaded(true);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div
//       name="home"
//       className="min-h-screen w-full bg-[#0a192f] flex justify-center items-center"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-4">
//         <div className="flex-shrink-0 w-full md:w-1/2 mb-8 md:mb-0">
//           <img
//             src={me2}
//             alt="my profile"
//             style={{
//               transform: loaded ? "rotate(0deg)" : "rotate(-45deg)",
//               transition: "transform 1s",
//             }}
//             className="rounded-2xl flex-shrink-0 mx-auto object-cover object-center h-60 sm:h-80 md:h-96 max-w-full sm:max-w-80 md:max-w-96"
//           />
//         </div>

//         <div className="flex flex-col items-center justify-center text-center md:text-left md:ml-12">
//           <h2
//             className="text-4xl sm:text-7xl font-bold text-white mb-8"
//             style={{
//               transform: loaded ? "rotate(0deg)" : "rotate(45deg)",
//               transition: "transform 1s",
//             }}
//           >
//             {content?.fields.landing_caption}
//           </h2>
//           <Link
//             to="about"
//             smooth
//             duration={500}
//             className="group text-white px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-sm md:text-base"
//           >
//             About Me
//             <span className="group-hover:rotate-90 duration-300">
//               <HiArrowNarrowRight size={20} className="ml-2" />
//             </span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import me2 from "../assets/New_Image.jpg";

const Home = ({ content }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      name="home"
      className="min-h-screen w-full bg-[#0a192f] flex justify-center items-center p-4 overflow-hidden relative" // added overflow-hidden here
    >
      <div className="container max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Profile Image Section */}
        <div className="w-full md:w-1/2 flex justify-center p-5">
          <img
            src={me2}
            alt="my profile"
            className={`rounded-3xl object-cover object-center transition-transform duration-1000 h-60 sm:h-80 md:h-97 shadow-xl ${
              loaded ? "transform rotate-0" : "transform rotate-[-45deg]"
            }`}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4">
          <h2
            className={`text-4xl sm:text-6xl font-extrabold text-white transition-transform duration-1000 ${
              loaded ? "rotate-0" : "rotate-[45deg]"
            }`}
          >
            {content?.fields.landing_caption || "Welcome to My Portfolio"}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Passionate about Web and Android, I create responsive and engaging
            digital experiences.
          </p>
          <Link
            to="about"
            smooth
            duration={500}
            className="group inline-flex items-center text-white px-6 py-3 my-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-sm md:text-base"
          >
            About Me
            <span className="group-hover:rotate-90 transition-transform duration-300 ml-2">
              <HiArrowNarrowRight size={20} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
