import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'SpringCT',
      period: '10/2023 - Present',
      location: 'Pune',
      description: [
        'Developed and maintained real-time applications using JavaScript and TypeScript, React.js, Tailwind CSS, and libraries like Redux, Antd, Zod.',
        'Created responsive and high-performance websites utilizing JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, PHP, and jQuery, with SEO.',
        'Employed GitHub, GitLab, and SVN for version control to manage and track code changes with Utlining Jira for project management and time tracking.'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'SpringCT',
      period: '07/2023 - 10/2023',
      location: 'Pune',
      description: [
        'Created responsive websites with HTML and CSS.',
        'Gained hands-on experience in JavaScript.',
        'Gained hands-on experience with various code maintenance tools like GitHub, GitLab, and task and issue tracking tools like JIRA and Redmine.'
      ]
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 dark:text-gray-300">{exp.period}</p>
                <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 