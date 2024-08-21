
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Boxes } from '../ui/BackgroundBoxes';
import { FlipWords } from '../ui/FlipWords';
import { IconBrandGithub, IconBrandX, IconBrandLinkedin, IconChevronDown } from '@tabler/icons-react';
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
      <div className="h-screen relative w-full overflow-hidden bg-[#1d232a] flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-[#1d232a] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="relative w-32 h-auto mb-6 pointer-events-none">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            layout="responsive"
            width={128}
            height={128}
            objectFit="contain"
          />
        </div>
        <h1 className="relative z-10 text-5xl md:text-7xl text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 drop-shadow-lg">
          Opel Service
        </h1>
        <div className="flex justify-center items-center px-4 pt-4">
          <div className="mx-auto font-normal relative z-20">
            <FlipWords
              words={words}
              className="text-lg md:text-xl text-[#d1d5db]"
            />
            <br />
          </div>
        </div>
        <Link
          href="/opel"
          className="mt-6 px-6 py-2 bg-[#26313c] text-white font-semibold rounded-lg shadow-md hover:bg-[#2e3a47] focus:outline-none focus:ring-2 focus:ring-[#26313c] focus:ring-opacity-75 transition relative z-20"
        >
          Go to Opel
        </Link>
        <div className="absolute bottom-16 flex space-x-4 z-20">
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
        <div className="absolute bottom-2 z-20 flex justify-center">
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
