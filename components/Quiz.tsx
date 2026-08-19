"use client";

import { useState, useCallback } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy, Brain, Sparkles } from "lucide-react";
import type { QuizQuestion } from "@/data/scenarios";

interface QuizProps {
  questions: QuizQuestion[];
  questionsA2?: QuizQuestion[];
  questionsB1?: QuizQuestion[];
}

export default function Quiz({ questions, questionsA2, questionsB1 }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [level, setLevel] = useState<'A1' | 'A2' | 'B1'>('A1');

  const activeQuestions = level === 'A1' ? questions : level === 'A2' && questionsA2 && questionsA2.length > 0 ? questionsA2 : level === 'B1' && questionsB1 && questionsB1.length > 0 ? questionsB1 : questions;
  const current = activeQuestions[currentQuestion];
  const isCorrect = selectedAnswer === current.correctIndex;

  const handleSelect = useCallback(
    (index: number) => {
      if (showResult) return;
      setSelectedAnswer(index);
      setShowResult(true);

      if (index === current.correctIndex) {
        setScore((prev) => prev + 1);
      }
    },
    [showResult, current.correctIndex]
  );

  function handleNext() {
    if (currentQuestion < activeQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  }

  function handleRestart() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  }

  if (isFinished) {
    const percentage = Math.round((score / activeQuestions.length) * 100);
    const isGreat = percentage >= 70;

    return (
      <div className="quiz-section">
        <h2 className="section-title">
          <span className="section-title-icon"><Brain size={22} /></span>
          Quiz
          <span className="section-subtitle">Results</span>
        </h2>
        <div className={`quiz-results ${isGreat ? "quiz-results-great" : "quiz-results-ok"}`}>
          <div className="quiz-results-icon">
            {isGreat ? <Trophy size={48} /> : <Sparkles size={48} />}
          </div>
          <h3 className="quiz-results-title">
            {isGreat ? "Parabéns!" : "Continue Praticando!"}
          </h3>
          <p className="quiz-results-score">
            Você acertou <strong>{score}</strong> de <strong>{activeQuestions.length}</strong> perguntas
          </p>
          <div className="quiz-results-bar-track">
            <div
              className="quiz-results-bar-fill"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="quiz-results-percentage">{percentage}%</p>
          <button className="quiz-restart-btn" onClick={handleRestart}>
            <RotateCcw size={18} />
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="section-title !mb-0">
          <span className="section-title-icon"><Brain size={22} /></span>
          Quiz
          <span className="section-subtitle">Test your knowledge</span>
        </h2>
        {(questionsA2 || questionsB1) && (
          <div className="flex bg-gray-100 p-1 rounded-lg mt-4 sm:mt-0 overflow-x-auto">
            <button 
              onClick={() => { setLevel('A1'); handleRestart(); }}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 'A1' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Nível A1
            </button>
            {questionsA2 && questionsA2.length > 0 && (
              <button 
                onClick={() => { setLevel('A2'); handleRestart(); }}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 'A2' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Nível A2
              </button>
            )}
            {questionsB1 && questionsB1.length > 0 && (
              <button 
                onClick={() => { setLevel('B1'); handleRestart(); }}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 'B1' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Nível B1
              </button>
            )}
          </div>
        )}
      </div>

      <div className="quiz-progress-dots">
        {activeQuestions.map((_, i) => (
          <div
            key={i}
            className={`quiz-dot ${
              i === currentQuestion
                ? "quiz-dot-current"
                : i < currentQuestion
                ? "quiz-dot-done"
                : "quiz-dot-pending"
            }`}
          />
        ))}
      </div>

      <div className="quiz-card">
        <p className="quiz-question-number">
          Pergunta {currentQuestion + 1} de {activeQuestions.length}
        </p>
        <h3 className="quiz-question">{current.question}</h3>

        <div className="quiz-options">
          {current.options.map((option, index) => {
            let optionClass = "quiz-option";
            if (showResult) {
              if (index === current.correctIndex) {
                optionClass += " quiz-option-correct";
              } else if (index === selectedAnswer) {
                optionClass += " quiz-option-wrong";
              } else {
                optionClass += " quiz-option-disabled";
              }
            }

            return (
              <button
                key={index}
                className={optionClass}
                onClick={() => handleSelect(index)}
                disabled={showResult}
              >
                <span className="quiz-option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="quiz-option-text">{option}</span>
                {showResult && index === current.correctIndex && (
                  <CheckCircle2 size={20} className="quiz-option-icon-correct" />
                )}
                {showResult &&
                  index === selectedAnswer &&
                  index !== current.correctIndex && (
                    <XCircle size={20} className="quiz-option-icon-wrong" />
                  )}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div
            className={`quiz-explanation ${
              isCorrect ? "quiz-explanation-correct" : "quiz-explanation-wrong"
            }`}
          >
            <p className="quiz-explanation-label">
              {isCorrect ? (
                <><CheckCircle2 size={16} className="quiz-inline-icon-correct" /> Correto!</>
              ) : (
                <><XCircle size={16} className="quiz-inline-icon-wrong" /> Incorreto!</>
              )}
            </p>
            <p className="quiz-explanation-text">{current.explanation}</p>
          </div>
        )}

        {showResult && (
          <button className="quiz-next-btn" onClick={handleNext}>
            {currentQuestion < questions.length - 1 ? (
              <>Próxima Pergunta</>
            ) : (
              <>Ver Resultado <Trophy size={18} /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
