import React from 'react';

interface FloatingIconProps {
  emoji: string;
  delay: number;
  duration: number;
  startPosition: { x: number; y: number };
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({ 
  emoji, 
  delay, 
  duration, 
  startPosition 
}) => {
  return (
    <div
      className="absolute text-4xl pointer-events-none select-none opacity-60"
      style={{
        left: `${startPosition.x}%`,
        top: `${startPosition.y}%`,
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {emoji}
    </div>
  );
};