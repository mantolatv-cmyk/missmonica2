"use client";

import { useState, useEffect, useCallback } from "react";
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, AlignLeft, HelpCircle } from "lucide-react";
import type { BuildSentencePractice } from "@/data/types";

interface BuildSentenceProps {
  data: BuildSentencePractice;
}

export default function BuildSentence({ data }: BuildSentenceProps) {
  const [level, setLevel] = useState<1 | 2>(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [wordBank, setWordBank] = useState<{id: string, word: string}[]>([]);
  const [sentence, setSentence] = useState<{id: string, word: string}[]>([]);
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");
  const [showHint, setShowHint] = useState(false);

  const activeItems = level === 1 ? data.level1 : data.level2;
  const current = activeItems[currentIndex];

  const initGame = useCallback(() => {
    if (!current) return;
    
    // We remove punctuation to make it slightly easier or keep it as a hint.
    // For now, let's keep the words exactly as they are (including punctuation)
    // so it helps them figure out the first and last words.
    const words = current.english.split(' ').map((word, idx) => ({
      id: `${idx}-${word}`,
      word
    }));
    
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setWordBank(shuffled);
    setSentence([]);
    setStatus("idle");
    setShowHint(false);
  }, [current]);

  useEffect(() => {
    initGame();
  }, [initGame, level, currentIndex]);

  const handleWordClick = (item: {id: string, word: string}, fromBank: boolean) => {
    if (status === "correct") return;

    if (fromBank) {
      setWordBank(prev => prev.filter(w => w.id !== item.id));
      setSentence(prev => [...prev, item]);
    } else {
      setSentence(prev => prev.filter(w => w.id !== item.id));
      setWordBank(prev => [...prev, item]);
    }
    setStatus("idle");
  };

  const handleNext = () => {
    if (currentIndex < activeItems.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setStatus("idle");
    }
  };

  const handleCheck = () => {
    const userSentence = sentence.map(w => w.word).join(' ');
    if (userSentence === current.english) {
      setStatus("correct");
    } else {
      setStatus("incorrect");
    }
  };

  const handleLevelChange = (newLevel: 1 | 2) => {
    setLevel(newLevel);
    setCurrentIndex(0);
  };

  if (!current) return null;

  return (
    <div className="quiz-section">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="section-title !mb-0">
          <span className="section-title-icon"><AlignLeft size={22} /></span>
          Build a Sentence
          <span className="section-subtitle">Order the words</span>
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

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Frase {currentIndex + 1} de {activeItems.length}
          </span>
          <button 
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            <HelpCircle size={16} />
            {showHint ? "Ocultar Dica" : "Ver Tradução"}
          </button>
        </div>

        {showHint && (
          <div className="mb-6 p-4 bg-blue-50 text-blue-800 rounded-lg text-center font-medium animate-in fade-in slide-in-from-top-2">
            "{current.portuguese}"
          </div>
        )}

        {/* Drop Zone / Constructed Sentence */}
        <div className="min-h-[100px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-4 mb-6 flex flex-wrap gap-2 items-start content-start transition-colors">
          {sentence.length === 0 && (
            <span className="text-gray-400 m-auto text-sm">Clique nas palavras abaixo para formar a frase aqui</span>
          )}
          {sentence.map(item => (
            <button
              key={item.id}
              onClick={() => handleWordClick(item, false)}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transition-all animate-in zoom-in-95 duration-200"
            >
              {item.word}
            </button>
          ))}
        </div>

        {/* Word Bank */}
        <div className="flex flex-wrap gap-2 justify-center min-h-[60px] mb-8">
          {wordBank.map(item => (
            <button
              key={item.id}
              onClick={() => handleWordClick(item, true)}
              className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-lg shadow-sm hover:border-blue-300 hover:text-blue-600 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              {item.word}
            </button>
          ))}
        </div>

        {/* Controls & Feedback */}
        <div className="flex flex-col items-center gap-4">
          {status === "correct" && (
            <div className="flex items-center gap-2 text-green-600 font-semibold text-lg animate-in fade-in slide-in-from-bottom-2">
              <CheckCircle2 size={24} />
              Correto! Excelente trabalho.
            </div>
          )}
          
          {status === "incorrect" && (
            <div className="flex items-center gap-2 text-red-500 font-medium animate-in fade-in slide-in-from-bottom-2">
              <XCircle size={20} />
              A ordem não está correta. Tente novamente!
            </div>
          )}

          <div className="flex gap-3 w-full sm:w-auto">
            {status !== "correct" ? (
              <>
                <button
                  onClick={initGame}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <RotateCcw size={18} />
                  Limpar
                </button>
                <button
                  onClick={handleCheck}
                  disabled={sentence.length !== current.english.split(' ').length}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  <CheckCircle2 size={18} />
                  Verificar
                </button>
              </>
            ) : (
              <button
                onClick={handleNext}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm animate-pulse"
              >
                Próxima Frase
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
