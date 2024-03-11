import React from "react";
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

const Contact = ({ content }) => {
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
        <div class="grid grid-rows-2 grid-flow-col gap-4">
          {content?.fields.contacts.map((contact, index) => (
            <a href={contact.contact_url} target="_blank">
              <div
                key={index}
                class="py-8 px-8 transition duration-300  hover:scale-105 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
              >
                <img
                  class="block h-14 rounded-full sm:mx-0 sm:shrink-0"
                  src={contact.contact_logo}
                  alt="Woman's Face"
                />
                <div class="text-center space-y-2 sm:text-left">
                  <div class="space-y-0.5">
                    <p class="text-lg text-black font-semibold">
                      {contact.contact_name}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
