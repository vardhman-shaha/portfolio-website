// src/components/Navbar.tsx

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const linkVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.1, color: "#00bfff" },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">My Portfolio</div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Center Section - Links */}
      <div className={`flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 sm:flex ${isOpen ? 'flex' : 'hidden'}`}>
        {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
          <motion.div
            key={item}
            variants={linkVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ delay: index * 0.1 }} // Stagger each link by 0.1s
          >
            <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
              <span className="cursor-pointer font-semibold">{item}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
