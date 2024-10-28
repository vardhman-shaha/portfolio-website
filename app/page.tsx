"use client";


import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  return (
    <>
      <Navbar />
      <ParticlesBackground />
      <ThemeToggle />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-[#1e1e1e] via-[#2b2b2b] to-[#121212] text-white relative z-10">
        
        {/* Hero Section */}
        <motion.div
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Vardhman Shaha
          </motion.h1>

          <motion.p
            className="text-xl max-w-3xl text-gray-300 font-light tracking-wide leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            DevOps Engineer with 8+ years of experience in building robust infrastructure for high-performance applications. Skilled in Kubernetes, CI/CD, cloud automation, and modern web technologies.
          </motion.p>
        </motion.div>

        {/* Call-to-Actions */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.8 }}
        >
          <Link href="/projects">
            <motion.button
              className="p-3 px-8 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              View My Projects
            </motion.button>
          </Link>
          <Link href="/experience">
            <motion.button
              className="p-3 px-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              My Experience
            </motion.button>
          </Link>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          className="mt-16 max-w-4xl p-10 rounded-2xl bg-white bg-opacity-5 backdrop-blur-md shadow-2xl text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
            <SkillCard skill="Kubernetes" />
            <SkillCard skill="Docker" />
            <SkillCard skill="AWS" />
            <SkillCard skill="Terraform" />
            <SkillCard skill="CI/CD" />
            <SkillCard skill="Python" />
            <SkillCard skill="JavaScript" />
            <SkillCard skill="Node.js" />
          </div>
        </motion.section>

        {/* Testimonials Carousel */}
        <TestimonialsSection />

        {/* DevOps Workflow Section */}
        <DevOpsWorkflow />
      </main>
      <Footer />
    </>
  );
}

/* Components for Skills, Testimonials, and Workflow */

// Skill Card Component
function SkillCard({ skill }) {
  return (
    <motion.div
      className="flex flex-col items-center p-4 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-2xl font-semibold text-teal-300">{skill}</div>
    </motion.div>
  );
}

// Testimonials Section Component
function TestimonialsSection() {
  const testimonials = [
    { text: "Working with Vardhman was a pleasure; his DevOps skills are top-notch!", name: "John Doe", title: "CTO at TechCorp" },
    { text: "Vardhman brought our deployment pipeline to the next level with his expertise.", name: "Jane Smith", title: "Lead Engineer at DevSolutions" },
    { text: "Thanks to Vardhman, our infrastructure is now more resilient than ever.", name: "Mike Johnson", title: "Cloud Architect at Cloudify" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, testimonials.length]);

  return (
    <motion.section
      className="mt-16 max-w-4xl p-10 rounded-2xl bg-gray-800 bg-opacity-90 shadow-2xl text-center text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-4xl font-bold text-teal-400 mb-6">Testimonials</h2>
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xl italic text-gray-300">"{testimonials[current].text}"</p>
        <p className="mt-4 text-lg font-bold text-cyan-400">- {testimonials[current].name}, {testimonials[current].title}</p>
      </motion.div>
    </motion.section>
  );
}

// DevOps Workflow Section Component
function DevOpsWorkflow() {
  const workflowSteps = [
    { title: "Code", description: "Version control and collaborative coding with Git and GitHub." },
    { title: "Build", description: "Automated builds using Docker and CI/CD pipelines." },
    { title: "Test", description: "Automated testing to ensure reliability and security." },
    { title: "Deploy", description: "Containerized deployments on Kubernetes and cloud platforms." },
    { title: "Monitor", description: "Continuous monitoring to ensure uptime and performance." },
  ];


  return (
    <motion.section
      className="mt-16 max-w-5xl p-10 rounded-2xl bg-gray-800 bg-opacity-80 shadow-2xl text-white text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.5 }}
    >
      <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-6">
        DevOps Workflow
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {workflowSteps.map((step, index) => (
          <motion.div
            key={index}
            className="w-60 p-4 bg-gradient-to-br from-[#1a1a1a] to-[#292929] rounded-lg shadow-lg text-left transform transition-transform hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-purple-300">{step.title}</h3>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
