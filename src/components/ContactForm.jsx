import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Send, User, Mail, MessageSquare, Loader2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ContactForm = () => {
  const { isDark } = useTheme();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for email handling (easier setup)
      const response = await fetch("https://formspree.io/f/xqabybdv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.from_name,
          email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.from_email,
          _subject: `Portfolio Contact: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 5000,
          style: {
            background: "#1e293b",
            color: "#f1f5f9",
            border: "1px solid #3b82f6",
          },
        });

        // Reset form
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        "Failed to send message. Please try again or contact me directly at hasnainmakada@gmail.com",
        {
          duration: 5000,
          style: {
            background: "#1e293b",
            color: "#f1f5f9",
            border: "1px solid #ef4444",
          },
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Toaster position="top-right" />

      {/* Form Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
<<<<<<< HEAD
        <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Send me a message</h3>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
=======
        <h3 className="text-2xl font-bold text-gray-200 mb-2">
          Send me a message
        </h3>
        <p className="text-gray-400">
          I'd love to hear from you. Send me a message and I'll respond as soon
          as possible.
        </p>
>>>>>>> fec54b60fca600e01ebc7aabe67220a2994c7bbf
      </motion.div>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
<<<<<<< HEAD
          <motion.div variants={inputVariants} whileFocus="focus" className="relative">
            <label htmlFor="from_name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
=======
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            className="relative"
          >
            <label
              htmlFor="from_name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
>>>>>>> fec54b60fca600e01ebc7aabe67220a2994c7bbf
              <User className="inline w-4 h-4 mr-2" />
              Your Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-800/50 border-slate-700/50 text-gray-200 placeholder-gray-500' 
                  : 'bg-white/50 border-gray-300/50 text-gray-800 placeholder-gray-400'
              }`}
              placeholder="Enter your full name"
            />
          </motion.div>

          {/* Email Input */}
<<<<<<< HEAD
          <motion.div variants={inputVariants} whileFocus="focus" className="relative">
            <label htmlFor="from_email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
=======
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            className="relative"
          >
            <label
              htmlFor="from_email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
>>>>>>> fec54b60fca600e01ebc7aabe67220a2994c7bbf
              <Mail className="inline w-4 h-4 mr-2" />
              Your Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-800/50 border-slate-700/50 text-gray-200 placeholder-gray-500' 
                  : 'bg-white/50 border-gray-300/50 text-gray-800 placeholder-gray-400'
              }`}
              placeholder="Enter your email address"
            />
          </motion.div>
        </div>

        {/* Subject Input */}
<<<<<<< HEAD
        <motion.div variants={inputVariants} whileFocus="focus" className="relative">
          <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
=======
        <motion.div
          variants={inputVariants}
          whileFocus="focus"
          className="relative"
        >
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
>>>>>>> fec54b60fca600e01ebc7aabe67220a2994c7bbf
            <MessageSquare className="inline w-4 h-4 mr-2" />
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 ${
              isDark 
                ? 'bg-slate-800/50 border-slate-700/50 text-gray-200 placeholder-gray-500' 
                : 'bg-white/50 border-gray-300/50 text-gray-800 placeholder-gray-400'
            }`}
            placeholder="What's this about?"
          />
        </motion.div>

        {/* Message Textarea */}
<<<<<<< HEAD
        <motion.div variants={inputVariants} whileFocus="focus" className="relative">
          <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
=======
        <motion.div
          variants={inputVariants}
          whileFocus="focus"
          className="relative"
        >
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
>>>>>>> fec54b60fca600e01ebc7aabe67220a2994c7bbf
            <MessageSquare className="inline w-4 h-4 mr-2" />
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none ${
              isDark 
                ? 'bg-slate-800/50 border-slate-700/50 text-gray-200 placeholder-gray-500' 
                : 'bg-white/50 border-gray-300/50 text-gray-800 placeholder-gray-400'
            }`}
            placeholder="Tell me about your project, ideas, or just say hello..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>
      </motion.form>

      {/* Alternative Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 p-6 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/30"
      >
        <p className="text-center text-gray-400 text-sm">
          Having trouble with the form? You can also reach me directly at{" "}
          <a
            href="mailto:hasnainmakada@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
          >
            hasnainmakada@gmail.com
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default ContactForm;
