import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ContactForm from "./ContactForm";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();
  
  // Default contact links
  const contacts = [
    {
      contact_name: "GitHub",
      contact_url: "https://github.com/hasnainmakada-99",
      contact_logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    },
    {
      contact_name: "LinkedIn",
      contact_url: "https://linkedin.com/in/hasnainmakada-99",
      contact_logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
    },
    {
      contact_name: "Twitter",
      contact_url: "https://x.com/Hasnain_Makada",
      contact_logo: "https://abs.twimg.com/icons/apple-touch-icon-192x192.png"
    },
    {
      contact_name: "Email",
      contact_url: "mailto:hasnainmakada@gmail.com",
      contact_logo: "https://www.svgrepo.com/show/349378/gmail.svg"
    }
  ];
  // Animation variants for staggered card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Contact card component with enhanced design
  const ContactCard = ({ contact }) => (
    <motion.a
      href={contact.contact_url}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      className={`group relative flex items-center p-6 backdrop-blur-sm rounded-xl border hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 ${
        isDark 
          ? 'bg-slate-800/50 border-slate-700/50' 
          : 'bg-white/50 border-gray-300/50'
      }`}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Contact logo with animation */}
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300" />
        <img
          src={contact.contact_logo}
          alt={`${contact.contact_name} logo`}
          className={`relative w-16 h-16 rounded-full object-cover border-2 group-hover:border-blue-500/50 transition-colors duration-300 ${
            isDark ? 'border-slate-700/50' : 'border-gray-300/50'
          }`}
        />
      </div>

      {/* Contact information */}
      <div className="ml-6 flex-grow">
        <h3 className={`text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300 ${
          isDark ? 'text-gray-200' : 'text-gray-800'
        }`}>
          {contact.contact_name}
        </h3>
        <p className={`mt-1 text-sm transition-colors duration-300 ${
          isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-500'
        }`}>
          Click to connect
        </p>
      </div>

      {/* Arrow indicator */}
      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300 ml-4" />
    </motion.a>
  );

  return (
    <section
      id="contact"
      className={`relative min-h-screen flex flex-col justify-center py-20 ${
        isDark 
          ? 'bg-gradient-to-b from-slate-900 to-slate-950' 
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.1),transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section header with animations */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mt-4 text-lg sm:text-xl max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Feel free to reach out through any of these platforms. I'm always open to new opportunities and conversations.
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <ContactForm />
        </motion.div>

        {/* Contact cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;