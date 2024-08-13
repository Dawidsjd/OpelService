// app/page.tsx
import React from 'react';
import Link from 'next/link';
import { Boxes } from './components/ui/BackgroundBoxes';
import { cn } from '@/lib/utils';

const HomePage: React.FC = () => {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      {/* Dodanie logo */}
      <img 
        src="/logo/logo.png" 
        alt="Logo" 
        className="w-24 h-auto mb-6 relative z-20"
      />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Opel Service
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        A website that will help you stop struggling with your car
      </p>
      
      {/* Dodanie przycisku */}
      <Link 
        href="/opel" 
        className="mt-6 px-6 py-2 bg-[#1e293b] text-white font-semibold rounded-lg shadow-md hover:bg-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#1e293b] focus:ring-opacity-75 transition relative z-20"
      >
        Go to Opel
      </Link>
    </div>
  );
};

export default HomePage;
