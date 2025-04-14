'use client';

import { useEffect, useState } from 'react';

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export default function GradientBackground({ children }: GradientBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
      setIsMoving(true);
      
      // Reset the moving state after mouse stops
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden bg-white"
      style={{
        background: `
          radial-gradient(circle 800px at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(34, 211, 238, 0.15) 0%,
            rgba(34, 211, 238, 0.05) 40%,
            rgba(34, 211, 238, 0) 70%),
          radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(168, 85, 247, ${isMoving ? 0.12 : 0.08}) 0%,
            rgba(168, 85, 247, 0.04) 40%,
            rgba(168, 85, 247, 0) 60%),
          radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(236, 72, 153, ${isMoving ? 0.15 : 0.1}) 0%,
            rgba(236, 72, 153, 0.05) 30%,
            rgba(236, 72, 153, 0) 50%),
          linear-gradient(180deg, 
            rgba(59, 130, 246, 0.05) 0%,
            rgba(59, 130, 246, 0.02) 100%),
          white
        `,
        transition: isMoving ? 'none' : 'background 0.3s ease-out'
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(99, 102, 241, ${isMoving ? 0.15 : 0.1}) 0%,
            rgba(99, 102, 241, 0) 100%)`,
          transition: isMoving ? 'none' : 'background 0.2s ease-out'
        }}
      />
      {children}
    </div>
  );
} 