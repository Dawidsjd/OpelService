"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";


interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#141a1e] font-sans"
      ref={containerRef}
    >
        <div className="min-h-screen relative bg-[#141a1e] bg-grid-white/[0.1]">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-[#141a1e] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#14181f)]"></div>
     
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
        >
        <h2 className="text-lg md:text-4xl mb-4 max-w-4xl font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 drop-shadow-lg pb-1">
        About Opel Service
        </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
        <p className="text-gray-300 dark:text-gray-400 text-sm md:text-base max-w">
        At Opel Service, we pride ourselves on providing top-notch repair services with over 20+ support videos, 12+ categories, and 20+ sections dedicated to helping you maintain and repair your Opel vehicle. Our dedicated team ensures you get the best advice, tools, and services needed to keep your car in perfect condition.

Whether you are looking for professional repair services or need detailed guides on how to do it yourself, Opel Service is your go-to platform. Join our community of satisfied customers today!
        </p>
        </motion.div>
      </div>

       <div ref={ref} className="relative max-w-7xl mx-auto pb-20 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#141a1e] dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gray-400 dark:bg-gray-500 border border-gray-300 dark:border-gray-700 p-2" />
              </div>
              <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
        >
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 drop-shadow-lg pb-2">
                {item.title}
              </h3>
              </motion.div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-300 dark:text-gray-200">
                {item.title}
              </h3>
              <div className="text-gray-200 dark:text-gray-300">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full -z-50"
          />
        </div>
      </div>
    </div>
    </div>
  );
};
