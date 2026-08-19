"use client";

import { useState } from "react";
import { BookOpen, Eye, EyeOff } from "lucide-react";
import type { VocabularyItem } from "@/data/types";

interface VocabularyListProps {
  items: VocabularyItem[];
  isReverse?: boolean;
}

export default function VocabularyList({ items, isReverse = false }: VocabularyListProps) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [level, setLevel] = useState<'A1' | 'A2' | 'B1'>('A1');

  const toggleReveal = (index: number) => {
    setRevealed(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="vocabulary-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="section-title !mb-0">
          <span className="section-title-icon"><BookOpen size={22} /></span>
          Vocabulário Essencial
          <span className="section-subtitle">Essential Vocabulary</span>
        </h2>
        <div className="flex bg-gray-100 p-1 rounded-lg mt-4 sm:mt-0 overflow-x-auto">
          <button 
            onClick={() => setLevel('A1')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 'A1' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Nível A1
          </button>
          <button 
            onClick={() => setLevel('A2')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 'A2' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Nível A2
          </button>
          <button 
            onClick={() => setLevel('B1')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${level === 'B1' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Nível B1
          </button>
        </div>
      </div>
      <div className="vocabulary-list">
        {items
          .filter(item => !item.levels || item.levels[level])
          .map((item, filteredIndex) => {
          const isRevealed = revealed[filteredIndex];
          const currentLevelData = item.levels?.[level];
          
          return (
            <div
              key={filteredIndex}
              className="vocabulary-list-item"
              style={{ animationDelay: `${filteredIndex * 0.08}s` }}
            >
              <div className="vocab-index">{filteredIndex + 1}</div>
              <div className="vocab-content w-full">
                <div className="vocab-header flex justify-between items-center">
                  <p className="vocab-english" style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {isReverse ? item.portuguese : item.english}
                  </p>
                  
                  <button 
                    onClick={() => toggleReveal(filteredIndex)}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full transition-all duration-300 shadow-sm"
                    style={{ 
                      backgroundColor: isRevealed ? "var(--bg-accent)" : "var(--primary-color)", 
                      color: isRevealed ? "var(--text-secondary)" : "white" 
                    }}
                  >
                    {isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
                    {isRevealed ? "Ocultar" : "Tradução"}
                  </button>
                </div>

                {isRevealed && (
                  <div className="mt-3 p-3 rounded-lg" style={{ backgroundColor: "var(--bg-accent)", border: "1px solid var(--border-color)" }}>
                    <p style={{ color: "var(--primary-color)", fontWeight: 600, fontSize: "1.1rem" }}>
                      {isReverse ? item.english : item.portuguese}
                    </p>
                  </div>
                )}
                
                {currentLevelData && currentLevelData.en && (
                  <div className="vocab-examples mt-3">
                    <p className="vocab-example-en italic text-gray-700">"{currentLevelData.en}"</p>
                    {isRevealed && currentLevelData.pt && <p className="text-gray-500 text-sm mt-1">{currentLevelData.pt}</p>}
                  </div>
                )}

                <div className="mt-3">
                  <textarea 
                    placeholder="Suas anotações..." 
                    className="w-full p-2 bg-gray-50/50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all resize-y min-h-[50px]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
