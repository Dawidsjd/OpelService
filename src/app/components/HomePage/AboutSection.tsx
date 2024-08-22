
import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <div id="about-section" className="w-full bg-white text-black py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 px-6 md:px-0">
        <div className="w-full md:w-1/2 p-6">
          <Image
            src="/aboutGraphic/opel_PixelArt.jpg"
            alt="About Us"
            width={600}
            height={400}
            className="rounded-lg object-cover shadow-lg"
            loading='lazy'
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
  );
};

export default AboutSection;
