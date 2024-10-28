// app/projects/page.tsx

"use client";

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        
        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h1>

        {/* Project Highlights */}
        <div className="mt-10 max-w-5xl space-y-6">
          <div className="p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-teal-300 mb-2">AWS Cloud Management</h2>
            <p className="text-gray-400">
              Managed cloud services like EC2, S3, EBS, ELB, and RDS using Terraform and Ansible, ensuring reliable infrastructure provisioning and configuration management.
            </p>
          </div>

          <div className="p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-teal-300 mb-2">CI/CD Pipelines with Jenkins & Docker</h2>
            <p className="text-gray-400">
              Developed CI/CD pipelines using Jenkins and Docker to automate application builds and deployments, accelerating development and ensuring seamless releases.
            </p>
          </div>

          <div className="p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-teal-300 mb-2">System Monitoring with Nagios & Splunk</h2>
            <p className="text-gray-400">
              Implemented system health monitoring using Nagios and Splunk for early issue detection and faster response times, enhancing system reliability.
            </p>
          </div>

          <div className="p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-teal-300 mb-2">Automated Deployment Scripts</h2>
            <p className="text-gray-400">
              Created automated deployment scripts for efficient transition from development to production environments, minimizing manual interventions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

