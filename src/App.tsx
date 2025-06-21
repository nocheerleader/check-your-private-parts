import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { quizQuestions, getResultsData } from './data/questions';
import { QuizState } from './types/quiz';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    showResults: false,
    score: 0
  });
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    // Auto-advance after a short delay
    setTimeout(() => {
      const currentQuestion = quizQuestions[quizState.currentQuestion];
      const points = currentQuestion.options[answerIndex].points;
      const newAnswers = [...quizState.answers, answerIndex];
      const newScore = quizState.score + points;

      if (quizState.currentQuestion === quizQuestions.length - 1) {
        // Quiz completed
        setQuizState({
          ...quizState,
          answers: newAnswers,
          score: newScore,
          showResults: true
        });
      } else {
        // Next question
        setQuizState({
          ...quizState,
          currentQuestion: quizState.currentQuestion + 1,
          answers: newAnswers,
          score: newScore
        });
      }
      setSelectedAnswer(null);
    }, 2000);
  };

  const handleRetakeQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      answers: [],
      showResults: false,
      score: 0
    });
    setShowQuiz(false);
    setSelectedAnswer(null);
  };

  if (quizState.showResults) {
    const results = getResultsData(quizState.score, quizQuestions.length);
    return <Results results={results} onRetakeQuiz={handleRetakeQuiz} />;
  }

  if (showQuiz) {
    return (
      <Quiz
        question={quizQuestions[quizState.currentQuestion]}
        currentQuestion={quizState.currentQuestion}
        totalQuestions={quizQuestions.length}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />
    );
  }

  return <Hero onStartQuiz={handleStartQuiz} />;
}

export default App;