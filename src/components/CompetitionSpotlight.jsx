// src/components/CompetitionSpotlight.jsx
import React from 'react';
import { Trophy } from 'lucide-react';

export default function CompetitionSpotlight() {
  return (
    <div className="competition-spotlight">
      {/* Header row */}
      <div className="cs-header">
        <span className="cs-tag">Competición Destacada</span>
        <Trophy size={16} className="cs-trophy" style={{ color: '#f59e0b' }} />
      </div>

      {/* League info */}
      <div className="cs-info">
        <div className="cs-league-icon">🏆</div>
        <div>
          <div className="cs-league-name">Grandes Ligas Europeas</div>
          <div className="cs-league-sub">Fase Decisiva · Temporada 2023/24</div>
        </div>
      </div>

      {/* Stats row */}
      <div className="cs-stats-row">
        <div className="cs-stat">
          <label>Jornadas Restantes</label>
          <div className="cs-val cyan">~6</div>
        </div>
        <div className="cs-divider" />
        <div className="cs-stat">
          <label>Promedio Goles</label>
          <div className="cs-val">2.85</div>
        </div>
        <div className="cs-divider" />
        <div className="cs-stat">
          <label>Favoritos al Título</label>
          <div className="cs-val">City / Arsenal / Madrid</div>
        </div>
      </div>

      {/* Metric numbers row */}
      <div className="cs-metrics-row">
        <div className="cs-metric">
          <div className="cs-metric-value">5</div>
          <div className="cs-metric-label">Grandes Ligas</div>
        </div>
        <div className="cs-metric">
          <div className="cs-metric-value">98</div>
          <div className="cs-metric-label">Equipos Analizados</div>
        </div>
        <div className="cs-metric">
          <div className="cs-metric-value">IA</div>
          <div className="cs-metric-label">Predicciones</div>
        </div>
      </div>
    </div>
  );
}
