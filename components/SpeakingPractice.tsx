"use client";

import { useState } from "react";
import { Mic, ArrowRight, RotateCcw, ListChecks, ArrowLeft } from "lucide-react";
import type { SpeakingPractice as SpeakingPracticeType, SpeakingQuestion } from "@/data/types";

interface SpeakingPracticeProps {
  data: SpeakingPracticeType;
}

export default function SpeakingPractice({ data }: SpeakingPracticeProps) {
  const [activePart, setActivePart] = useState<"part1" | "part2" | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestions = activePart === "part1" ? data.part1 : activePart === "part2" ? data.part2 : [];
  const current = currentQuestions[currentIndex];

  function handleNext() {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowTranslation(false);
    } else {
      setIsFinished(true);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setShowTranslation(false);
    setIsFinished(false);
    setActivePart(null);
  }

  if (!activePart) {
    return (
      <div className="quiz-section">
        <h2 className="section-title">
          <span className="section-title-icon"><Mic size={22} /></span>
          Speaking Practice
          <span className="section-subtitle">Choose a part</span>
        </h2>
        <div className="quiz-card" style={{ textAlign: "center" }}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            Pratique a sua fala! Escolha a parte que deseja praticar.
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
    return (
      <div className="quiz-section">
        <h2 className="section-title">
          <span className="section-title-icon"><Mic size={22} /></span>
          Speaking Practice
          <span className="section-subtitle">Results</span>
        </h2>
        <div className="quiz-results quiz-results-great">
          <div className="quiz-results-icon">
            <Mic size={48} />
          </div>
          <h3 className="quiz-results-title">
            Excelente trabalho!
          </h3>
          <p className="quiz-results-score" style={{ marginBottom: "2rem" }}>
            Você terminou todas as perguntas desta parte. Continue praticando sua pronúncia!
          </p>
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
        <span className="section-title-icon"><Mic size={22} /></span>
        Speaking Practice
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
        <h3 className="quiz-question" style={{ marginBottom: "1.5rem", textAlign: "center", fontSize: "1.5rem" }}>
          {current.question}
        </h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: "2rem", minHeight: "2rem" }}>
          {!showTranslation ? (
            <button 
              onClick={() => setShowTranslation(true)}
              style={{
                background: "none",
                border: "none",
                color: "var(--accent-color)",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "1rem"
              }}
            >
              Tradução
            </button>
          ) : (
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", textAlign: "center", margin: 0 }}>
              {current.translation}
            </p>
          )}
        </div>

        <button className="quiz-next-btn" onClick={handleNext}>
          {currentIndex < currentQuestions.length - 1 ? (
            <>Próxima Pergunta <ArrowRight size={18} /></>
          ) : (
            <>Finalizar Parte <ListChecks size={18} /></>
          )}
        </button>
      </div>
    </div>
  );
}
