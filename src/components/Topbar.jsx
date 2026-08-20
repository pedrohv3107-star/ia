// src/components/Topbar.jsx
import React from 'react';
import { Bell, Search } from 'lucide-react';

const scores = [
  { status: 'live', label: 'EN VIVO', home: 'MCI', score: '2 - 2', away: 'RMA', time: "62'", badge: null },
  { status: 'ft',   label: 'FIN',     home: 'PSG', score: '1 - 0', away: 'DOR', time: null,  badge: null },
  { status: 'live', label: 'MT',      home: 'FCB', score: '1 - 1', away: 'BAY', time: null,  badge: 'orange' },
  { status: 'live', label: 'EN VIVO', home: 'JUV', score: '0 - 2', away: 'MIL', time: "58'", badge: null },
];

export default function Topbar() {
  return (
    <header className="topbar">
      {/* Logo */}
      <div className="topbar-logo">
        <div className="logo-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M19 5 L5 19" strokeWidth="1.5"/>
          </svg>
        </div>
        <span>Futbol<em>AI</em></span>
      </div>

      {/* Live Scores */}
      <div className="topbar-scores">
        {scores.map((s, i) => (
          <div className="score-chip" key={i}>
            {s.status === 'live' && s.label === 'EN VIVO' && (
              <>
                <div className="live-dot" />
                <span className="live-label">EN VIVO</span>
              </>
            )}
            {s.status === 'ft' && (
              <span className="ft-label">FIN</span>
            )}
            {s.label === 'MT' && (
              <>
                <span className={`badge badge-orange`} style={{ fontSize: '0.68rem' }}>MT</span>
              </>
            )}
            <span style={{ color: '#e2e8f0', fontSize: '0.8rem', fontWeight: 500 }}>
              {s.home} {s.score} {s.away}
            </span>
            {s.time && <span className="score-time">{s.time}</span>}
          </div>
        ))}
      </div>

      {/* Right zone */}
      <div className="topbar-right">
        <div className="topbar-search">
          <Search size={13} color="var(--text-muted)" />
          <input placeholder="Buscar o preguntar sobre un partido..." />
          <span className="search-shortcut">⌘K</span>
        </div>

        <button className="topbar-btn">
          <Bell size={14} />
        </button>

        <div className="topbar-avatar">U</div>
      </div>
    </header>
  );
}
