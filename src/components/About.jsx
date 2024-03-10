import React from "react";

// const About = ({ content }) => {
//   return (
//     <div id="about" className="bg-[#0a192f] text-gray-300 min-h-screen py-20">
//       <div className="container mx-auto">
//         <div className="flex flex-col items-center">
//           <div className="bg-cyan-800 rounded-md w-4/5 md:w-4/6 lg:w-3/5 xl:w-1/2 py-16">
//             <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
//               <div className="text-center md:text-right">
//                 <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
//                   About
//                 </p>
//               </div>
//               <div></div>
//             </div>
//             <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
//               <div className="text-2xl font-bold flex flex-col items-center">
//                 <p>{content?.fields.about_caption}</p>
//                 <p className="my-4">Tech Geek | DevOps & Flutter</p>
//                 <p>
//                   Blogger at
//                   <a href="https://hasnainm.hashnode.dev"> Hashnode</a> and
//                   <a href="https://showwcase.com/hasnainmakada-99">
//                     {" "}
//                     Showwcase
//                   </a>
//                 </p>
//               </div>
//               <div className="flex flex-col text-lg items-center">
//                 <p>{content?.fields.about_details}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

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
