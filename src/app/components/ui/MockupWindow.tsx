"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

interface MockupWindowProps {
  category: string;
  title: string;
  index: number;
  initialIsFavourite?: boolean; // Zmieniono nazwę na initialIsFavourite
}

const MockupWindow: React.FC<MockupWindowProps> = ({ category, title, index, initialIsFavourite }) => {
  const { data: session } = useSession();
  const [isFavourited, setIsFavourited] = useState(initialIsFavourite);
  const animationDelay = index * 0.1;

  // Efekt do załadowania stanu ulubionych z serwera
  useEffect(() => {
    const fetchFavouriteStatus = async () => {
      if (!session || !session.user || !session.user.email) return;
      
      try {
        const response = await fetch('/api/favourites/status', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: session.user.email,
            title,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setIsFavourited(data.isFavourite);
        }
      } catch (error) {
        console.error("Error fetching favourite status:", error);
      }
    };

    fetchFavouriteStatus();
  }, [session, title]);

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
        body: JSON.stringify({
          email: session.user.email,
          title,
          action: isFavourited ? 'remove' : 'add',
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update favourites.");
      }

      setIsFavourited(!isFavourited);
      console.log(`${isFavourited ? 'Removed from' : 'Added to'} favourites: ${title}`);
    } catch (error) {
      console.error("Error updating favourites:", error);
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
        <div className="mockup-window bg-base-300 relative shadow-lg">
          <div className="absolute top-3 right-3 p-1">
            <div
              className="relative lg:tooltip lg:tooltip-left"
              data-tip={isFavourited ? "Remove from Favourite" : "Add to Favourite"}
              onClick={handleStarClick}
            >
              {isFavourited ? (
                <IconStarFilled size={20} className="text-yellow-500 transition-colors duration-300" />
              ) : (
                <IconStar size={20} className="text-gray-500 transition-colors duration-300 hover:text-yellow-500" />
              )}
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
