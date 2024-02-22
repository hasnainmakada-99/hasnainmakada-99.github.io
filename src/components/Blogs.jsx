import React from "react";

const Blogs = ({ content }) => {
  return (
    <div name="blogs" className="w-full min-h-screen text-black bg-[#0a192f] pt-16 md:pt-20 lg:pt-24 xl:pt-28">
      <div className="max-w-full md:max-w-screen-md mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full flex justify-center items-center flex-col">
          <p className="text-2xl md:text-4xl font-bold inline border-b-2 md:border-b-4 text-gray-300 border-cyan-500 mb-2 mt-11 md:mb-4">
            Blogs
          </p>
          <p className="py-2 md:py-4 text-base md:text-2xl text-gray-300">
            Here are some of my latest blogs on tech
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 bg-[#0a192f]">
          {content?.fields.blog.map((blog, index) => (
            <a href={blog.blog_url} key={index}>
              <div className="w-full p-4 md:p-6 bg-gray-200 border-2 rounded-lg transition-all hover:shadow-lg mb-4">
                <img
                  src={blog.blog_cover}
                  alt="Blog Cover"
                  className="w-full h-auto rounded-lg" // Remove the fixed width (md:w-64)
                />
                <div className="p-2 md:px-2 md:py-1 font-mono text-base md:text-lg text-center">
                  {blog.blog_title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
