// src/App.jsx
import React, { useState } from 'react';
import './App.css';

import qnaData from '../preguntas_respuestas.json';

import ChatPanelHeader   from './components/ChatPanelHeader';
import WelcomeScreen     from './components/WelcomeScreen';
import MessageList       from './components/MessageList';
import ChatInputBar      from './components/ChatInputBar';
import ChatFooter        from './components/ChatFooter';

import { generateDynamicAnswer } from './nlp/dynamicResponse';

// NLP matcher
function findBestAnswer(userQuery) {
  if (!userQuery || !userQuery.trim()) return null;
  const queryLower = userQuery.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const words = queryLower.split(/\s+/).filter((w) => w.length > 2);
  let bestMatch = null;
  let highestScore = 0;
  qnaData.forEach((item) => {
    let score = 0;
    const preguntaNorm = item.pregunta.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (preguntaNorm.includes(queryLower) || queryLower.includes(preguntaNorm)) score += 50;
    item.keywords.forEach((kw) => {
      const kwNorm = kw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (queryLower.includes(kwNorm)) score += 25;
      words.forEach((word) => { if (kwNorm.includes(word)) score += 10; });
    });
    const intentNorm = item.intent.replace(/_/g, ' ');
    if (queryLower.includes(intentNorm)) score += 20;
    words.forEach((word) => {
      if (preguntaNorm.includes(word)) score += 5;
      if (item.respuesta.toLowerCase().includes(word)) score += 3;
    });
    if (score > highestScore) { highestScore = score; bestMatch = item; }
  });
  return highestScore >= 12 ? bestMatch : null;
}

export default function App() {
  const [messages, setMessages] = useState([]);

  const handleClear = () => {
    setMessages([]);
  };

  const handleSend = (text) => {
    const userMsg = { type: 'user', text };

    // Build bot reply
    const found = findBestAnswer(text);
    let botMsg;
    if (found) {
      botMsg = {
        type: 'bot',
        text: found.respuesta,
        showSpotlight: false,
        showQuote: false,
      };
    } else {
      // Dynamic AI reasoning on the fly for any question not in dataset
      const dynamicResponseText = generateDynamicAnswer(text);
      botMsg = {
        type: 'bot',
        text: dynamicResponseText,
        showSpotlight: false,
        showQuote: false,
      };
    }

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleChipClick = (text) => {
    handleSend(text);
  };

  return (
    <div className="app-layout">
      {/* Central chat panel */}
      <div className="chat-panel">
        {/* Panel header */}
        <ChatPanelHeader onClear={handleClear} />

        {/* Scrollable messages area */}
        <div className="chat-messages-area">
          {/* Welcome hero (always visible at the top like the screenshot) */}
          <WelcomeScreen onChipClick={handleChipClick} />

          {/* Message thread */}
          <MessageList messages={messages} qnaData={qnaData} />
        </div>

        {/* Input bar */}
        <ChatInputBar onSend={handleSend} />

        {/* Footer status */}
        <ChatFooter />
      </div>
    </div>
  );
}
