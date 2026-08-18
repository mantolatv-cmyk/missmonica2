"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft, BookOpen, Layers, Brain, Lock, MessageSquare,
  Users, UserPlus, Accessibility, Home, Palette, Trophy,
  ShoppingCart, ShoppingBag, Briefcase, MapPin, PawPrint,
  ChefHat, Laptop, Share2, CheckSquare, Mic, Lightbulb, BookText
} from "lucide-react";
import { getScenarioById } from "@/data/scenarios";
import VocabularyList from "@/components/VocabularyList";
import Flashcard from "@/components/Flashcard";
import Quiz from "@/components/Quiz";
import Dialogue from "@/components/Dialogue";
import TrueOrFalse from "@/components/TrueOrFalse";
import SpeakingPractice from "@/components/SpeakingPractice";
import UsefulExpressions from "@/components/UsefulExpressions";
import Reading from "@/components/Reading";
import BuildSentence from "@/components/BuildSentence";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Users, UserPlus, Accessibility, Home, Palette, Trophy,
  ShoppingCart, ShoppingBag, Briefcase, MapPin, PawPrint,
  ChefHat, Laptop, Share2,
};

interface ScenarioPageProps {
  params: Promise<{ id: string }>;
}

export default function ScenarioPage({ params }: ScenarioPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const scenario = getScenarioById(id);

  const [activeTab, setActiveTab] = useState<"vocabulary" | "dialogue" | "flashcards" | "quiz" | "truefalse" | "speaking" | "expressions" | "reading" | "buildsentence">("vocabulary");

  if (!scenario || !scenario.available) {
    return (
      <div className="scenario-page" style={{ textAlign: "center", padding: "4rem 1.5rem" }}>
        <div style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>
          <Lock size={48} />
        </div>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
          Cenário não disponível
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
          Este cenário ainda está sendo preparado. Volte em breve!
        </p>
        <button
          onClick={() => router.push("/")}
          className="quiz-next-btn"
          style={{ maxWidth: "280px", margin: "0 auto" }}
        >
          <ArrowLeft size={20} />
          Voltar ao Dashboard
        </button>
      </div>
    );
  }

  const IconComponent = iconMap[scenario.icon] || Users;

  return (
    <div className="scenario-page">
      {/* Back Link */}
      <a href="/" className="scenario-back-link" onClick={(e) => { e.preventDefault(); router.push("/"); }}>
        <ArrowLeft size={18} />
        Voltar aos Cenários
      </a>

      {/* Scenario Hero */}
      <div className="scenario-hero">
        <span className="scenario-hero-icon">
          <IconComponent size={44} />
        </span>
        <h1>{scenario.title}</h1>
        <p className="scenario-hero-pt">{scenario.titlePt}</p>
      </div>

      {/* Tabs */}
      <div className="tabs-nav">
        <button
          className={`tab-btn ${activeTab === "vocabulary" ? "tab-btn-active" : ""}`}
          onClick={() => setActiveTab("vocabulary")}
        >
          <BookOpen size={16} />
          Vocabulário
        </button>
        <button
          className={`tab-btn ${activeTab === "dialogue" ? "tab-btn-active" : ""}`}
          onClick={() => setActiveTab("dialogue")}
        >
          <MessageSquare size={16} />
          Diálogo
        </button>
        <button
          className={`tab-btn ${activeTab === "flashcards" ? "tab-btn-active" : ""}`}
          onClick={() => setActiveTab("flashcards")}
        >
          <Layers size={16} />
          Flashcards
        </button>
        <button
          className={`tab-btn ${activeTab === "quiz" ? "tab-btn-active" : ""}`}
          onClick={() => setActiveTab("quiz")}
        >
          <Brain size={16} />
          Quiz
        </button>
        <button
          className={`tab-btn ${activeTab === "truefalse" ? "tab-btn-active" : ""}`}
          onClick={() => setActiveTab("truefalse")}
        >
          <CheckSquare size={16} />
          True / False
        </button>
            {scenario.speakingPractice && (
              <button
                onClick={() => setActiveTab("speaking")}
                className={`tab-btn ${activeTab === "speaking" ? "tab-btn-active" : "tab-btn-inactive"}`}
              >
                <Mic size={18} /> Speaking
              </button>
            )}
            
            {scenario.reading && (
              <button
                onClick={() => setActiveTab("reading")}
                className={`tab-btn ${activeTab === "reading" ? "tab-btn-active" : "tab-btn-inactive"}`}
              >
                <BookText size={18} /> Reading
              </button>
            )}

            {scenario.buildSentence && (
              <button
                onClick={() => setActiveTab("buildsentence")}
                className={`tab-btn ${activeTab === "buildsentence" ? "tab-btn-active" : "tab-btn-inactive"}`}
              >
                <Layers size={18} /> Build Sentence
              </button>
            )}
            
            {scenario.usefulExpressions && (
          <button
            className={`tab-btn ${activeTab === "expressions" ? "tab-btn-active" : ""}`}
            onClick={() => setActiveTab("expressions")}
          >
            <Lightbulb size={16} />
            Expressões
          </button>
        )}
      </div>

      {/* Tab Content */}
      {activeTab === "vocabulary" && (
        <VocabularyList items={scenario.vocabulary} isReverse={scenario.id.startsWith("revisao")} />
      )}
      {activeTab === "dialogue" && scenario.dialogue && (
        <Dialogue lines={scenario.dialogue} />
      )}
      {activeTab === "flashcards" && (
        <Flashcard items={scenario.flashcards || []} />
      )}
      {activeTab === "quiz" && (
        <Quiz questions={scenario.quiz} questionsLevel2={scenario.quizLevel2} />
      )}
      {activeTab === "truefalse" && scenario.trueOrFalse && (
        <TrueOrFalse items={scenario.trueOrFalse} itemsLevel2={scenario.trueOrFalseLevel2} />
      )}
      {activeTab === "reading" && scenario.reading && (
        <Reading readingData={scenario.reading} />
      )}
      {activeTab === "speaking" && scenario.speakingPractice && (
        <SpeakingPractice data={scenario.speakingPractice} dataLevel2={scenario.speakingPracticeLevel2} />
      )}
      {activeTab === "buildsentence" && scenario.buildSentence && (
        <BuildSentence data={scenario.buildSentence} />
      )}
      {activeTab === "expressions" && scenario.usefulExpressions && (
        <UsefulExpressions items={scenario.usefulExpressions} />
      )}
    </div>
  );
}
