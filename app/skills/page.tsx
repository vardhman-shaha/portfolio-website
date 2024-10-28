// app/skills/page.tsx

"use client";

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    "Kubernetes", "Docker", "AWS", "Terraform", 
    "CI/CD", "Python", "JavaScript", "Node.js", 
    "Ansible", "Jenkins", "Nagios", "Splunk"
  ];

  return (
    <>
      {/* Include Navbar */}
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        {/* Skills Title */}
        <motion.h1
          className="text-6xl font-extrabold text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h1>

        {/* Skills Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg border border-gray-600 text-center text-teal-300 font-bold text-lg"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
