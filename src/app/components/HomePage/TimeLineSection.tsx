import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/TimeLine";
import { motion } from "framer-motion";

export function TimelineSection() {
  const data = [
    {
      title: "Repairs",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
        >
          <p className="text-neutral-400 text-xs md:text-sm font-normal mb-8">
          Developed and implemented a comprehensive repair management system, streamlining the workflow for diagnostics, parts ordering, and maintenance tracking.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/Repairs/Categories_1.png"
              alt="startup template"
              width={500}
              height={500}
              layout="responsive" // Zapewnia responsywność obrazu
              quality={100} // Ustawia najwyższą jakość obrazu
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 shadow-lg"
            />

            <Image
              src="/Repairs/Categories_2.png"
              alt="startup template"
              width={500}
              height={500}
              layout="responsive" // Zapewnia responsywność obrazu
              quality={100} // Ustawia najwyższą jakość obrazu
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 shadow-lg"
            />
            <Image
              src="/Repairs/Categories_3.png"
              alt="startup template"
              width={500}
              height={500}
              layout="responsive" // Zapewnia responsywność obrazu
              quality={100} // Ustawia najwyższą jakość obrazu
              className="rounded-lg shadow-lg object-contain h-20 md:h-44 lg:h-60"
            />
            <Image
              src="/Repairs/Categories_4.png"
              alt="startup template"
              width={500}
              height={500}
              layout="responsive" // Zapewnia responsywność obrazu
              quality={100} // Ustawia najwyższą jakość obrazu
              className="rounded-lg shadow-lg object-contain h-20 md:h-44 lg:h-60 "
            />
          </div>
        </motion.div>
      ),
    },
    {
      title: "Marketplace",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
        >
        <p className="text-neutral-400 text-xs md:text-sm font-normal mb-8">
  Explore our automotive marketplace for top-quality parts and accessories. Connect with trusted sellers and keep your vehicle in peak condition with ease.
</p>
<p className="text-neutral-400 text-xs md:text-sm font-normal mb-8">
  From essential components to stylish upgrades, find everything you need to enhance your ride and enjoy a smooth shopping experience tailored to car enthusiasts.
</p>


          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/Marketplace/Market_1.png"
              alt="marketplace example"
              width={500}
              height={500}
              layout="responsive" // Zapewnia responsywność obrazu
              quality={100} // Ustawia najwyższą jakość obrazu
              className="rounded-lg object-cover w-full shadow-xl"
            />
          </div>
        </motion.div>
      ),
    },
    
    {
      title: "Community",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
        >
          <p className="text-neutral-400 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          </motion.div>
      ),
    },
  ];
  return (
    <div id="timeline-section" className="w-full">
      <Timeline data={data} />
    </div>
  );
}
