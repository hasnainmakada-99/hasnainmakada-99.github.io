// import React from "react";
// import NewBlog from "./NewBlog";
// import me from '../assets/1600x840.avif';
// const Blogs = ({ content }) => {
//   return (
//     <div name="blogs" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
//       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//         <div className="pb-8 w-full flex justify-center items-center flex-col">
//           <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
//             Blogs
//           </p>
//           <p className="py-6 text-2xl">
//             Here are some of my latest blogs on tech
//           </p>
//         </div>
//         {/* Container */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {content?.fields.blog.map((blog, index) => {
//             return (
//               <div
//                 style={{
//                   backgroundImage: `url(${blog.blog_cover})`,
//                   backgroundSize: "cover", // set backgroundSize to 'cover'
//                 }}
//                 key={index}
//                 className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
//               >
//                 <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
//                   <span className=" text-lg font-bold text-white tracking-wider">
//                     {blog.blog_title}
//                   </span>
//                   <p className="text-center">{blog.blog_desc}</p>
//                   <div className="pt-8 text-center">
//                     <a href={blog.blog_url}>
//                       <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
//                         Read More
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );


//           })}
//         </div>
//       </div>
//     </div>


//   );


// };

// export default Blogs;

import React from "react";
import me from "../assets/1600x840.avif";

const Blogs = ({ content }) => {
  return (
    <div name="blogs" className="w-full min-h-screen text-black bg-[#0a192f] pt-16 md:pt-20 lg:pt-24 xl:pt-28">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full flex justify-center items-center flex-col">
          <p className="text-2xl md:text-4xl font-bold inline border-b-2 md:border-b-4 text-gray-300 border-cyan-500 mb-2 mt-11 md:mb-4">
            Blogs
          </p>
          <p className="py-2 md:py-4 text-base md:text-2xl text-gray-300">
            Here are some of my latest blogs on tech
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2  justify-center items-center  grid-cols-2 gap-2 bg-[#0a192f]">
          {content?.fields.blog.map((blog, index) => {

            return (
              <a href={blog.blog_url}>
                <div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 bg-gray-200 border-2 rounded-lg transition-all hover:shadow-lg mb-1">
                  <img
                    src={blog.blog_cover}
                    alt="Me"
                    index={index}
                    className="w-full h-auto rounded-lg md:rounded-l-lg"
                  />
                  <div className="p-2 md:px-2 md:py-1 font-mono text-base md:text-lg text-center">
                    {blog.blog_title}
                  </div>
                </div>
              </a>
            );

          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

