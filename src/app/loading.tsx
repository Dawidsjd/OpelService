// src/components/loading.tsx
export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen">
        <span
          className="loading loading-bars loading-lg"
          style={{ transform: 'scale(2) '}} 
          
        ></span>
      </div>
    );
  }
 