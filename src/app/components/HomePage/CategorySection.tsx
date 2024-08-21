import React from 'react';
import Image from 'next/image';
import { PinContainer } from '../ui/3DPin';

interface NextSectionProps {
  mounted: boolean;
}

const CategorySection: React.FC<NextSectionProps> = ({ mounted }) => {
  return (
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
              <PinContainer title="opel-service.vercel.app/opel" href="/opel">
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
  );
};

export default CategorySection;
