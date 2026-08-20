// src/components/WelcomeScreen.jsx
import React from 'react';
import { Trophy, Flame, Sparkles, HelpCircle } from 'lucide-react';

const suggestions = [
  {
    icon: <Trophy size={15} />,
    colorClass: 'chip-gold',
    text: '¿Qué selección ha disputado más finales en los Mundiales?',
  },
  {
    icon: <Flame size={15} />,
    colorClass: 'chip-emerald',
    text: '¿Cuál es el único país que ha jugado todas las Copas del Mundo?',
  },
  {
    icon: <Sparkles size={15} />,
    colorClass: 'chip-purple',
    text: '¿Quién es el máximo goleador histórico de los Mundiales?',
  },
  {
    icon: <HelpCircle size={15} />,
    colorClass: 'chip-cyan',
    text: '¿Para qué sirves y qué te puedo preguntar?',
  },
];

export default function WelcomeScreen({ onChipClick }) {
  return (
    <div className="welcome-screen">
      {/* Dual-tone background */}
      <div className="welcome-bg">
        <div className="welcome-bg-left" />
        <div className="welcome-bg-right">
          {/* Watermark lion / trophy */}
          <span className="welcome-bg-lion" aria-hidden>🦁</span>
        </div>
      </div>

      {/* Content */}
      <div className="welcome-content">
        {/* Soccer ball icon */}
        <div className="welcome-soccer-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="12,2 15,8 21,8 16.5,12 18,18 12,14 6,18 7.5,12 3,8 9,8" fill="currentColor" stroke="none" opacity="0.8"/>
          </svg>
        </div>

        <h2 className="welcome-title">Bienvenido a FutbolAI</h2>
        <p className="welcome-subtitle">
          Tu analista táctico e histórico personal. Pregúntame sobre estadísticas, récords de los Mundiales, tácticas o datos históricos de fútbol.
        </p>

        {/* Quick suggestion chips */}
        <div className="welcome-chips">
          {suggestions.map((s, i) => (
            <button
              key={i}
              className={`welcome-chip ${s.colorClass || ''}`}
              onClick={() => onChipClick && onChipClick(s.text)}
            >
              <span className="chip-icon">{s.icon}</span>
              <span>{s.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
