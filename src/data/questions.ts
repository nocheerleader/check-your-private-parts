import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How often should you perform a testicular self-exam?",
    options: [
      { text: "Monthly - like clockwork", emoji: "📅", points: 3 },
      { text: "When I remember... so never", emoji: "🤷‍♂️", points: 1 },
      { text: "Wait, that's a thing?", emoji: "🤔", points: 0 }
    ],
    correctAnswer: 0,
    explanation: "Monthly self-exams are recommended, ideally on the same day each month to establish a routine."
  },
  {
    id: 2,
    question: "What's the best time to perform a self-exam?",
    options: [
      { text: "After a warm shower", emoji: "🚿", points: 3 },
      { text: "During my morning coffee", emoji: "☕", points: 1 },
      { text: "Is there a best time?", emoji: "🕐", points: 0 }
    ],
    correctAnswer: 0,
    explanation: "After a warm shower is ideal because the heat relaxes the scrotal skin, making examination easier."
  },
  {
    id: 3,
    question: "What are you looking for during an exam?",
    options: [
      { text: "Changes in size, lumps, or texture", emoji: "🔍", points: 3 },
      { text: "Honestly, no idea what's normal", emoji: "🤨", points: 1 },
      { text: "Just checking they're both there", emoji: "✌️", points: 0 }
    ],
    correctAnswer: 0,
    explanation: "Look for any lumps, changes in size, shape, or consistency, and any pain or discomfort."
  },
  {
    id: 4,
    question: "If you find something unusual, you should:",
    options: [
      { text: "See a doctor promptly", emoji: "👨‍⚕️", points: 3 },
      { text: "Wait a few weeks to see if it goes away", emoji: "⏰", points: 1 },
      { text: "Ignore it and hope for the best", emoji: "🙈", points: 0 }
    ],
    correctAnswer: 0,
    explanation: "Any unusual findings should be evaluated by a healthcare professional promptly. Early detection is key."
  },
  {
    id: 5,
    question: "Testicular cancer is most common in:",
    options: [
      { text: "Men aged 20-35", emoji: "👨", points: 3 },
      { text: "Men over 50", emoji: "👴", points: 1 },
      { text: "It affects all ages equally", emoji: "🌍", points: 1 }
    ],
    correctAnswer: 0,
    explanation: "Testicular cancer most commonly affects men between ages 20-35, making regular self-exams especially important for younger men."
  }
];

export const getResultsData = (score: number, totalQuestions: number) => {
  const percentage = (score / (totalQuestions * 3)) * 100;
  
  let level = '';
  let message = '';
  
  if (percentage >= 80) {
    level = 'Health Champion';
    message = 'Outstanding! 🏆 You have excellent knowledge about testicular health. Keep up the great self-care routine!';
  } else if (percentage >= 60) {
    level = 'Health Aware';
    message = 'Great job! 👍 You have good knowledge but there\'s always room to learn more about men\'s health.';
  } else if (percentage >= 40) {
    level = 'Getting Started';
    message = 'You\'re on the right track! 📚 Learning about self-care is the first step toward better health.';
  } else {
    level = 'Health Newbie';
    message = 'No worries! 🌱 Everyone starts somewhere. This quiz is a great first step in your health journey.';
  }
  
  return {
    score,
    percentage: Math.round(percentage),
    level,
    message,
    tips: [
      'Perform monthly self-exams after a warm shower',
      'Look for lumps, changes in size, or unusual texture',
      'See a doctor if you notice any changes',
      'Remember: most lumps are not cancerous',
      'Talk openly with friends about men\'s health'
    ]
  };
};