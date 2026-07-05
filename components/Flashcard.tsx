"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Layers, Lightbulb } from "lucide-react";
import type { FlashcardItem } from "@/data/scenarios";

interface FlashcardProps {
  items: FlashcardItem[];
}

export default function Flashcard({ items }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const current = items[currentIndex];

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  function handlePrev() {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }

  function handleNext() {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }

  function handleReset() {
    setIsFlipped(false);
    setCurrentIndex(0);
  }

  return (
    <div className="flashcard-section">
      <h2 className="section-title">
        <span className="section-title-icon"><Layers size={22} /></span>
        Flashcards
        <span className="section-subtitle">Click the card to flip</span>
      </h2>

      <div className="flashcard-container">
        <button className="flashcard-nav-btn" onClick={handlePrev} aria-label="Previous card">
          <ChevronLeft size={24} />
        </button>

        <div className="flashcard-perspective" onClick={handleFlip}>
          <div className={`flashcard-inner ${isFlipped ? "flashcard-flipped" : ""}`}>
            {/* Front */}
            <div className="flashcard-face flashcard-front">
              <span className="flashcard-lang-badge">EN</span>
              <p className="flashcard-text">{current.english}</p>
              <span className="flashcard-hint">Toque para ver a tradução</span>
            </div>
            {/* Back */}
            <div className="flashcard-face flashcard-back">
              <span className="flashcard-lang-badge">PT</span>
              <p className="flashcard-text">{current.portuguese}</p>
              {current.example && (
                <p className="flashcard-example">
                  <Lightbulb size={14} className="flashcard-example-icon" />
                  {current.example}
                </p>
              )}
            </div>
          </div>
        </div>

        <button className="flashcard-nav-btn" onClick={handleNext} aria-label="Next card">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flashcard-controls">
        <span className="flashcard-counter">
          {currentIndex + 1} de {items.length}
        </span>
        <button className="flashcard-reset-btn" onClick={handleReset}>
          <RotateCcw size={16} />
          Recomeçar
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flashcard-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`flashcard-dot ${i === currentIndex ? "flashcard-dot-active" : ""}`}
            onClick={() => { setIsFlipped(false); setCurrentIndex(i); }}
            aria-label={`Card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
