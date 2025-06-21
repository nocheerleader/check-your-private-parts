import React from 'react';
import { Modal } from './Modal';
import { QuizResults } from '../types/quiz';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  results: QuizResults;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, results }) => {
  const shareMessage = `I just completed a men's health awareness quiz and scored ${results.percentage}%! 💪 Knowledge is power when it comes to health. Take the quiz and join the conversation about men's health awareness! #MensHealth #HealthAwareness`;

  const handleTwitterShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(shareMessage);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    const summary = encodeURIComponent(shareMessage);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${summary}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share Health Awareness">
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Help spread awareness about men's health by sharing your quiz results!
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm italic text-gray-700">"{shareMessage}"</p>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleTwitterShare}
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <span className="text-xl">🐦</span>
            Share on Twitter
          </button>

          <button
            onClick={handleLinkedInShare}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <span className="text-xl">💼</span>
            Share on LinkedIn
          </button>

          <button
            onClick={handleCopyLink}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <span className="text-xl">🔗</span>
            Copy Link
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Starting conversations about men's health saves lives. Thank you for helping spread awareness! 💙
          </p>
        </div>
      </div>
    </Modal>
  );
};