// components/ui/LoadingSpinner.tsx
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#1d232a] z-[1000]">
  <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
</div>

  );
};

export default Loading;
