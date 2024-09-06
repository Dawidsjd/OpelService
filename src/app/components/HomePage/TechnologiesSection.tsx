import React, { Suspense } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from '../ui/CanvasRevealEffect';

// Lazy load icons
const IconBrandNextjs = React.lazy(() => import('@tabler/icons-react').then(module => ({ default: module.IconBrandNextjs })));
const IconBrandTailwind = React.lazy(() => import('@tabler/icons-react').then(module => ({ default: module.IconBrandTailwind })));
const IconBrandFramer = React.lazy(() => import('@tabler/icons-react').then(module => ({ default: module.IconBrandFramer })));
const IconBrandTypescript = React.lazy(() => import('@tabler/icons-react').then(module => ({ default: module.IconBrandTypescript })));
const IconIcons = React.lazy(() => import('@tabler/icons-react').then(module => ({ default: module.IconIcons })));
const IconBrandVercel = React.lazy(() => import('@tabler/icons-react').then(module => ({ default: module.IconBrandVercel })));
const IconBrandFirebase = React.lazy(() => import('@tabler/icons-react').then(module => ({ default: module.IconBrandFirebase })));
const IconBrandReact = React.lazy(() => import('@tabler/icons-react').then(module => ({ default: module.IconBrandReact })));
const IconBrandBing = React.lazy(() => import('@tabler/icons-react').then(module => ({ default: module.IconBrandBing })));
const IconBrandGoogle = React.lazy(() => import('@tabler/icons-react').then(module => ({ default: module.IconBrandGoogle })));
const IconKey = React.lazy(() => import('@tabler/icons-react').then(module => ({ default: module.IconKey })));

interface Technology {
  icon: React.ComponentType<{ size?: number; className?: string }> | React.ComponentType<any>;
  name: string;
}

const technologies: Technology[] = [
  { icon: IconBrandNextjs, name: 'Next.js' },
  { icon: IconBrandTailwind, name: 'Tailwind CSS' },
  { icon: IconBrandFramer, name: 'Framer Motion' },
  { icon: IconBrandTypescript, name: 'TypeScript' },
  { icon: IconIcons, name: 'Tabler Icons' },
  { icon: IconBrandVercel, name: 'Vercel' },
  { icon: IconBrandFirebase, name: 'Firebase' },
  { icon: IconBrandReact, name: 'React' },
  { icon: IconBrandBing, name: 'Bing AI' },
  { icon: IconBrandGoogle, name: 'Contentful API' },
  { icon: IconKey, name: 'NextAuth.js' },
];

// Component for individual cards with hover effects
const Card: React.FC<{ title: string; icon: React.ReactNode; children?: React.ReactNode }> = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-[#0e1214] shadow-xl border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[15rem] relative"
    >

      <IconCross className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <IconCross className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <IconCross className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <IconCross className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
      <div className="flex items-center justify-center group-hover/canvas-card:-translate-y-0 group-hover/canvas-card:opacity-0 transition duration-200 h-full translate-y-7">
  {icon}
</div>

        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const IconCross = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const TechnologiesSection: React.FC = () => {
  return (
    <div id="technologies-section" className="w-full bg-[#141a1e] text-white py-16 min-h-screen relative bg-grid-white/[0.1]">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-[#141a1e] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#14181f)]"></div>
     
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 w-full">Użyte Technologie</h2>

        <Suspense fallback={<div>Loading...</div>}>
          {technologies.map(({ icon: Icon, name }) => (
            <Card key={name} title={name} icon={<Icon className="text-white mb-4" size={48} />}>
              <CanvasRevealEffect animationSpeed={3} containerClassName="bg-black"  />
            </Card>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default TechnologiesSection;
