// src/components/ChatInputBar.jsx
import React, { useState } from 'react';
import { Mic, Send } from 'lucide-react';

export default function ChatInputBar({ onSend }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSend(value.trim());
    setValue('');
  };

  return (
    <div className="chat-input-bar">
      <form className="chat-input-inner" onSubmit={handleSubmit}>
        {/* + button */}
        <button type="button" className="chat-input-add-btn" title="Adjuntar">
          +
        </button>

        {/* Text field */}
        <input
          type="text"
          className="chat-input-field"
          placeholder="Escribe tu consulta al analista de FutbolAI..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* Mic */}
        <button type="button" className="chat-input-mic-btn" title="Dictado por voz">
          <Mic size={16} />
        </button>

        {/* Send */}
        <button type="submit" className="chat-input-send-btn" title="Enviar">
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}
