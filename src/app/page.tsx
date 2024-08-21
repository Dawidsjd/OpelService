"use client";

import React, { useEffect, useState } from 'react';
import Loading from './loading';
import Footer from './components/ui/Footer';
import Waitlist from './components/ui/Waitlist';
import HeaderSection from './components/HomePage/HeaderSection';
import AboutSection from './components/HomePage/AboutSection';
import CategorySection from './components/HomePage/CategorySection';
import ScrollAnimatedSection from './components/HomePage/ScrollAnimatedSection';
import TechnologiesSection from './components/HomePage/TechnologiesSection';

const HomePage: React.FC = () => {

  const words = ["Repair with Opel Service", "20+ support videos", "12+ categories", "20+ sections"];
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true); 

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

      {loading && <Loading />} 

      <HeaderSection words={words} handleScroll={handleScroll} />

      <AboutSection/>

      <CategorySection mounted={mounted} />

      <ScrollAnimatedSection/>
 
      <TechnologiesSection/>

      <Waitlist />

      <Footer />

    </>
  );
};

export default HomePage;
