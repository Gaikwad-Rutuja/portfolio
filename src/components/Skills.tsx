import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { 
      name: 'JavaScript', 
      level: 'Advanced',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'TypeScript', 
      level: 'Intermediate',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    { 
      name: 'React.js', 
      level: 'Advanced',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'HTML5', 
      level: 'Advanced',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS3', 
      level: 'Advanced',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      name: 'Bootstrap', 
      level: 'Intermediate',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
    { 
      name: 'Tailwind CSS', 
      level: 'Advanced',
      icon: 'https://logo.svgcdn.com/l/tailwindcss.svg'
    },
    { 
      name: 'Redux', 
      level: 'Intermediate',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
    },
    {
      name: 'Git',
      level: 'Advanced',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-12 relative">
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} logo`} 
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: skill.level === 'Advanced' ? '90%' : '70%' }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500`}
                />
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating tech symbols background */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          {['</', '{...}', '/>', '( )', '{ }'].map((symbol, index) => (
            <motion.div
              key={index}
              className="absolute text-3xl text-gray-200 dark:text-gray-700 opacity-20"
              initial={{ 
                x: Math.random() * 100, 
                y: Math.random() * 100 
              }}
              animate={{ 
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills; 