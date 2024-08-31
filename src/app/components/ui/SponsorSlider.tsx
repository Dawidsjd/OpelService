import React, { useEffect, useRef } from 'react';
import {
  IconBrandFacebook,
  IconBrandDisney,
  IconBrandAirbnb,
  IconBrandApple,
  IconSparkles,
  IconBrandSamsungpass,
  IconBrandSass,
  IconBrandGoogle,
} from '@tabler/icons-react';

const SponsorSlider: React.FC = () => {
  const sliderRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ulElement = sliderRef.current;
    if (ulElement) {
      // Clone the list element to create an infinite scroll effect
      const clone = ulElement.cloneNode(true) as HTMLUListElement;
      clone.setAttribute('aria-hidden', 'true');
      ulElement.parentNode?.appendChild(clone);
    }
  }, []);

  return (
    <div className='bg-[#141a1e]'>
      <div className="relative w-4/5 mx-auto py-8 flex justify-center overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          ref={sliderRef}
          className="flex items-center [&_li]:mx-8 [&_svg]:w-12 [&_svg]:h-12 [&_svg]:text-gray-600 animate-infinite-scroll"
        >
          <li>
            <IconBrandFacebook title="Facebook" />
          </li>
          <li>
            <IconBrandDisney title="Disney" />
          </li>
          <li>
            <IconBrandAirbnb title="Airbnb" />
          </li>
          <li>
            <IconBrandApple title="Apple" />
          </li>
          <li>
            <IconBrandGoogle title="Google" />
          </li>
          <li>
            <IconBrandSamsungpass title="Samsung" />
          </li>
          <li>
            <IconBrandSass title="Sass" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SponsorSlider;
