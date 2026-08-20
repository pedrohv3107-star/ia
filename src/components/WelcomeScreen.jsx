// src/components/WelcomeScreen.jsx
import React from 'react';

// ─── SVG logos de competiciones ──────────────────────────────────────────────

// Copa del Mundo FIFA — negro/dorado
function IconMundial() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#002868"/>
      <text x="24" y="32" textAnchor="middle" fontSize="22" fill="#C9A84C" fontWeight="bold">⚽</text>
    </svg>
  );
}

// Champions League — negro/estrellado
function IconChampions() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#1A1A2E"/>
      {/* Balón estilizado UCL */}
      <circle cx="24" cy="24" r="11" fill="none" stroke="#c89b3c" strokeWidth="2"/>
      <polygon points="24,13 26,19 33,19 27,23 29,30 24,26 19,30 21,23 15,19 22,19" fill="#c89b3c"/>
    </svg>
  );
}

// Premier League — morado/blanco (lion)
function IconPremier() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#37003C"/>
      <text x="24" y="31" textAnchor="middle" fontSize="18" fill="#00FF87">🦁</text>
    </svg>
  );
}

// La Liga / Copa del Mundo — rojo/naranja
function IconLaLiga() {
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#EE8208"/>
      <text x="24" y="31" textAnchor="middle" fontSize="18" fill="#fff">🏆</text>
    </svg>
  );
}

const suggestions = [
  {
    logo: <IconMundial />,
    competition: 'Copa del Mundo FIFA',
    accentColor: '#C9A84C',
    bgColor: 'rgba(0,40,104,0.22)',
    borderColor: 'rgba(201,168,76,0.45)',
    text: '¿Qué selección ha disputado más finales en los Mundiales?',
  },
  {
    logo: <IconChampions />,
    competition: 'Champions League',
    accentColor: '#c89b3c',
    bgColor: 'rgba(26,26,46,0.45)',
    borderColor: 'rgba(200,155,60,0.45)',
    text: '¿Quién es el máximo goleador histórico de los Mundiales?',
  },
  {
    logo: <IconPremier />,
    competition: 'Premier League',
    accentColor: '#00FF87',
    bgColor: 'rgba(55,0,60,0.25)',
    borderColor: 'rgba(0,255,135,0.35)',
    text: '¿Qué estadio tiene mayor capacidad en la Premier League?',
  },
  {
    logo: <IconLaLiga />,
    competition: 'FutbolAI',
    accentColor: '#EE8208',
    bgColor: 'rgba(238,130,8,0.12)',
    borderColor: 'rgba(238,130,8,0.4)',
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

        {/* Competition chips */}
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
              <span className="chip-logo">{s.logo}</span>
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
