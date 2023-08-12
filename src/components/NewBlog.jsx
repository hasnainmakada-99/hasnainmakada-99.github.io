import React from 'react';
import me from '../assets/1600x840.avif';

const NewBlog = () => {
    return (
        <div className='bg-[#0a192f]'>
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Blogs
          </p>
          <p className="py-6 text-2xl text-gray-300">
            Here are some of my latest blogs on tech
          </p>

            <div className='grid justify-center items-center  grid-cols-2 gap-3 bg-[#0a192f]'>

                <div className='max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-200 border-2 rounded-lg transition-all hover:shadow-lg'>
                    <img src={me} alt='Me' className='w-full h-auto rounded-lg md:rounded-l-lg' />
                    <div className='font-mono text-lg md:text-center mt-3'>
                        Building Your Own Google Docs: Crafting a Dynamic Flutter Clone!
                    </div>
                </div>
                <div className='max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-200 border-2 rounded-lg transition-all hover:shadow-lg'>
                    <img src={me} alt='Me' className='w-full h-auto rounded-lg md:rounded-l-lg' />
                    <div className='font-mono text-lg md:text-center mt-3'>
                        Building Your Own Google Docs: Crafting a Dynamic Flutter Clone!
                    </div>
                </div>
                <div className='max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-200 border-2 rounded-lg transition-all hover:shadow-lg'>
                    <img src={me} alt='Me' className='w-full h-auto rounded-lg md:rounded-l-lg' />
                    <div className='font-mono text-lg md:text-center mt-3'>
                        Building Your Own Google Docs: Crafting a Dynamic Flutter Clone!
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default NewBlog;
