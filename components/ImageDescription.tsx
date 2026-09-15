import { useState } from "react";
import { Lightbulb, Eye, EyeOff, Languages } from "lucide-react";
import { ImageDescriptionPractice } from "@/data/types";
import Image from "next/image";

interface ImageDescriptionProps {
  data: ImageDescriptionPractice;
}

export default function ImageDescription({ data }: ImageDescriptionProps) {
  const [showHint, setShowHint] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [description, setDescription] = useState("");

  return (
    <div className="practice-card" style={{ maxWidth: "800px", margin: "0 auto", padding: "1.5rem" }}>
      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Descreva a Imagem
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Observe a imagem com atenção e digite uma descrição em inglês. Use as palavras da dica se precisar de ajuda!
        </p>
      </div>

      <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "12px", overflow: "hidden", marginBottom: "1.5rem", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <Image
          src={data.imagePath}
          alt="Descreva esta cena"
          fill
          style={{ objectFit: "cover" }}
          unoptimized={data.imagePath.startsWith("http")}
        />
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Type your description here..."
          style={{
            width: "100%",
            minHeight: "120px",
            padding: "1rem",
            borderRadius: "12px",
            border: "1px solid var(--border-color)",
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
            fontSize: "1rem",
            fontFamily: "inherit",
            resize: "vertical"
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button
          onClick={() => setShowHint(!showHint)}
          className={`quiz-next-btn ${showHint ? "secondary" : ""}`}
          style={{ maxWidth: "250px", marginBottom: "1.5rem" }}
        >
          {showHint ? <EyeOff size={18} /> : <Eye size={18} />}
          {showHint ? "Ocultar Dica" : "Mostrar Dica"}
        </button>

        {showHint && (
          <div style={{
            background: "var(--bg-secondary)",
            padding: "1.5rem",
            borderRadius: "12px",
            width: "100%",
            animation: "fadeIn 0.3s ease",
            border: "1px solid var(--border-color)"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-primary)" }}>
                <Lightbulb size={20} className="text-primary" />
                <h3 style={{ fontWeight: 600, fontSize: "1.1rem" }}>Palavras-chave</h3>
              </div>
              <button 
                onClick={() => setShowTranslation(!showTranslation)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  border: "none",
                  background: showTranslation ? "var(--primary)" : "var(--bg-tertiary)",
                  color: showTranslation ? "white" : "var(--text-primary)",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "all 0.2s ease"
                }}
              >
                <Languages size={16} />
                {showTranslation ? "Ocultar Tradução" : "Traduzir"}
              </button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {data.keywords.map((kw, idx) => (
                <div key={idx} style={{
                  background: "var(--bg-tertiary)",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}>
                  <span style={{ fontWeight: 600, color: "var(--primary)" }}>{kw.english}</span>
                  {showTranslation && (
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                      {kw.portuguese}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
