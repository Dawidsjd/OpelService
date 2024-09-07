"use client";

import React, { Suspense, useEffect, useState, useRef } from 'react';
import Loading from './loading';
import Footer from './components/ui/Footer';
import Waitlist from './components/ui/Waitlist';
import HeaderSection from './components/HomePage/HeaderSection';
import ScrollAnimatedSection from './components/HomePage/ScrollAnimatedSection';
import TechnologiesSection from './components/HomePage/TechnologiesSection';
import { TimelineSection } from './components/HomePage/TimeLineSection';
import SponsorSlider from './components/ui/SponsorSlider';
import NavbarHomePage from './components/Navbar/NavbarHomePage';
import { CanvasRevealEffectDemo } from './components/ui/CanvasRevealEffectDemo';
import ScrollUp from './components/ui/ScrollUp';

const HomePage: React.FC = () => {
  const words = ["Repair with Opel Service", "20+ support videos", "12+ categories", "20+ sections"];
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const sponsorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setMounted(true);
      } catch (error) {
        console.error("Error loading content:", error);
      }
    };

    fetchData();

    // Parallax effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isMobile = window.innerWidth <= 768; // Adjust width threshold for mobile devices

      if (!isMobile && headerRef.current) {
        headerRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      } else if (headerRef.current) {
        // Reset transform if on mobile
        headerRef.current.style.transform = 'translateY(0)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTimelineScroll = () => {
    const section = document.getElementById('timeline-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <NavbarHomePage />
        <div className="relative overflow-hidden">
          <div ref={headerRef} className="relative z-10">
            <HeaderSection words={words} handleScroll={handleTimelineScroll} />
          </div>
          <div className="relative z-30">
            <SponsorSlider />
          </div>
          <div className="relative z-30">
            <TimelineSection />
            <ScrollAnimatedSection />
            <TechnologiesSection />
            
            <Waitlist />
            <Footer />
          </div>
        </div>
        <ScrollUp/>
      </Suspense>
    </>
  );
};

export default HomePage;
