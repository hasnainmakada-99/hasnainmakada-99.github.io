import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, 
  FaGitAlt, FaFigma, FaJava, FaCode, FaHtml5, FaCss3Alt,
  FaGithub, FaGitlab, FaJenkins, FaPhp
} from 'react-icons/fa';
import { 
  SiFlutter, SiMongodb, SiPostgresql, SiKubernetes,
  SiTensorflow, SiFirebase, SiGraphql, SiRedis,
  SiTypescript, SiNextdotjs, SiTailwindcss, SiVercel,
  SiJavascript, SiDart, SiGo, SiCplusplus, SiC,
  SiWordpress, SiExpress, SiMicrosoftazure,
  SiGit, SiSupabase, SiPrisma, SiSocketdotio,
  SiOpencv, SiPandas, SiNumpy, SiScikitlearn, SiKeras,
  SiMysql, SiSqlite
} from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

const Skills2026 = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Comprehensive icon mapping for all technologies
  const skillIcons = {
    // Frontend
    'React': <FaReact className="text-[#61DAFB]" />,
    'Next.js': <SiNextdotjs className={isDark ? 'text-white' : 'text-black'} />,
    'TypeScript': <SiTypescript className="text-[#3178C6]" />,
    'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
    'HTML5': <FaHtml5 className="text-[#E34F26]" />,
    'CSS3': <FaCss3Alt className="text-[#1572B6]" />,
    'Tailwind': <SiTailwindcss className="text-[#06B6D4]" />,
    'TailwindCSS': <SiTailwindcss className="text-[#06B6D4]" />,
    
    // Backend
    'Node.js': <FaNodeJs className="text-[#339933]" />,
    'Express': <SiExpress className={isDark ? 'text-white' : 'text-black'} />,
    'Express JS': <SiExpress className={isDark ? 'text-white' : 'text-black'} />,
    'Python': <FaPython className="text-[#3776AB]" />,
    'Java': <FaJava className="text-[#007396]" />,
    'PHP': <FaPhp className="text-[#777BB4]" />,
    'GO': <SiGo className="text-[#00ADD8]" />,
    'Go': <SiGo className="text-[#00ADD8]" />,
    'C++': <SiCplusplus className="text-[#00599C]" />,
    'C': <SiC className="text-[#A8B9CC]" />,
    
    // Mobile
    'Flutter': <SiFlutter className="text-[#02569B]" />,
    'Dart': <SiDart className="text-[#0175C2]" />,
    
    // Databases
    'MongoDB': <SiMongodb className="text-[#47A248]" />,
    'PostgreSQL': <SiPostgresql className="text-[#4169E1]" />,
    'MySQL': <SiMysql className="text-[#4479A1]" />,
    'SQLite': <SiSqlite className="text-[#003B57]" />,
    'Redis': <SiRedis className="text-[#DC382D]" />,
    'Firebase': <SiFirebase className="text-[#FFCA28]" />,
    'Supabase': <SiSupabase className="text-[#3ECF8E]" />,
    
    // Cloud & DevOps
    'AWS': <FaAws className="text-[#FF9900]" />,
    'Azure': <SiMicrosoftazure className="text-[#0078D4]" />,
    'Docker': <FaDocker className="text-[#2496ED]" />,
    'Kubernetes': <SiKubernetes className="text-[#326CE5]" />,
    'Vercel': <SiVercel className={isDark ? 'text-white' : 'text-black'} />,
    
    // Tools & Others
    'Git': <FaGitAlt className="text-[#F05032]" />,
    'GitHub': <FaGithub className={isDark ? 'text-white' : 'text-black'} />,
    'GitLab': <FaGitlab className="text-[#FC6D26]" />,
    'Figma': <FaFigma className="text-[#F24E1E]" />,
    'WordPress': <SiWordpress className="text-[#21759B]" />,
    'Wordpress': <SiWordpress className="text-[#21759B]" />,
    'GraphQL': <SiGraphql className="text-[#E10098]" />,
    'Prisma': <SiPrisma className="text-[#2D3748]" />,
    'Socket.io': <SiSocketdotio className={isDark ? 'text-white' : 'text-black'} />,
    
    // AI/ML
    'TensorFlow': <SiTensorflow className="text-[#FF6F00]" />,
    'OpenCV': <SiOpencv className="text-[#5C3EE8]" />,
    'Pandas': <SiPandas className="text-[#150458]" />,
    'NumPy': <SiNumpy className="text-[#013243]" />,
    'Scikit-learn': <SiScikitlearn className="text-[#F7931E]" />,
    'Keras': <SiKeras className="text-[#D00000]" />,
  };

  const defaultSkills = [
    { skill_tag: 'React' },
    { skill_tag: 'Node.js' },
    { skill_tag: 'Flutter' },
    { skill_tag: 'Python' },
    { skill_tag: 'AWS' },
    { skill_tag: 'Docker' },
    { skill_tag: 'MongoDB' },
    { skill_tag: 'TypeScript' },
    { skill_tag: 'Next.js' },
    { skill_tag: 'Tailwind' },
    { skill_tag: 'Firebase' },
    { skill_tag: 'Git' },
  ];

  const skills = defaultSkills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getIcon = (skillName) => {
    const cleanName = skillName.trim();
    return skillIcons[cleanName] || <FaCode className="text-yellow-400" />;
  };

  return (
    <div
      id="skills"
      ref={ref}
      className={`relative min-h-screen py-24 px-4 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-[#0f1420] via-[#1a1f2e] to-[#0f1420]'
          : 'bg-gradient-to-b from-yellow-50 via-white to-amber-50'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-yellow-500/10' : 'bg-yellow-400/8'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '20%', left: '-5%' }}
        />
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-amber-500/10' : 'bg-amber-400/8'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '20%', right: '-5%' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
          >
            <FaCode className="text-yellow-400" />
            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Tech Stack
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text animate-gradient-shift">
              Technologies & Tools
            </span>
          </h2>

          <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A comprehensive arsenal of modern technologies I use to build scalable, performant applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-yellow-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Skill card */}
              <div className="relative glass-card rounded-2xl p-6 hover-lift h-full flex flex-col items-center justify-center gap-4 text-center">
                {/* Icon */}
                <motion.div
                  className="text-5xl sm:text-6xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {getIcon(skill.skill_tag)}
                </motion.div>

                {/* Skill name */}
                <span className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                  isDark 
                    ? 'text-gray-200 group-hover:text-white' 
                    : 'text-gray-800 group-hover:text-gray-900'
                }`}>
                  {skill.skill_tag}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-card rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-4xl"
              >
                🤖
              </motion.div>
              <h3 className={`text-2xl sm:text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Always Learning
              </h3>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-4xl"
              >
                ✨
              </motion.div>
            </div>
            
            <p className={`text-base sm:text-lg mb-8 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Technology evolves rapidly, and so do I. Currently diving deep into cutting-edge AI technologies and tools that are shaping the future.
            </p>

            {/* Currently Learning Pills */}
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { name: 'Generative AI', icon: '🎨', color: 'from-purple-500 to-pink-500' },
                { name: 'ChatGPT API', icon: '💬', color: 'from-green-500 to-teal-500' },
                { name: 'Claude AI', icon: '🧠', color: 'from-yellow-500 to-amber-500' },
                { name: 'Gemini AI', icon: '⭐', color: 'from-orange-500 to-red-500' },
                { name: 'Stable Diffusion', icon: '🖼️', color: 'from-amber-500 to-yellow-500' },
                { name: 'LangChain', icon: '🔗', color: 'from-yellow-500 to-orange-500' },
                { name: 'Vector Databases', icon: '📊', color: 'from-pink-500 to-rose-500' },
                { name: 'AI Agents', icon: '🤝', color: 'from-cyan-500 to-blue-500' },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${tech.color} text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2`}
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.8 }}
              className={`mt-8 text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}
            >
              Exploring the intersection of AI, automation, and human creativity to build smarter solutions
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills2026;
