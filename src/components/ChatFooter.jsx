// src/components/ChatFooter.jsx
import React from 'react';
import { Zap, Database } from 'lucide-react';

export default function ChatFooter() {
  return (
    <div className="chat-footer-bar">
      <div className="footer-badge">
        <span className="badge-dot"><Zap size={11} /></span>
        MODO ANÁLISIS ULTRA
      </div>
      <div className="footer-badge">
        <span className="badge-dot"><Database size={11} /></span>
        BASE DE DATOS TEMPORADA 23/24
      </div>
    </div>
  );
}
