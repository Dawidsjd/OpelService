import React from 'react';

interface BackgroundVideoProps {
  src: string;
  className?: string;
  blurAmount?: number; // Dodajemy możliwość ustawienia ilości rozmycia
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, className = '', blurAmount = 10 }) => {
  return (
    <video
      className={`absolute inset-0 w-full h-full object-cover z-10 ${className}`}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      style={{
        filter: `blur(${blurAmount}px)`, // Dodajemy efekt rozmycia
      }}
    />
  );
};

export default BackgroundVideo;
