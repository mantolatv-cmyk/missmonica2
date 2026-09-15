import { useState } from "react";
import { HelpCircle, RefreshCw, Trophy } from "lucide-react";
import { WouldYouRatherQuestion } from "@/data/types";

interface WouldYouRatherProps {
  questions: WouldYouRatherQuestion[];
}

export default function WouldYouRather({ questions }: WouldYouRatherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleChoice = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="practice-card" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", padding: "3rem 1.5rem" }}>
        <Trophy size={64} style={{ color: "var(--primary)", margin: "0 auto 1.5rem" }} />
        <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem" }}>
          Excellent choices!
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
          You've completed all the "Would You Rather" questions for this scenario.
        </p>
        <button
          onClick={handleRestart}
          className="quiz-next-btn"
          style={{ maxWidth: "250px", margin: "0 auto" }}
        >
          <RefreshCw size={20} /> Play Again
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="practice-card" style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <HelpCircle size={24} style={{ color: "var(--primary)" }} />
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>Would You Rather...</h2>
        </div>
        <div style={{ background: "var(--bg-secondary)", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.875rem", fontWeight: 600 }}>
          {currentIndex + 1} / {questions.length}
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center", width: "100%" }}>
        <button
          onClick={handleChoice}
          style={{
            flex: 1,
            background: "var(--bg-secondary)",
            border: "2px solid var(--border-color)",
            borderRadius: "16px",
            padding: "2rem 1.5rem",
            textAlign: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--primary)";
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-color)";
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)" }}>
            {currentQuestion.optionA.english}
          </span>
          <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
            {currentQuestion.optionA.portuguese}
          </span>
        </button>

        <div style={{ textAlign: "center", color: "var(--text-muted)", fontWeight: 700, fontSize: "1.1rem", padding: "0 1rem" }}>
          OR
        </div>

        <button
          onClick={handleChoice}
          style={{
            flex: 1,
            background: "var(--bg-secondary)",
            border: "2px solid var(--border-color)",
            borderRadius: "16px",
            padding: "2rem 1.5rem",
            textAlign: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--primary)";
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-color)";
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)" }}>
            {currentQuestion.optionB.english}
          </span>
          <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
            {currentQuestion.optionB.portuguese}
          </span>
        </button>
      </div>
    </div>
  );
}
