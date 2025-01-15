import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Question = {
  id: string;
  question: string;
  type: 'text' | 'textarea' | 'email' | 'number';
  placeholder: string;
};

const questions: Question[] = [
  {
    id: 'company',
    question: "What's your company name?",
    type: 'text',
    placeholder: 'e.g., Acme Inc.'
  },
  {
    id: 'description',
    question: 'Describe your startup in a few sentences',
    type: 'textarea',
    placeholder: 'Tell us what you\'re building...'
  },
  {
    id: 'email',
    question: 'What\'s your business email?',
    type: 'email',
    placeholder: 'name@company.com'
  },
  {
    id: 'funding',
    question: 'How much funding are you looking to raise?',
    type: 'number',
    placeholder: 'Enter amount in USD'
  }
];

export default function StartupApplication() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && questions[currentQuestion].type !== 'textarea') {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(curr => curr + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(curr => curr + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(curr => curr - 1);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                {questions[currentQuestion].question}
              </h2>
              {questions[currentQuestion].type === 'textarea' ? (
                <textarea
                  className="w-full p-4 text-xl bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 transition-colors"
                  rows={4}
                  placeholder={questions[currentQuestion].placeholder}
                  value={answers[questions[currentQuestion].id] || ''}
                  onChange={(e) => setAnswers(prev => ({
                    ...prev,
                    [questions[currentQuestion].id]: e.target.value
                  }))}
                />
              ) : (
                <input
                  type={questions[currentQuestion].type}
                  className="w-full p-4 text-xl bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-purple-500 transition-colors"
                  placeholder={questions[currentQuestion].placeholder}
                  value={answers[questions[currentQuestion].id] || ''}
                  onChange={(e) => setAnswers(prev => ({
                    ...prev,
                    [questions[currentQuestion].id]: e.target.value
                  }))}
                  onKeyDown={handleKeyDown}
                />
              )}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                className={`px-6 py-3 rounded-lg text-gray-600 hover:bg-white/50 transition-colors ${
                  currentQuestion === 0 ? 'invisible' : ''
                }`}
              >
                Previous
              </button>
              <div className="text-sm text-gray-500">
                {currentQuestion + 1} of {questions.length}
              </div>
              <button
                onClick={handleNext}
                className={`px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors ${
                  currentQuestion === questions.length - 1 ? 'invisible' : ''
                }`}
              >
                Next
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
