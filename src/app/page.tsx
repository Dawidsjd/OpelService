"use client";

import React, { Suspense, lazy, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

const Loading = lazy(() => import('./loading'));
const Footer = lazy(() => import('./components/ui/Footer'));
const Waitlist = lazy(() => import('./components/ui/Waitlist'));
const HeaderSection = lazy(() => import('./components/HomePage/HeaderSection'));
const AboutSection = lazy(() => import('./components/HomePage/AboutSection'));
const CategorySection = lazy(() => import('./components/HomePage/CategorySection'));
const ScrollAnimatedSection = lazy(() => import('./components/HomePage/ScrollAnimatedSection'));
const TechnologiesSection = lazy(() => import('./components/HomePage/TechnologiesSection'));

const HomePage: React.FC = () => {
  const words = ["Repair with Opel Service", "20+ support videos", "12+ categories", "20+ sections"];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = debounce(() => {
    const section = document.getElementById('about-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  }, 300);

  return (
    <Suspense fallback={<Loading />}>
      <HeaderSection words={words} handleScroll={handleScroll} />
      <AboutSection />
      <CategorySection mounted={mounted} />
      <ScrollAnimatedSection />
      <TechnologiesSection />
      <Waitlist />
      <Footer />
    </Suspense>
  );
};

export default HomePage;
