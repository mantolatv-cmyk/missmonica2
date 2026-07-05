"use client";

import Link from "next/link";
import { BookOpen, Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <span className="logo-icon">
            <BookOpen size={24} />
          </span>
          <span className="logo-text">English Everyday</span>
          <span className="logo-tagline">Inglês do Dia a Dia</span>
        </Link>
        <div className="lang-badge">
          <Globe size={14} />
          EN / PT
        </div>
      </div>
    </header>
  );
}
