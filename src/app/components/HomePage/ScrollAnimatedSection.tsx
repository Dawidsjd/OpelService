import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerScroll } from '../ui/ContainerScrollAnimation';
import { WavyBackground } from '../ui/WavyBackground'; // Import WavyBackground

const ScrollAnimatedSection: React.FC = () => {
  return (
    <div className="relative w-full text-center pb-16 bg-black min-h-screen shadow-dark">
      {/* Dodanie WavyBackground jako tło */}
      <div className="absolute inset-0 z-0 overflow-hidden h-full">
        <WavyBackground
          colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
          waveWidth={50}
          speed="fast"
          waveOpacity={0.3}
          className="absolute inset-0 h-full"
        />
      </div>

      <div className="relative z-10 flex flex-col overflow-hidden h-full  md:-top-44">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
              Professional Services That Deliver! <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Opel Service
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/DeviceBackground/Categories.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top select-none"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      <div className="relative z-10 flex justify-center -mt-44 md:-mt-96 mb-8">
        <Link
          href="/market"
          className="px-6 py-2 bg-[#26313c] text-white font-semibold rounded-lg shadow-md hover:bg-[#2e3a47] focus:outline-none focus:ring-2 focus:ring-[#26313c] focus:ring-opacity-75 transition"
        >
          Go to Market
        </Link>
      </div>
      
    </div>
  );
};

export default ScrollAnimatedSection;
