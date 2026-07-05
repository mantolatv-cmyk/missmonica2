"use client";

import { MessageSquare, User, Bot } from "lucide-react";
import type { DialogueLine } from "@/data/scenarios";

interface DialogueProps {
  lines: DialogueLine[];
}

export default function Dialogue({ lines }: DialogueProps) {
  return (
    <div className="dialogue-section">
      <h2 className="section-title">
        <span className="section-title-icon"><MessageSquare size={22} /></span>
        Diálogo
        <span className="section-subtitle">Real-life conversation</span>
      </h2>
      
      <div className="dialogue-container">
        {lines.map((line, index) => {
          const isPrimary = line.isPrimary;
          return (
            <div 
              key={index} 
              className={`dialogue-bubble-wrapper ${isPrimary ? "dialogue-primary" : "dialogue-secondary"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="dialogue-avatar">
                {isPrimary ? <User size={20} /> : <Bot size={20} />}
              </div>
              <div className="dialogue-bubble">
                <p className="dialogue-speaker">{line.speaker}</p>
                <p className="dialogue-text-en">{line.english}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
