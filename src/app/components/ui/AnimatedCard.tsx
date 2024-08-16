"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

// Props to accept category, icon, title video count, and index
interface AnimatedCardProps {
  category: string;
  categoryIcon: string;
  titleVideoCount: number;
  index?: number; // Dodanie index jako props
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ category, categoryIcon, titleVideoCount, index }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/opel/category/${category}`);
  };

  return (
    <motion.div
      onClick={handleCardClick}
      className="cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index ? index * 0.1 : 0 }}
    >
      <TiltCard
        category={category}
        categoryIcon={categoryIcon}
        titleVideoCount={titleVideoCount}
        index={index} // Przekazanie index do TiltCard
      />
    </motion.div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard: React.FC<AnimatedCardProps> = ({ category, categoryIcon, titleVideoCount }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-56 w-72 rounded-xl bg-gradient-to-br from-[#3a3f44] to-[#2a2f33] group"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-[#1d232a] bg-grid-white/[0.01] shadow-lg"
      >
        {/* Ikona kategorii */}
        <div className="flex justify-center items-center h-full">
          <img
            src={categoryIcon}
            alt={`${category} icon`}
            className="w-24 h-24 mb-4"
            style={{
              transform: "translateZ(50px)",
            }}
          />
        </div>

        {/* Nazwa kategorii */}
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-lg font-bold text-white"
        >
          {category}
        </p>

        {/* Liczba tytułów filmów jako wskaźnik */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">{titleVideoCount}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
