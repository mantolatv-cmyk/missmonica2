"use client";

import { useState, useCallback } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy, FileText, Sparkles, ArrowLeft, Languages } from "lucide-react";
import type { ReadingPractice, ReadingLevel } from "@/data/types";

interface ReadingProps {
  readingData: ReadingPractice;
}

export default function Reading({ readingData }: ReadingProps) {
  const [level, setLevel] = useState<1 | 2>(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const activeLevelData: ReadingLevel = level === 1 ? readingData.level1 : readingData.level2;
  const questions = activeLevelData.questions;
  const current = questions[currentQuestion];
  const isCorrect = selectedAnswer === current?.correctIndex;

  const handleSelect = useCallback(
    (index: number) => {
      if (showResult) return;
      setSelectedAnswer(index);
      setShowResult(true);

      if (index === current.correctIndex) {
        setScore((prev) => prev + 1);
      }
    },
    [showResult, current?.correctIndex]
  );

  function handleNext() {
    if (currentQuestion < questions.length - 1) {
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
    setShowTranslation(false);
    setScore(0);
    setIsFinished(false);
  }

  function handleLevelChange(newLevel: 1 | 2) {
    setLevel(newLevel);
    handleRestart();
  }

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    const isGreat = percentage >= 70;

    return (
      <div className="quiz-section">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="section-title !mb-0">
            <span className="section-title-icon"><FileText size={22} /></span>
            Reading Comprehension
            <span className="section-subtitle">Results</span>
          </h2>
          <div className="flex bg-gray-100 p-1 rounded-lg mt-4 sm:mt-0 overflow-x-auto">
            <button 
              onClick={() => handleLevelChange(1)}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 1 ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Nível 1
            </button>
            <button 
              onClick={() => handleLevelChange(2)}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 2 ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Nível 2
            </button>
          </div>
        </div>
        
        <div className={`quiz-results ${isGreat ? "quiz-results-great" : "quiz-results-ok"}`}>
          <div className="quiz-results-icon">
            {isGreat ? <Trophy size={48} /> : <Sparkles size={48} />}
          </div>
          <h3 className="quiz-results-title">
            {isGreat ? "Parabéns!" : "Continue Praticando!"}
          </h3>
          <p className="quiz-results-score">
            Você acertou <strong>{score}</strong> de <strong>{questions.length}</strong> perguntas
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

  if (!current) {
    return null;
  }

  return (
    <div className="quiz-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="section-title !mb-0">
          <span className="section-title-icon"><FileText size={22} /></span>
          Reading Comprehension
          <span className="section-subtitle">Read and Answer</span>
        </h2>
        <div className="flex bg-gray-100 p-1 rounded-lg mt-4 sm:mt-0 overflow-x-auto">
          <button 
            onClick={() => handleLevelChange(1)}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 1 ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Nível 1
          </button>
          <button 
            onClick={() => handleLevelChange(2)}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 2 ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Nível 2
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-2xl"></div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-700 text-lg flex items-center gap-2">
            <FileText size={18} className="text-blue-500" />
            Text
          </h3>
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="text-sm flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors font-medium bg-blue-50 px-3 py-1.5 rounded-full"
          >
            <Languages size={14} />
            {showTranslation ? "Esconder Tradução" : "Ver Tradução"}
          </button>
        </div>
        
        <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-4">
          {activeLevelData.textEn.split('\n').map((paragraph, idx) => (
            <p key={`en-${idx}`} className="text-[1.05rem]">{paragraph}</p>
          ))}
          
          {showTranslation && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Tradução</h4>
              {activeLevelData.textPt.split('\n').map((paragraph, idx) => (
                <p key={`pt-${idx}`} className="text-gray-500">{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="quiz-progress-dots">
        {questions.map((_, i) => (
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
          Pergunta {currentQuestion + 1} de {questions.length}
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
