import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
        <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0h40v40H0z" fill="none"/>
              <circle cx="20" cy="20" r="2" className="text-current fill-current"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-pattern)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Rutuja Gaikwad
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Software Engineer
            </motion.h2>
            
            <motion.p 
              className="max-w-2xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Dynamic Software Engineer with expertise in JavaScript, React.js, and Tailwind CSS.
              Passionate about creating high-performance, SEO-optimized websites and user-friendly solutions.
            </motion.p>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Me
              </Link>
              <Link
                to="/about"
                className="border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Background circles */}
              <motion.div
                className="absolute -z-10 w-full h-full"
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full border-2 border-blue-500 rounded-full opacity-20" />
                <div className="absolute top-4 left-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border-2 border-purple-500 rounded-full opacity-20" />
              </motion.div>

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg"
              >
                <img
                  src="/your-image.jpg" // Replace with your actual image path
                  alt="Rutuja Gaikwad"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Tech stack floating icons */}
              {['⚛️', '🌐', '📱', '💻'].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="absolute text-2xl"
                  initial={{ 
                    x: 0, 
                    y: 0,
                    scale: 1,
                  }}
                  animate={{ 
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  style={{
                    top: `${20 + index * 30}%`,
                    left: index % 2 ? '10%' : '80%',
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 