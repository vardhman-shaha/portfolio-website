// src/components/Navbar.tsx

import Link from 'next/link';
import { motion } from 'framer-motion';

const linkVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.1, color: "#00bfff" },
};

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">My Portfolio</div>
      </div>
      
      {/* Center Section - Links */}
      <div className="flex items-center space-x-8">
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
