"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Users, UserPlus, Accessibility, Home, Palette, Trophy,
  ShoppingCart, ShoppingBag, Briefcase, MapPin, PawPrint,
  ChefHat, Laptop, Share2, Lock, ArrowRight,
} from "lucide-react";
import type { Scenario } from "@/data/scenarios";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Users, UserPlus, Accessibility, Home, Palette, Trophy,
  ShoppingCart, ShoppingBag, Briefcase, MapPin, PawPrint,
  ChefHat, Laptop, Share2,
};

const colorMap: Record<string, string> = {
  rose: "card-rose",
  lavender: "card-lavender",
  peach: "card-peach",
  mint: "card-mint",
  amber: "card-amber",
  orange: "card-orange",
  emerald: "card-emerald",
  sky: "card-sky",
  indigo: "card-indigo",
  cyan: "card-cyan",
  stone: "card-stone",
  red: "card-red",
  slate: "card-slate",
  violet: "card-violet",
};

interface ScenarioCardProps {
  scenario: Scenario;
  index: number;
}

export default function ScenarioCard({ scenario, index }: ScenarioCardProps) {
  const IconComponent = iconMap[scenario.icon] || Users;
  const colorClass = colorMap[scenario.color] || "card-rose";

  const cardContent = (
    <div
      className={`scenario-card ${colorClass} ${!scenario.available ? "card-locked" : ""}`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className="card-image-wrapper">
        <Image
          src={scenario.image}
          alt={scenario.title}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="card-image"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={100}
        />
      </div>

      <div className="card-body">
        <div className="card-icon-wrapper">
          <div className="card-icon-circle">
            <IconComponent size={28} className="card-main-icon" />
          </div>
        </div>

        <div className="card-content">
          <h3 className="card-title">{scenario.title}</h3>
          <p className="card-title-pt">{scenario.titlePt}</p>
          <p className="card-description">{scenario.descriptionPt}</p>
        </div>

        <div className="card-footer">
          {!scenario.available ? (
            <span className="card-badge card-badge-locked">
              <Lock size={14} />
              Em breve
            </span>
          ) : (
            <span className="card-badge card-badge-new">
              Começar
              <ArrowRight size={14} />
            </span>
          )}
        </div>
      </div>

      <div className="card-accent-bar" />
    </div>
  );

  if (!scenario.available) {
    return <div className="scenario-card-wrapper">{cardContent}</div>;
  }

  return (
    <Link href={`/scenario/${scenario.id}`} className="scenario-card-wrapper">
      {cardContent}
    </Link>
  );
}
