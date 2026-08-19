"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Layers, Lightbulb } from "lucide-react";
import type { FlashcardItem } from "@/data/scenarios";

interface FlashcardProps {
  items: FlashcardItem[];
  itemsA2?: FlashcardItem[];
  itemsB1?: FlashcardItem[];
}

export default function Flashcard({ items, itemsA2, itemsB1 }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [level, setLevel] = useState<'A1' | 'A2' | 'B1'>('A1');

  const activeItems = level === 'A1' ? items : level === 'A2' && itemsA2 && itemsA2.length > 0 ? itemsA2 : level === 'B1' && itemsB1 && itemsB1.length > 0 ? itemsB1 : items;
  const current = activeItems[currentIndex] || items[0];

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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="section-title !mb-0">
          <span className="section-title-icon"><Layers size={22} /></span>
          Flashcards
          <span className="section-subtitle">Click the card to flip</span>
        </h2>
        {(itemsA2 || itemsB1) && (
          <div className="flex bg-gray-100 p-1 rounded-lg mt-4 sm:mt-0 overflow-x-auto">
            <button 
              onClick={() => { setLevel('A1'); handleReset(); }}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 'A1' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Nível A1
            </button>
            {itemsA2 && itemsA2.length > 0 && (
              <button 
                onClick={() => { setLevel('A2'); handleReset(); }}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 'A2' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Nível A2
              </button>
            )}
            {itemsB1 && itemsB1.length > 0 && (
              <button 
                onClick={() => { setLevel('B1'); handleReset(); }}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 'B1' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Nível B1
              </button>
            )}
          </div>
        )}
      </div>

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
          {currentIndex + 1} de {activeItems.length}
        </span>
        <button className="flashcard-reset-btn" onClick={handleReset}>
          <RotateCcw size={16} />
          Recomeçar
        </button>
      </div>

      <div className="mt-6 mb-4">
        <textarea 
          key={`flashcard-note-${level}-${currentIndex}`}
          className="w-full p-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 resize-none shadow-sm"
          rows={2}
          placeholder="Suas anotações ou tradução..."
        ></textarea>
      </div>

      {/* Dots indicator */}
      <div className="flashcard-dots">
        {activeItems.map((_, i) => (
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
