import React from 'react';
import Image from 'next/image';
import { IconBrandGithub, IconBrandX, IconBrandLinkedin } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#1d232a] text-neutral-content p-10">
      <aside>
        {/* Zastąpione SVG logo z użyciem komponentu Image */}
        <div className="relative inline-block w-28 h-28 opacity-40 pointer-events-none select-none">
          <Image 
            src="/logo/logo.png" 
            alt="Logo" 
            layout="fill" 
            objectFit="contain" 
          />
        </div>
        <p className="font-bold">
          Opel Service
          <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Ikony mediów społecznościowych z Tablera */}
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-gray-100 transition-colors"
          >
            <IconBrandGithub size={24} />
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-gray-100 transition-colors"
          >
            <IconBrandX size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-gray-100 transition-colors"
          >
            <IconBrandLinkedin size={24} />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
