import React, { Suspense } from 'react';

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
  { icon: IconBrandNextjs as React.ComponentType<any>, name: 'Next.js' },
  { icon: IconBrandTailwind as React.ComponentType<any>, name: 'Tailwind CSS' },
  { icon: IconBrandFramer as React.ComponentType<any>, name: 'Framer Motion' },
  { icon: IconBrandTypescript as React.ComponentType<any>, name: 'TypeScript' },
  { icon: IconIcons as React.ComponentType<any>, name: 'Tabler Icons' },
  { icon: IconBrandVercel as React.ComponentType<any>, name: 'Vercel' },
  { icon: IconBrandFirebase as React.ComponentType<any>, name: 'Firebase' },
  { icon: IconBrandReact as React.ComponentType<any>, name: 'React' },
  { icon: IconBrandBing as React.ComponentType<any>, name: 'Bing AI' },
  { icon: IconBrandGoogle as React.ComponentType<any>, name: 'Contentful API' },
  { icon: IconKey as React.ComponentType<any>, name: 'NextAuth.js' },
];

const TechnologiesSection: React.FC = () => {
  return (
    <div id="technologies-section" className="w-full bg-[#1d232a] text-white py-16">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 w-full">Użyte Technologie</h2>

        <Suspense fallback={<div>Loading...</div>}>
          {technologies.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="bg-[#26313c] p-6 rounded-lg shadow-md hover:bg-[#2e3a47] transition w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33%-1.5rem)] lg:w-[calc(25%-1rem)] flex flex-col items-center"
            >
              <Icon className="text-white mb-4" size={48} />
              <h3 className="text-xl font-semibold">{name}</h3>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default TechnologiesSection;
