"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Boxes } from './components/ui/BackgroundBoxes';
import { FlipWords } from './components/ui/FlipWords';
import { IconBrandGithub, IconBrandX, IconBrandLinkedin } from '@tabler/icons-react';
import { PinContainer } from './components/ui/3DPin';
import { ContainerScroll } from "./components/ui/ContainerScrollAnimation";
import Image from "next/image";

const HomePage: React.FC = () => {
  const words = ["Repair with Opel Service", "20+ support videos", "12+ categories", "20+ sections"];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Sekcja zajmująca całą wysokość okna */}
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
      </div>

      {/* Nowa sekcja poniżej */}
      <div className="relative w-full bg-white text-center py-8 text-black flex justify-center items-center overflow-x-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Tekst po lewej stronie */}
          <div className="w-full md:w-1/2 p-6 md:p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Lorem Ipsum</h2>
            <p className="text-lg m-5 sm:m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* Komponent 3DPin po prawej stronie */}
          {mounted && (
            <div className="w-full md:w-1/2 p-6 md:p-8 flex justify-center">
              <div className="h-[15rem] w-full flex items-center justify-center sm:h-[20rem]">
                <PinContainer
                  title="/ui.aceternity.com"
                  href="https://twitter.com/mannupaaji"
                >
                  <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem]">
                    <h3 className="font-bold text-base text-slate-100">
                      Aceternity UI
                    </h3>
                    <div className="text-base font-normal">
                      <span className="text-slate-500">
                        Customizable Tailwind CSS and Framer Motion Components.
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  </div>
                </PinContainer>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Nowa sekcja z HeroScrollDemo */}
      <div className="relative w-full bg-gray-100 text-center pb-16">
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  Unleash the power of <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Scroll Animations
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={`/vercel.svg`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>

        {/* Przycisk Go to Market */}
        <div className="flex justify-center -mt-36 mb-8">
          <Link 
            href="/market" 
            className="px-6 py-2 bg-[#26313c] text-white font-semibold rounded-lg shadow-md hover:bg-[#2e3a47] focus:outline-none focus:ring-2 focus:ring-[#26313c] focus:ring-opacity-75 transition"
          >
            Go to Market
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
