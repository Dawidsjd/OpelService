"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Boxes } from './components/ui/BackgroundBoxes';
import { FlipWords } from './components/ui/FlipWords';
import { IconBrandGithub, IconBrandX, IconBrandLinkedin, IconChevronDown } from '@tabler/icons-react';
import { PinContainer } from './components/ui/3DPin';
import { ContainerScroll } from "./components/ui/ContainerScrollAnimation";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Loading from './loading';
import Footer from './components/ui/Footer';
import Waitlist from './components/ui/Waitlist';

const HomePage: React.FC = () => {
  const words = ["Repair with Opel Service", "20+ support videos", "12+ categories", "20+ sections"];
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true); // Stan ładowania

  useEffect(() => {
    const fetchData = async () => {
      try {
        setMounted(true);
      } catch (error) {
        console.error("Error loading content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleScroll = () => {
    const section = document.getElementById('about-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {loading && <Loading />} {/* Wyświetl spinner podczas ładowania */}

      <div className="h-screen relative w-full overflow-hidden bg-[#1d232a] flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-[#1d232a] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        {/* Dodanie logo */}
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

      <div id="about-section" className="w-full bg-white text-black py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 px-6 md:px-0">
          <div className="w-full md:w-1/2 p-6">
            <Image
              src="/about-image.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">About Opel Service</h2>
            <p className="text-lg leading-relaxed">
              At Opel Service, we pride ourselves on providing top-notch repair services with over 20+ support videos, 12+ categories, and 20+ sections dedicated to helping you maintain and repair your Opel vehicle. Our dedicated team ensures you get the best advice, tools, and services needed to keep your car in perfect condition.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Whether you are looking for professional repair services or need detailed guides on how to do it yourself, Opel Service is your go-to platform. Join our community of satisfied customers today!
            </p>
          </div>
        </div>
      </div>

      <div id="next-section" className="relative w-full bg-slate-200 text-center pt-8 pb-16 text-black flex justify-center items-center overflow-x-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 p-6 md:p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Lorem Ipsum</h2>
            <p className="text-lg m-5 sm:m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {mounted && (
            <div className="w-full md:w-1/2 p-6 md:p-8 flex justify-center">
              <div className="h-[15rem] w-full flex items-center justify-center sm:h-[20rem]">
                <PinContainer
                  title="opel-service.vercel.app/opel"
                  href="/opel"
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
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-[#2b313b] relative">
                      <Image
                        src="/oilIcon/oil.svg"
                        alt="Oil Icon"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </PinContainer>
              </div>
            </div>
          )}
        </div>
      </div>

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

        <div className="flex justify-center -mt-36 mb-8">
          <Link 
            href="/market" 
            className="px-6 py-2 bg-[#26313c] text-white font-semibold rounded-lg shadow-md hover:bg-[#2e3a47] focus:outline-none focus:ring-2 focus:ring-[#26313c] focus:ring-opacity-75 transition z-50"
          >
            Go to Market
          </Link>
        </div>
      </div>

 {/* Zaktualizowana sekcja z boxami */}
<div id="technologies-section" className="w-full bg-[#1d232a] text-white py-16">
  <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-6 text-center">
    <h2 className="text-3xl font-bold mb-8 w-full">Użyte Technologie</h2>

    {/* Box z Next.js */}
    <div className="bg-[#26313c] p-6 rounded-lg shadow-md hover:bg-[#2e3a47] transition w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33%-1.5rem)] lg:w-[calc(25%-1rem)]">
      <h3 className="text-xl font-semibold mb-2">Next.js</h3>
      <p className="text-base leading-relaxed">
        Framework do budowania aplikacji React.
      </p>
    </div>

    {/* Box z Tailwind CSS */}
    <div className="bg-[#26313c] p-6 rounded-lg shadow-md hover:bg-[#2e3a47] transition w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33%-1.5rem)] lg:w-[calc(25%-1rem)]">
      <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
      <p className="text-base leading-relaxed">
        Narzędzie do stylizacji CSS opierające się na utility-first.
      </p>
    </div>

    {/* Box z Framer Motion */}
    <div className="bg-[#26313c] p-6 rounded-lg shadow-md hover:bg-[#2e3a47] transition w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33%-1.5rem)] lg:w-[calc(25%-1rem)]">
      <h3 className="text-xl font-semibold mb-2">Framer Motion</h3>
      <p className="text-base leading-relaxed">
        Biblioteka do animacji w React.
      </p>
    </div>

    {/* Box z TypeScript */}
    <div className="bg-[#26313c] p-6 rounded-lg shadow-md hover:bg-[#2e3a47] transition w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33%-1.5rem)] lg:w-[calc(25%-1rem)]">
      <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
      <p className="text-base leading-relaxed">
        Superset JavaScriptu, który dodaje typy statyczne.
      </p>
    </div>

    {/* Box z Tabler Icons */}
    <div className="bg-[#26313c] p-6 rounded-lg shadow-md hover:bg-[#2e3a47] transition w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33%-1.5rem)] lg:w-[calc(25%-1rem)]">
      <h3 className="text-xl font-semibold mb-2">Tabler Icons</h3>
      <p className="text-base leading-relaxed">
        Zestaw nowoczesnych ikon open-source.
      </p>
    </div>
  </div>
</div>





      <Waitlist />
      <Footer />
    </>
  );
};

export default HomePage;
