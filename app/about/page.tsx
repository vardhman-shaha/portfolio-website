// src/pages/about.tsx

"use client";

//import Link from 'next/link';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar'; // Make sure Navbar is available globally

export default function About() {
  return (
    <>
      {/* Include Navbar */}
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        {/* About Me Title */}
        <motion.h1
          className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>




  {/* Image Section */}
  <motion.div
          className="mt-8 w-48 h-48 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <img
            src="/images/me_professional.jpg"
            alt="Vardhman Shaha"
            className="rounded-full border-4 border-gray-500 shadow-lg"
          />
        </motion.div>





        {/* Introduction Section */}
        <motion.p
          className="text-lg mt-6 text-center max-w-3xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I’m Vardhman Shaha, a DevOps Engineer with over 8 years of experience in building, deploying, and managing infrastructure for high-performance applications. Skilled in Kubernetes, CI/CD, cloud automation, and modern web technologies, I am passionate about optimizing and automating workflows to achieve maximum efficiency.
        </motion.p>

        {/* Professional and Personal Sections */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg border border-gray-600">
            <h2 className="text-2xl font-bold text-teal-300 mb-4">Professional Background</h2>
            <p className="text-gray-400">
              Over the years, I’ve developed extensive experience in handling large-scale infrastructure deployments and managing complex, multi-cloud environments. I have a strong foundation in containerization and orchestration using Kubernetes, and a deep understanding of continuous integration and delivery pipelines.
            </p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg border border-gray-600">
            <h2 className="text-2xl font-bold text-teal-300 mb-4">Personal Interests</h2>
            <p className="text-gray-400">
              When I’m not working, I enjoy exploring new tech, contributing to open-source projects, and enhancing my skills in web development. Outside of tech, I love hiking, photography, and exploring different cultures and cuisines.
            </p>
          </div>
        </motion.div>

        {/* Key Skills Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6">
            Key Skills
          </h3>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-gray-300">
            {["Kubernetes", "Docker", "AWS", "Terraform", "CI/CD", "Python", "JavaScript", "Node.js"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gray-700 shadow-md text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
