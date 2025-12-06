import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Dynamic Software Engineer with a proven track record at SpringCT, leading the development of high-performance, 
            SEO-optimized websites utilizing advanced technologies such as JavaScript, React.js, and Tailwind CSS.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            My expertise in collaborative tools like GitLab and Jira enhances my ability to transform complex requirements 
            into user-friendly solutions. I have demonstrated excellence in problem-solving and teamwork, which fuels 
            continuous improvement and innovation within projects.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am committed to leveraging technical skills to deliver impactful digital experiences and am always eager 
            to learn and adapt to new technologies and challenges.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 