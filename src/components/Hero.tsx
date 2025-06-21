import React from 'react';
import { FloatingIcon } from './FloatingIcon';

interface HeroProps {
  onStartQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  const floatingIcons = [
    { emoji: '🍒', delay: 0, duration: 4, position: { x: 10, y: 20 } },
    { emoji: '👨', delay: 1, duration: 5, position: { x: 85, y: 15 } },
    { emoji: '🍆', delay: 2, duration: 4.5, position: { x: 15, y: 70 } },
    { emoji: '🥜', delay: 0.5, duration: 6, position: { x: 80, y: 75 } },
    { emoji: '⚕️', delay: 1.5, duration: 5.5, position: { x: 5, y: 45 } },
    { emoji: '⚕️', delay: 3, duration: 4, position: { x: 90, y: 50 } },
  ];

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <FloatingIcon
          key={index}
          emoji={icon.emoji}
          delay={icon.delay}
          duration={icon.duration}
          startPosition={icon.position}
        />
      ))}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-green-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-orange-400 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <h1 className="font-mono text-6xl md:text-8xl font-bold text-gray-800 mb-6 leading-tight">
          <span className="inline-block animate-pulse">CHECK</span>
          <br />
          <span className="inline-block text-blue-500 animate-bounce" style={{ animationDelay: '0.5s' }}>
            YOUR
          </span>
          <br />
          <span className="inline-block text-green-500 animate-pulse" style={{ animationDelay: '1s' }}>
            PRIVATE
          </span>
          <br />
          <span className="inline-block text-orange-500 animate-bounce" style={{ animationDelay: '1.5s' }}>
            PARTS
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 font-medium max-w-2xl mx-auto leading-relaxed">
          Take our interactive health awareness quiz to learn about testicular self-examination 
          and take charge of your health journey with confidence.
        </p>

        <button
          onClick={onStartQuiz}
          className="group bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
        >
          <span className="flex items-center justify-center gap-3">
            Start Health Check
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              ⚕️
            </span>
          </span>
        </button>

        <div className="mt-8 text-sm text-gray-500">
          <p>🔒 Private • 📚 Educational • ⚡ Takes 2 minutes</p>
        </div>
      </div>
    </div>
  );
};