// src/components/WelcomeScreen.jsx
import React from 'react';

const suggestions = [
  {
    logo: '/logo-mundial.jpg',
    competition: 'Copa del Mundo FIFA',
    accentColor: '#C9A84C',
    bgColor: 'rgba(0,40,104,0.2)',
    borderColor: 'rgba(201,168,76,0.4)',
    text: '¿Qué selección ha disputado más finales en los Mundiales?',
  },
  {
    logo: '/logo-champions.jpg',
    competition: 'Champions League',
    accentColor: '#d4af37',
    bgColor: 'rgba(20,20,40,0.35)',
    borderColor: 'rgba(212,175,55,0.4)',
    text: '¿Quién es el máximo goleador histórico de los Mundiales?',
  },
  {
    logo: '/logo-premier.jpg',
    competition: 'Premier League',
    accentColor: '#00FF87',
    bgColor: 'rgba(55,0,60,0.25)',
    borderColor: 'rgba(0,255,135,0.35)',
    text: '¿Qué estadio tiene mayor capacidad en la Premier League?',
  },
  {
    logo: '/logo-laliga.jpg',
    competition: 'LaLiga',
    accentColor: '#f97316',
    bgColor: 'rgba(239,68,8,0.1)',
    borderColor: 'rgba(249,115,22,0.4)',
    text: '¿Para qué sirves y qué te puedo preguntar?',
  },
];

export default function WelcomeScreen({ onChipClick }) {
  return (
    <div className="welcome-screen">
      {/* Background with competition-inspired gradients */}
      <div className="welcome-bg">
        <div className="welcome-bg-left" />
        <div className="welcome-bg-right">
          <span className="welcome-bg-lion" aria-hidden>🏆</span>
        </div>
      </div>

      {/* Content */}
      <div className="welcome-content">
        {/* Soccer ball icon */}
        <div className="welcome-soccer-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="12,2 15,8 21,8 16.5,12 18,18 12,14 6,18 7.5,12 3,8 9,8" fill="currentColor" stroke="none" opacity="0.9"/>
          </svg>
        </div>

        <h2 className="welcome-title">Bienvenido a FutbolAI</h2>
        <p className="welcome-subtitle">
          Tu analista experto en fútbol mundial. Pregúntame sobre estadísticas, récords históricos o datos de las grandes competiciones.
        </p>

        {/* Competition chips with real logos */}
        <div className="welcome-chips">
          {suggestions.map((s, i) => (
            <button
              key={i}
              className="welcome-chip competition-chip"
              style={{
                '--chip-accent': s.accentColor,
                '--chip-bg': s.bgColor,
                '--chip-border': s.borderColor,
              }}
              onClick={() => onChipClick && onChipClick(s.text)}
            >
              <span className="chip-logo-img-wrap">
                <img
                  src={s.logo}
                  alt={s.competition}
                  className="chip-logo-img"
                />
              </span>
              <span className="chip-body">
                <span className="chip-competition">{s.competition}</span>
                <span className="chip-question">{s.text}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
