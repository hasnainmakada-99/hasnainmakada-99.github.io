import React from "react";
import NewBlog from "./NewBlog";
import me from '../assets/1600x840.avif';
const Blogs = ({ content }) => {
  return (
    <div name="blogs" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Blogs
          </p>
          <p className="py-6 text-2xl">
            Here are some of my latest blogs on tech
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {content?.fields.blog.map((blog, index) => {
            return (
              <div
                style={{
                  backgroundImage: `url(${blog.blog_cover})`,
                  backgroundSize: "cover", // set backgroundSize to 'cover'
                }}
                key={index}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                  <span className=" text-lg font-bold text-white tracking-wider">
                    {blog.blog_title}
                  </span>
                  <p className="text-center">{blog.blog_desc}</p>
                  <div className="pt-8 text-center">
                    <a href={blog.blog_url}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Read More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );

            
          })}
        </div>
      </div>
    </div>


  );

 
};

export default Blogs;
