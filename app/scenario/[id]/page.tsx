"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft, BookOpen, Layers, Brain, Lock, MessageSquare,
  Users, UserPlus, Accessibility, Home, Palette, Trophy,
  ShoppingCart, ShoppingBag, Briefcase, MapPin, PawPrint,
  ChefHat, Laptop, Share2,
} from "lucide-react";
import { getScenarioById } from "@/data/scenarios";
import VocabularyList from "@/components/VocabularyList";
import Flashcard from "@/components/Flashcard";
import Quiz from "@/components/Quiz";
import Dialogue from "@/components/Dialogue";

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

  const [activeTab, setActiveTab] = useState<"vocabulary" | "dialogue" | "flashcards" | "quiz">("vocabulary");

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
      </div>

      {/* Tab Content */}
      {activeTab === "vocabulary" && (
        <VocabularyList items={scenario.vocabulary} />
      )}
      {activeTab === "dialogue" && scenario.dialogue && (
        <Dialogue lines={scenario.dialogue} />
      )}
      {activeTab === "flashcards" && (
        <Flashcard items={scenario.flashcards} />
      )}
      {activeTab === "quiz" && (
        <Quiz questions={scenario.quiz} />
      )}
    </div>
  );
}
