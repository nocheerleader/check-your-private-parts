export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizOption {
  text: string;
  emoji: string;
  points: number;
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  showResults: boolean;
  score: number;
}

export interface QuizResults {
  score: number;
  percentage: number;
  level: string;
  message: string;
  tips: string[];
}