"use client";

import React, { Suspense, useEffect, useState } from 'react';
import Loading from './loading';
import Footer from './components/ui/Footer';
import Waitlist from './components/ui/Waitlist';
import HeaderSection from './components/HomePage/HeaderSection';
import AboutSection from './components/HomePage/AboutSection';
import CategorySection from './components/HomePage/CategorySection';
import ScrollAnimatedSection from './components/HomePage/ScrollAnimatedSection';
import TechnologiesSection from './components/HomePage/TechnologiesSection';
import { TimelineSection } from './components/HomePage/TimeLineSection';

const HomePage: React.FC = () => {

  const words = ["Repair with Opel Service", "20+ support videos", "12+ categories", "20+ sections"];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setMounted(true);
      } catch (error) {
        console.error("Error loading content:", error);
      }
    };

    fetchData();
  }, []);

  const handleScroll = () => {
    const section = document.getElementById('timeline-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>

    <Suspense fallback={<Loading />}>
      <HeaderSection words={words} handleScroll={handleScroll} />
      <TimelineSection/>
      <ScrollAnimatedSection />
      {/* <AboutSection /> */}
      {/* <CategorySection mounted={mounted} /> */}
      <TechnologiesSection />
      <Waitlist />
      <Footer />
    </Suspense>

    </>
  );
};

export default HomePage;