// app/page.tsx
import React from 'react';
import Link from 'next/link';
import { Boxes } from './components/ui/BackgroundBoxes';
import { cn } from '@/lib/utils';
import { FlipWords } from './components/ui/FlipWords';
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'; // Import ikon z Tabler Icons

const HomePage: React.FC = () => {

  const words = ["Repair with Opel Service", "20+ support videos", "12+ categories", "20+ sections"];
  
  return (
    <div className="h-screen relative w-full overflow-hidden bg-[#1d232a] flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-[#1d232a] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      {/* Dodanie logo */}
      <img 
        src="/logo/logo.png" 
        alt="Logo" 
        className="w-32 h-auto mb-6 relative z-20"
      />
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

      {/* Dostosowanie przycisku */}
      <Link 
        href="/opel" 
        className="mt-6 px-6 py-2 bg-[#26313c] text-white font-semibold rounded-lg shadow-md hover:bg-[#2e3a47] focus:outline-none focus:ring-2 focus:ring-[#26313c] focus:ring-opacity-75 transition relative z-20"
      >
        Go to Opel
      </Link>

      {/* Dodanie ikon społecznościowych */}
      <div className="absolute bottom-16 flex space-x-4 z-20">
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-gray-100 transition-colors"
        >
          <IconBrandGithub size={24} />
        </a>
        <a 
          href="https://twitter.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-gray-100 transition-colors"
        >
          <IconBrandX size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-gray-100 transition-colors"
        >
          <IconBrandLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
