"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import BackgroundVideo from '../ui/BackgroundVideo';  // Import komponentu BackgroundVideo
import { FlipWords } from '../ui/FlipWords';
import { IconBrandGithub, IconBrandX, IconBrandLinkedin, IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Loading from '@/app/loading';

interface HeaderSectionProps {
  words: string[];
  handleScroll: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ words, handleScroll }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="h-screen relative w-full overflow-hidden bg-[#1d232a] flex flex-col items-center justify-center">
        {/* Background Video */}
        <BackgroundVideo src="/videos/opel_background.mp4" blurAmount={5} />

        {/* Overlay */}
        <div className="absolute inset-0 w-full h-full bg-[#1d232a] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        {/* Content */}
        <h1 className="relative z-30 text-5xl md:text-7xl text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 drop-shadow-lg">
          Opel Service
        </h1>
        <div className="flex justify-center items-center px-4 pt-4">
          <div className="mx-auto font-normal relative z-30">
            <FlipWords
              words={words}
              className="text-lg md:text-xl text-[#d1d5db]"
            />
            <br />
          </div>
        </div>

        {/* Buttons */}
        <div className="relative z-30 flex flex-col text-center xs:flex-row space-y-4 xs:space-y-0 xs:space-x-4 mt-6">
          <div
            className="relative px-8 py-3 font-semibold text-white border border-neutral-100 hover:border-[#1d232a] rounded-lg overflow-hidden group cursor-pointer"
            onClick={handleScroll}
          >
            <span className="absolute inset-0 bg-[#1d232a] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
            <span className="relative z-10">Explore</span>
          </div>
          <Link
            href="/opel"
            className="relative px-8 py-3 font-semibold text-white border border-neutral-100 hover:border-[#1d232a] rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 bg-[#1d232a] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
            <span className="relative z-10 flex items-center">
              Go to Tutorials
              <IconChevronRight size={20} className="ml-2" />
            </span>
          </Link>
        </div>

        <div className="absolute bottom-16 flex space-x-4 z-30">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-gray-100 transition-colors"
          >
            <IconBrandGithub size={24} />
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-gray-100 transition-colors"
          >
            <IconBrandX size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-gray-100 transition-colors"
          >
            <IconBrandLinkedin size={24} />
          </Link>
        </div>
        <div className="absolute bottom-2 z-30 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScroll}
            className="cursor-pointer"
          >
            <IconChevronDown
              size={36}
              className="text-white opacity-25 animate-pulse"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
