import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerScroll } from '../ui/ContainerScrollAnimation';

const ScrollAnimatedSection: React.FC = () => {
  return (
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
            src={`/DeviceBackground/Categories.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top select-none"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      <div className="flex justify-center -mt-52 mb-8">
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
