import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const navigationItems = [
    { title: "Home", path: "home" },
    { title: "About", path: "about" },
    { title: "Skills", path: "skills" },
    { title: "Projects", path: "works" },
    { title: "Blogs", path: "blogs" },
    { title: "Contact", path: "contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/hasnainmakada-99", icon: <FaGithub size={20} />, label: "GitHub" },
    { href: "https://x.com/Hasnain_Makada", icon: <FaTwitter size={20} />, label: "Twitter" },
    { href: "mailto:hasnainmakada@gmail.com", icon: <HiOutlineMail size={20} />, label: "Email" },
    { href: "https://drive.google.com/file/d/1A-wfXwMC18ybQIDENtBDNc4jCAq8QkDV/view?usp=sharing", icon: <BsFillPersonLinesFill size={20} />, label: "Resume" },
  ];

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (timeoutId) window.cancelAnimationFrame(timeoutId);

      timeoutId = window.requestAnimationFrame(() => {
        setHasScrolled(window.scrollY > 50);
        const currentPosition = window.scrollY + 100;

        let detectedSection = "home";

        navigationItems.forEach(({ path }) => {
          const section = document.getElementById(path);
          if (section) {
            const { top, bottom } = section.getBoundingClientRect();
            if (top <= 100 && bottom >= 100) {
              detectedSection = path;
            }
          }
        });

        setCurrentSection(detectedSection);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) window.cancelAnimationFrame(timeoutId);
    };
  }, [navigationItems]);

  const NavLink = ({ to, children, onClick }) => (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-80}
      onClick={onClick}
      className={`relative px-4 py-2 text-base font-medium transition-all duration-300 cursor-pointer 
        hover:scale-105 ${
          currentSection === to
            ? "text-blue-400"
            : "text-gray-300 hover:text-blue-400"
        }`}
    >
      {children}
      {currentSection === to && (
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-300" />
      )}
    </Link>
  );

  const SocialLink = ({ href, icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
      aria-label={label}
    >
      {icon}
    </a>
  );

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasScrolled ? "backdrop-blur-lg bg-slate-900/90" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="relative group transform hover:scale-105 transition-transform duration-300">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300" />
            <div className="relative px-4 py-2 bg-slate-900 rounded-lg ring-1 ring-slate-800/50">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
                Hasnain Makada
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            {navigationItems.map(({ title, path }) => (
              <NavLink key={path} to={path}>
                {title}
              </NavLink>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center space-x-3">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 p-3 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-slate-900 transition-all duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen">
          <nav className="space-y-8 text-center">
            {navigationItems.map(({ title, path }) => (
              <div key={path} className="transform hover:scale-105 transition-transform duration-300">
                <NavLink to={path} onClick={() => setIsMenuOpen(false)}>
                  <span className="text-2xl sm:text-3xl">{title}</span>
                </NavLink>
              </div>
            ))}
          </nav>

          {/* Social Links in Mobile Menu */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 px-4">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;