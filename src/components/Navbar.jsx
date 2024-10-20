// import React, { useState } from "react";

// import { FaBars, FaTimes, FaGithub, FaTwitter } from "react-icons/fa";

// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);
//   return (
//     <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
//       <div>
//         <h1 className=" font-semibold text-2xl font-monof">Hasnain Makada</h1>
//       </div>
//       {/* Menu */}
//       <ul className="hidden md:flex gap-x-8">
//         <li>
//           <Link to="home" smooth={true} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="about" smooth={true} duration={500}>
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="skills" smooth={true} duration={500}>
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link to="work" smooth={true} duration={500}>
//             Projects
//           </Link>
//         </li>
//         <li>
//           <Link to="blogs" smooth={true} duration={500}>
//             Blogs
//           </Link>
//         </li>
//         <li>
//           <Link to="contact" smooth={true} duration={500}>
//             Contact
//           </Link>
//         </li>
//       </ul>
//       {/* Hamburgers */}
//       <div onClick={handleClick} className="md:hidden z-10">
//         {!nav ? <FaBars /> : <FaTimes />}
//       </div>
//       <ul
//         className={
//           !nav
//             ? "hidden"
//             : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
//         }
//       >
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="home" smooth={true} duration={500}>
//             Home
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           {" "}
//           <Link onClick={handleClick} to="about" smooth={true} duration={500}>
//             About
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           {" "}
//           <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
//             Skills
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           {" "}
//           <Link onClick={handleClick} to="work" smooth={true} duration={500}>
//             Projects
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           {" "}
//           <Link onClick={handleClick} to="blogs" smooth={true} duration={500}>
//             Blogs
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           {" "}
//           <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
//             Contact
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           {" "}
//           <a
//             href="https://drive.google.com/file/d/1kE6DCi0ixFS1Q7mRmDrTcVCokzuQ8_nw/view?usp=sharing"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Resume
//           </a>
//         </li>
//       </ul>
//       {/* Socila Icons */}
//       <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
//         <ul>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="https://twitter.com/Hasnain_Makada"
//             >
//               Twitter <FaTwitter size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="https://github.com/hasnainmakada-99"
//             >
//               Github <FaGithub size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="mailto:hasnainmakada@gmail.com"
//             >
//               Email <HiOutlineMail size={30} />
//             </a>
//           </li>
//           <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
//             <a
//               className="flex justify-between items-center w-full text-gray-300"
//               href="https://drive.google.com/file/d/1kE6DCi0ixFS1Q7mRmDrTcVCokzuQ8_nw/view?usp=sharing"
//             >
//               Resume <BsFillPersonLinesFill size={30} />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-6 bg-[#0a192f] text-gray-300 shadow-lg z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-white font-sans cursor-pointer">
        <h1>Hasnain Makada</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li className="hover:text-cyan-500 transition duration-300">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-cyan-500 transition duration-300">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-cyan-500 transition duration-300">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-cyan-500 transition duration-300">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-cyan-500 transition duration-300">
          <Link to="blogs" smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li className="hover:text-cyan-500 transition duration-300">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer text-2xl">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          !nav ? "hidden" : "flex"
        } absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center items-center`}
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="blogs" smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <a
            href="https://drive.google.com/file/d/1kE6DCi0ixFS1Q7mRmDrTcVCokzuQ8_nw/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/Hasnain_Makada"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/hasnainmakada-99"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:hasnainmakada@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1kE6DCi0ixFS1Q7mRmDrTcVCokzuQ8_nw/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
