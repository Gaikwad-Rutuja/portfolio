import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = {
    degree: 'Computer Engineer',
    institution: 'MES College of Engineering, Pune',
    period: 'June 2019 - June 2023',
    gpa: 'CGPA - 9.25',
    achievements: [
      {
        title: 'Lila Girl 2019',
        description: 'Received a scholarship from the Lila Poonawalla Foundation and completed both technical and non-technical courses.'
      }
    ]
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">{education.degree}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">{education.institution}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-500 dark:text-gray-400">{education.period}</p>
              <p className="text-blue-500 font-semibold">{education.gpa}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Achievements</h4>
            {education.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <h5 className="text-lg font-medium mb-2">{achievement.title}</h5>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education; 