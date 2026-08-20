import React from 'react';
import { Bot, Trash2, Settings } from 'lucide-react';

export default function ChatPanelHeader({ onClear }) {
  return (
    <div className="chat-panel-header">
      <div className="chat-panel-header-left">
        <div className="bot-icon-badge">
          <Bot size={18} />
        </div>
        <div>
          <div className="bot-name">Asistente FutbolAI</div>
          <div className="bot-status">
            <div className="bot-status-dot" />
            Analizando datos y partidos en tiempo real
          </div>
        </div>
      </div>

      <div className="chat-panel-header-right">
        <button
          className="header-action-btn danger-hover"
          title="Limpiar chat"
          aria-label="Limpiar chat"
          onClick={onClear}
        >
          <Trash2 size={15} />
        </button>
        <button className="header-action-btn" title="Ajustes" aria-label="Ajustes">
          <Settings size={15} />
        </button>
      </div>
    </div>
  );
}
