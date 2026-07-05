"use client";

import { BookOpen } from "lucide-react";
import type { VocabularyItem } from "@/data/scenarios";

interface VocabularyListProps {
  items: VocabularyItem[];
}

export default function VocabularyList({ items }: VocabularyListProps) {
  return (
    <div className="vocabulary-section">
      <h2 className="section-title">
        <span className="section-title-icon"><BookOpen size={22} /></span>
        Vocabulário Essencial
        <span className="section-subtitle">Essential Vocabulary</span>
      </h2>
      <div className="vocabulary-list">
        {items.map((item, index) => (
          <div
            key={index}
            className="vocabulary-list-item"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="vocab-index">{index + 1}</div>
            <div className="vocab-content">
              <div className="vocab-header">
                <p className="vocab-english">{item.english}</p>
              </div>
              
              {item.exampleEn && (
                <div className="vocab-examples">
                  <p className="vocab-example-en">"{item.exampleEn}"</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
