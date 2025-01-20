import React from 'react';

const Skills = ({ content }) => {
  // Default skills array in case content is not provided
  const defaultSkills = [
    { skill_tag: "React" },
    { skill_tag: "Node.js" },
    { skill_tag: "Flutter" },
    { skill_tag: "AWS" },
    { skill_tag: "Docker" }
  ];

  // Use provided content or fallback to default skills
  const skills = content?.fields.skills || defaultSkills;

  return (
    <div
      id="skills"
      className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900 "
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48" />
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header with gradient text effect */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build innovative solutions in 2025 and beyond.
          </p>
        </div>

        {/* Skills Grid - Responsive layout that adjusts based on screen size */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Background blur effect for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Skill card with glass morphism effect */}
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 
                transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg 
                flex flex-col items-center justify-center gap-3">
                
                {/* Skill icon using first letter */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 
                  flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">
                    {skill.skill_tag.charAt(0)}
                  </span>
                </div>

                {/* Skill name with hover effect */}
                <span className="text-gray-200 font-medium text-center group-hover:text-blue-400 transition-colors duration-300">
                  {skill.skill_tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
