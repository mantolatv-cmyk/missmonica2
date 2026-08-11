"use client";

import { useState, useCallback } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy, Sparkles, CheckSquare, ListChecks, ArrowLeft } from "lucide-react";
import type { TrueOrFalsePractice, TrueOrFalseItem } from "@/data/types";

interface TrueOrFalseProps {
  items: TrueOrFalsePractice;
}

export default function TrueOrFalse({ items }: TrueOrFalseProps) {
  const [activePart, setActivePart] = useState<"part1" | "part2" | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestions = activePart === "part1" ? items.part1 : activePart === "part2" ? items.part2 : [];
  const current = currentQuestions[currentIndex];
  const isCorrect = selectedAnswer === current?.isTrue;

  const handleSelect = useCallback(
    (answer: boolean) => {
      if (showResult) return;
      setSelectedAnswer(answer);
      setShowResult(true);

      if (answer === current.isTrue) {
        setScore((prev) => prev + 1);
      }
    },
    [showResult, current?.isTrue]
  );

  function handleNext() {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowTranslation(false);
    } else {
      setIsFinished(true);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowTranslation(false);
    setScore(0);
    setIsFinished(false);
    setActivePart(null);
  }

  if (!activePart) {
    return (
      <div className="quiz-section">
        <h2 className="section-title">
          <span className="section-title-icon"><CheckSquare size={22} /></span>
          True or False
          <span className="section-subtitle">Choose a part</span>
        </h2>
        <div className="quiz-card" style={{ textAlign: "center" }}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Pratique a sua compreensão! Escolha a parte que deseja praticar.
            A <strong>Parte 1</strong> usa os primeiros vocabulários e a <strong>Parte 2</strong> usa o restante.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <button
              className="quiz-option"
              onClick={() => setActivePart("part1")}
              style={{ justifyContent: 'center', padding: '2rem 1rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <ListChecks size={32} style={{ color: "var(--accent-color)" }} />
                <span className="quiz-option-text" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Part 1</span>
                <span style={{ fontSize: '0.9rem', color: "var(--text-secondary)" }}>Vocabulário 1-10</span>
              </div>
            </button>

            <button
              className="quiz-option"
              onClick={() => setActivePart("part2")}
              style={{ justifyContent: 'center', padding: '2rem 1rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <ListChecks size={32} style={{ color: "var(--accent-color)" }} />
                <span className="quiz-option-text" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Part 2</span>
                <span style={{ fontSize: '0.9rem', color: "var(--text-secondary)" }}>Vocabulário 11-20</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isFinished) {
    const percentage = Math.round((score / currentQuestions.length) * 100);
    const isGreat = percentage >= 70;

    return (
      <div className="quiz-section">
        <h2 className="section-title">
          <span className="section-title-icon"><CheckSquare size={22} /></span>
          True or False
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
            Você acertou <strong>{score}</strong> de <strong>{currentQuestions.length}</strong> perguntas
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
            Voltar ao Menu
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
      <h2 className="section-title">
        <span className="section-title-icon"><CheckSquare size={22} /></span>
        Verdadeiro ou Falso
        <span className="section-subtitle">{activePart === "part1" ? "Part 1" : "Part 2"}</span>
      </h2>

      <div className="quiz-progress-dots">
        {currentQuestions.map((_, i) => (
          <div
            key={i}
            className={`quiz-dot ${
              i === currentIndex
                ? "quiz-dot-current"
                : i < currentIndex
                ? "quiz-dot-done"
                : "quiz-dot-pending"
            }`}
          />
        ))}
      </div>

      <div className="quiz-card">
        <button 
          onClick={handleRestart}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "none",
            border: "none",
            color: "var(--text-secondary)",
            cursor: "pointer",
            fontSize: "0.9rem",
            marginBottom: "1rem"
          }}
        >
          <ArrowLeft size={16} /> Voltar
        </button>

        <p className="quiz-question-number">
          Pergunta {currentIndex + 1} de {currentQuestions.length}
        </p>
        <h3 className="quiz-question" style={{ marginBottom: "1.5rem", textAlign: "center", fontSize: "1.4rem" }}>
          {current.statement}
        </h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: "1.5rem", minHeight: "1.5rem" }}>
          {!showTranslation ? (
            <button 
              onClick={() => setShowTranslation(true)}
              style={{
                background: "none",
                border: "none",
                color: "var(--accent-color)",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "0.95rem"
              }}
            >
              Tradução
            </button>
          ) : (
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", textAlign: "center", margin: 0 }}>
              {current.statementPt}
            </p>
          )}
        </div>

        <div className="quiz-options" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {/* TRUE BUTTON */}
          <button
            className={`quiz-option ${
              showResult
                ? current.isTrue
                  ? "quiz-option-correct"
                  : selectedAnswer === true
                  ? "quiz-option-wrong"
                  : "quiz-option-disabled"
                : ""
            }`}
            onClick={() => handleSelect(true)}
            disabled={showResult}
            style={{ justifyContent: 'center', textAlign: 'center' }}
          >
            <span className="quiz-option-text" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>True</span>
            {showResult && current.isTrue && (
              <CheckCircle2 size={20} className="quiz-option-icon-correct" />
            )}
            {showResult && selectedAnswer === true && !current.isTrue && (
              <XCircle size={20} className="quiz-option-icon-wrong" />
            )}
          </button>

          {/* FALSE BUTTON */}
          <button
            className={`quiz-option ${
              showResult
                ? !current.isTrue
                  ? "quiz-option-correct"
                  : selectedAnswer === false
                  ? "quiz-option-wrong"
                  : "quiz-option-disabled"
                : ""
            }`}
            onClick={() => handleSelect(false)}
            disabled={showResult}
            style={{ justifyContent: 'center', textAlign: 'center' }}
          >
            <span className="quiz-option-text" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>False</span>
            {showResult && !current.isTrue && (
              <CheckCircle2 size={20} className="quiz-option-icon-correct" />
            )}
            {showResult && selectedAnswer === false && current.isTrue && (
              <XCircle size={20} className="quiz-option-icon-wrong" />
            )}
          </button>
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
            {currentIndex < currentQuestions.length - 1 ? (
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
