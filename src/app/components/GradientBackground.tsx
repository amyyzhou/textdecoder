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
            rgba(252, 231, 243, 0.7) 0%,
            rgba(252, 231, 243, 0.3) 40%,
            rgba(252, 231, 243, 0) 70%),
          radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(249, 168, 212, ${isMoving ? 0.15 : 0.1}) 0%,
            rgba(249, 168, 212, 0.05) 40%,
            rgba(249, 168, 212, 0) 60%),
          radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(244, 114, 182, ${isMoving ? 0.12 : 0.08}) 0%,
            rgba(244, 114, 182, 0.04) 30%,
            rgba(244, 114, 182, 0) 50%),
          linear-gradient(180deg, 
            rgba(251, 207, 232, 0.1) 0%,
            rgba(251, 207, 232, 0.05) 100%),
          white
        `,
        transition: isMoving ? 'none' : 'background 0.3s ease-out'
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(236, 72, 153, ${isMoving ? 0.1 : 0.07}) 0%,
            rgba(236, 72, 153, 0) 100%)`,
          transition: isMoving ? 'none' : 'background 0.2s ease-out'
        }}
      />
      {children}
    </div>
  );
} 