// app/experience/page.tsx

"use client";

import Navbar from '@/components/Navbar';

export default function Experience() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent mb-10">
          My Experience
        </h1>
        <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-lg shadow-lg space-y-8">
          
          {/* DEVOPS ENGINEER - VOICE */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-teal-300">DevOps Engineer</h2>
            <p className="text-sm text-gray-400">VOICE, Pune | 06/2020 - Present</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
              <li>Configured, managed, and monitored cloud-based services on AWS (EC2, S3, EBS, ELB, RDS) using Terraform and Ansible.</li>
              <li>Developed automated deployment processes and scripts for seamless transitions from development to production.</li>
              <li>Created CI/CD pipelines using Jenkins and Docker to automate application build processes.</li>
              <li>Utilized Nagios and Splunk for proactive system health monitoring.</li>
              <li>Maintained version control using GitLab and collaborated closely with developers for quick issue resolution.</li>
              <li>Automated code build and deployment procedures to streamline the development lifecycle.</li>
            </ul>
          </div>

          {/* SR. PRODUCTION SUPPORT - EXPERIS IT PVT. LTD */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-teal-300">Sr. Production Support</h2>
            <p className="text-sm text-gray-400">Experis IT Pvt. Ltd, Pune | 05/2019 - 05/2020</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
              <li>Provided technical support for production systems, resolving complex issues promptly.</li>
              <li>Created and maintained system documentation for production applications.</li>
              <li>Developed scripts to automate production environment processes, optimizing operational efficiency.</li>
              <li>Conducted root cause analysis for issue resolution and monitored logs for anomalies.</li>
            </ul>
          </div>

          {/* SOFTWARE ENGINEER - ONWARD E SERVICES LTD */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-teal-300">Software Engineer</h2>
            <p className="text-sm text-gray-400">Onward eServices Ltd, Pune | 04/2018 - 05/2019</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
              <li>Automated build and deployment processes using CI/CD tools.</li>
              <li>Collaborated with cross-functional teams to ensure QA throughout development.</li>
              <li>Created technical documentation, including design documents, test plans, and release notes.</li>
              <li>Analyzed and resolved software-related technical issues in the production environment.</li>
            </ul>
          </div>

          {/* PRODUCTION SUPPORT ENGINEER - SELLCRAFT GLOBAL SOLUTIONS PVT. LTD */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-teal-300">Production Support Engineer</h2>
            <p className="text-sm text-gray-400">Sellcraft Global Solutions Pvt. Ltd, Pune | 05/2017 - 03/2018</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
              <li>Documented root cause analysis findings for incidents in the production environment.</li>
              <li>Deployed patches and updates to applications in production environments.</li>
              <li>Monitored system performance, identified issues, and implemented solutions.</li>
              <li>Provided on-call support for critical production systems.</li>
            </ul>
          </div>

          {/* ASSOCIATE OPS - WNS GLOBAL SERVICES PVT. LTD */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-teal-300">Associate Ops</h2>
            <p className="text-sm text-gray-400">WNS Global Services Pvt. Ltd, Pune | 10/2015 - 11/2016</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
              <li>Coordinated hardware and software installation and upgrades for production infrastructure.</li>
              <li>Analyzed and resolved technical issues to maintain high system availability.</li>
              <li>Supported development teams on bug fixes and other improvements for deployed applications.</li>
              <li>Maintained process documentation and provided timely incident resolution.</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
