import React from "react";

import showwcase from "../assets/Showwcase_Icon.png";
import twitter from "../assets/Twitter_logo.png";
import linkedin from "../assets/Linked_in_logo.png";
import github from "../assets/github_logo.jpeg";
// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
//     >
//       <div className="flex flex-col max-w-[600px] w-full">
//         <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
//           <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
//             Contact
//           </p>
//         </div>
//         <div class="grid grid-rows-1 grid-flow-col gap-4">
//           {/* <!-- ... --> */}
//           <div class="justify-self-center text-white">
//             {" "}
//             <a href="https://hasnainmakada-99.showwcase.com" target="_blank">
//               <img
//                 src={showwcase}
//                 width={55}
//                 height={55}
//                 className="rounded-xl"
//               />
//             </a>
//           </div>

//           <div class="justify-self-center text-white">
//             {" "}
//             <a href="https://twitter.com/Hasnain_Makada" target="_blank">
//               <img
//                 src={twitter}
//                 width={55}
//                 height={55}
//                 className="rounded-xl"
//               />
//             </a>
//           </div>
//         </div>
//         <br />
//         <br />
//         <div class="grid grid-rows-1 grid-flow-col gap-4">
//           {/* <!-- ... --> */}
//           <div class="justify-self-center text-white">
//             {" "}
//             <a
//               href="https://www.linkedin.com/in/hasnain-makada-5b47271aa/"
//               target="_blank"
//             >
//               <img
//                 src={linkedin}
//                 width={55}
//                 height={55}
//                 className="rounded-none"
//               />
//             </a>
//           </div>

//           <div class="justify-self-center text-white">
//             {" "}
//             <a href="https://github.com/hasnainmakada-99" target="_blank">
//               <img src={github} width={55} height={55} className="rounded-xl" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

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
          <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              class="block h-14 rounded-full sm:mx-0 sm:shrink-0"
              src="https://pbs.twimg.com/profile_images/1551832778077274113/LaGTt0TU_400x400.jpg"
              alt="Woman's Face"
            />
            <div class="text-center space-y-2 sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold">SHOWWCASE</p>
              </div>
            </div>
          </div>
          <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              class="block  h-14 rounded-full sm:mx-0 sm:shrink-0"
              src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1710028800&semt=ais"
              alt="Woman's Face"
            />
            <div class="text-center space-y-2 sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold">TWITTER/X</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
