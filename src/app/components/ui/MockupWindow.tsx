"use client";

import React from 'react';
import Link from 'next/link';
import { IconStar } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react'; // Importujemy useSession

interface MockupWindowProps {
  category: string;
  title: string;
  index: number;
}

const MockupWindow: React.FC<MockupWindowProps> = ({ category, title, index }) => {
  const { data: session } = useSession(); // Uzyskujemy sesję
  const animationDelay = index * 0.1;

  const handleStarClick = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
  
    if (!session || !session.user || !session.user.email) {
      console.log("User not logged in or session user is undefined.");
      return;
    }
  
    try {
      const response = await fetch('/api/favourites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: session.user.email, title }), // Przesyłamy email, a nie ID
      });
  
      if (!response.ok) {
        throw new Error("Failed to add to favourites.");
      }
  
      console.log(`Added to favourites: ${title}`);
    } catch (error) {
      console.error("Error adding to favourites:", error);
    }
  };
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: animationDelay }}
      className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 relative"
    >
      <Link
        href={`/opel/category/${encodeURIComponent(category)}/${encodeURIComponent(title)}`}
        className="block transition-transform transform hover:scale-105 cursor-pointer"
      >
        <div className="mockup-window bg-base-300 relative">
          <div className="absolute top-3 right-3 p-1">
            <div
              className="relative lg:tooltip lg:tooltip-left"
              data-tip="Add to Favourite"
              onClick={handleStarClick}
            >
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
