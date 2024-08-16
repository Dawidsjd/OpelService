"use client"

import React from 'react';
import Link from 'next/link';
import { IconStar } from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface MockupWindowProps {
  category: string;
  title: string;
  index: number; // Dodaj index jako prop
}

const MockupWindow: React.FC<MockupWindowProps> = ({ category, title, index }) => {
  const animationDelay = index * 0.1; // Dodaj opóźnienie animacji

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: animationDelay }} // Zastosuj opóźnienie
      className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 relative"
    >
      <Link
        href={`/opel/category/${encodeURIComponent(category)}/${encodeURIComponent(title)}`}
        className="block transition-transform transform hover:scale-105 cursor-pointer"
      >
        <div className="mockup-window bg-base-300 relative">
          {/* IconStar in the top-right corner */}
          <div className="absolute top-3 right-3 p-1">
            <div className="relative lg:tooltip lg:tooltip-left" data-tip="Add to Favourite">
              <IconStar size={20} className="text-gray-500 transition-colors duration-300 hover:text-yellow-500" />
            </div>
          </div>
          <div className="bg-base-200 font-bold flex justify-center px-6 py-24">
            {title}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MockupWindow;
