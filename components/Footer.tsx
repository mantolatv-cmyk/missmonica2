import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-encouragement">
          <Sparkles size={18} className="footer-icon" />
          You&apos;re doing great! Keep practicing!
        </p>
        <p className="footer-encouragement-pt">
          Você está indo muito bem! Continue praticando!
        </p>
        <p className="footer-credits">
          Made with <Heart size={14} className="heart" /> by English Everyday ·
          Inglês do Dia a Dia
        </p>
      </div>
    </footer>
  );
}
