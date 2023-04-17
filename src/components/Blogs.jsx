import React from "react";

const Works = ({ content }) => {
  return (
    <div name="blogs" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Blogs
          </p>
          <p className="py-6 text-2xl">Here are some of my blogs</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{
              backgroundImage: `url(https://cdn.hashnode.com/res/hashnode/image/upload/v1680590929206/04f64f6e-e3ae-48bd-bd8f-4393adb18a98.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp)`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Hello World
              </span>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                accusamus placeat maxime quibusdam ipsam reiciendis assumenda
                dignissimos autem minus doloribus?
              </p>
              <div className="pt-8 text-center">
                <a>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
