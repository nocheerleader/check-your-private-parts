import React from 'react';
import { Modal } from './Modal';

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResourcesModal: React.FC<ResourcesModalProps> = ({ isOpen, onClose }) => {
  const resources = [
    {
      title: "Monthly Self-Exam Routine",
      description: "Perform after a warm shower when scrotal skin is relaxed. Set a monthly reminder.",
      icon: "📅"
    },
    {
      title: "Know What's Normal",
      description: "Familiarize yourself with normal size, weight, and texture for early detection of changes.",
      icon: "🔍"
    },
    {
      title: "When to See a Doctor",
      description: "Any lumps, swelling, pain, or changes warrant immediate medical attention.",
      icon: "👨‍⚕️"
    },
    {
      title: "Age Awareness",
      description: "Testicular cancer peaks in ages 20-35. Young men should be especially vigilant.",
      icon: "📊"
    },
    {
      title: "Open Communication",
      description: "Talk with partners, friends, and family about men's health. Normalize the conversation.",
      icon: "💬"
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Health Resources & Tips">
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Here are essential tips for maintaining testicular health and when to seek medical care:
          </p>
        </div>

        <div className="space-y-4">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <span className="text-2xl flex-shrink-0">{resource.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">{resource.title}</h4>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-500 text-xl">⚠️</span>
            <h4 className="font-semibold text-red-800">When to Seek Immediate Care</h4>
          </div>
          <ul className="text-sm text-red-700 space-y-1 ml-6">
            <li>• Any new lumps or masses</li>
            <li>• Sudden severe pain</li>
            <li>• Significant size changes</li>
            <li>• Persistent discomfort</li>
            <li>• Any concerning symptoms</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Remember: Early detection saves lives. When in doubt, consult a healthcare professional. 🏥
          </p>
        </div>
      </div>
    </Modal>
  );
};