import React from 'react';
import { QuizQuestion } from '../types/quiz';
import { ProgressBar } from './ProgressBar';

interface QuizProps {
  question: QuizQuestion;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (answerIndex: number) => void;
  selectedAnswer: number | null;
}

export const Quiz: React.FC<QuizProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer,
  selectedAnswer
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <ProgressBar current={currentQuestion + 1} total={totalQuestions} />
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform animate-slide-in">
          <div className="text-center mb-8">
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              {question.question}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswer(index)}
                className={`w-full p-6 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] active:scale-95 ${
                  selectedAnswer === index
                    ? 'bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-800 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{option.emoji}</span>
                  <span className="text-lg font-medium flex-1">
                    {option.text}
                  </span>
                  {selectedAnswer === index && (
                    <span className="text-2xl animate-bounce">✨</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {selectedAnswer !== null && (
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500 animate-fade-in">
              <p className="text-gray-700 leading-relaxed">
                <strong>Good to know:</strong> {question.explanation}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};