import React, { useState, useEffect } from 'react';
import { QuizResults } from '../types/quiz';
import { ShareModal } from './ShareModal';
import { ResourcesModal } from './ResourcesModal';

interface ResultsProps {
  results: QuizResults;
  onRetakeQuiz: () => void;
}

export const Results: React.FC<ResultsProps> = ({ results, onRetakeQuiz }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [visibleIcons, setVisibleIcons] = useState(0);

  const healthIcons = ['🍒', '⚕️', '✅', '👨', '🎯'];
  const iconCount = Math.ceil((results.percentage / 100) * 20);

  useEffect(() => {
    // Animate percentage
    const percentageTimer = setInterval(() => {
      setAnimatedPercentage(prev => {
        if (prev >= results.percentage) {
          clearInterval(percentageTimer);
          return results.percentage;
        }
        return prev + 2;
      });
    }, 50);

    // Animate icons
    const iconTimer = setInterval(() => {
      setVisibleIcons(prev => {
        if (prev >= iconCount) {
          clearInterval(iconTimer);
          return iconCount;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(percentageTimer);
      clearInterval(iconTimer);
    };
  }, [results.percentage, iconCount]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Health Awareness Meter */}
          <div className="mb-12">
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your Health Awareness Level
            </h2>
            
            <div className="relative w-48 h-48 mx-auto mb-8">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(animatedPercentage / 100) * 251.2} 251.2`}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4a90e2" />
                    <stop offset="100%" stopColor="#7ed321" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-800">
                  {animatedPercentage}%
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-purple-600 mb-2">
              {results.level}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {results.message}
            </p>
          </div>

          {/* Animated Health Icons */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">
              Health Awareness Points Earned
            </h4>
            <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
              {Array.from({ length: 20 }, (_, index) => (
                <span
                  key={index}
                  className={`text-2xl transition-all duration-300 ${
                    index < visibleIcons
                      ? 'opacity-100 scale-100 animate-bounce'
                      : 'opacity-20 scale-75'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {healthIcons[index % healthIcons.length]}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button
              onClick={onRetakeQuiz}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              🔄 Retake Quiz
            </button>
            <button
              onClick={() => setShowResourcesModal(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              📚 Get Resources
            </button>
            <button
              onClick={() => setShowShareModal(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              📢 Share Awareness
            </button>
          </div>
        </div>

        {/* Health Tips */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h4 className="text-2xl font-mono font-bold text-gray-800 mb-6 text-center">
            Key Health Tips to Remember
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {results.tips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <span className="text-green-500 text-xl flex-shrink-0 mt-1">✅</span>
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        results={results}
      />
      <ResourcesModal
        isOpen={showResourcesModal}
        onClose={() => setShowResourcesModal(false)}
      />
    </div>
  );
};