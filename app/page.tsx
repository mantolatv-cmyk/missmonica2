"use client";

import Image from "next/image";
import { scenarios } from "@/data/scenarios";
import ScenarioCard from "@/components/ScenarioCard";
import { GraduationCap, Target } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <GraduationCap size={18} />
          Plataforma Gratuita de Inglês
        </div>
        <h1 className="hero-title">
          Aprenda Inglês para o seu{" "}
          <span className="hero-title-accent">Dia a Dia</span>
        </h1>
        <p className="hero-subtitle">
          Pratique vocabulário e frases com cenários reais do cotidiano.
          Flashcards interativos, quizzes gamificados e muito mais!
        </p>
        <div className="hero-image-wrapper">
          <Image 
            src="/images/hero_banner.png" 
            alt="Amigos e Família se divertindo"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="hero-image"
            quality={100}
            priority
          />
        </div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-header-title">
            <Target size={24} className="section-header-icon" />
            Escolha um Cenário
          </h2>
          <p className="section-header-subtitle">
            Choose a scenario to practice
          </p>
        </div>

        {/* Scenario Cards Grid */}
        <div className="scenarios-grid">
          {scenarios.map((scenario, index) => (
            <ScenarioCard
              key={scenario.id}
              scenario={scenario}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
