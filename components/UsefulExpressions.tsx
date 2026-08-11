"use client";

import { useState } from "react";
import { Lightbulb, Eye, EyeOff } from "lucide-react";
import type { UsefulExpression } from "@/data/scenarios";

interface UsefulExpressionsProps {
  items: UsefulExpression[];
}

export default function UsefulExpressions({ items }: UsefulExpressionsProps) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const toggleReveal = (index: number) => {
    setRevealed(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="vocabulary-section">
      <h2 className="section-title">
        <span className="section-title-icon" style={{ backgroundColor: "var(--warning-color)" }}>
          <Lightbulb size={22} color="white" />
        </span>
        Expressões Úteis
        <span className="section-subtitle">Useful Expressions</span>
      </h2>
      <div className="vocabulary-list">
        {items.map((item, index) => {
          const isRevealed = revealed[index];
          return (
            <div
              key={index}
              className="vocabulary-list-item"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="vocab-index">{index + 1}</div>
              <div className="vocab-content w-full">
                <div className="vocab-header flex justify-between items-center">
                  <p className="vocab-english" style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {item.expressionPt}
                  </p>
                  
                  <button 
                    onClick={() => toggleReveal(index)}
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
                      {item.translationEn}
                    </p>
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
