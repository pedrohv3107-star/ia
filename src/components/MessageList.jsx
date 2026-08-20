// src/components/MessageList.jsx
import React, { useEffect, useRef } from 'react';
import { Bot } from 'lucide-react';
import CompetitionSpotlight from './CompetitionSpotlight';

function QuoteBlock() {
  return (
    <div className="quote-block">
      <p className="quote-text">
        <strong>
          "La convergencia de datos tácticos sugiere que los títulos se decidirán por la profundidad de plantilla y la rotación estratégica más que solo por la calidad del once inicial."
        </strong>
      </p>
      <p className="quote-followup">
        ¿Te gustaría una comparación de los planteamientos tácticos entre los principales candidatos al título?
      </p>
    </div>
  );
}

function UserMessage({ text }) {
  return (
    <div className="msg-user fade-in">
      <div className="msg-user-bubble">{text}</div>
    </div>
  );
}

function BotMessage({ text, showSpotlight, showQuote }) {
  return (
    <div className="msg-bot fade-in">
      <div className="msg-bot-avatar">
        <Bot size={16} />
      </div>
      <div className="msg-bot-body">
        {text && <p className="msg-bot-text">{text}</p>}
        {showSpotlight && <CompetitionSpotlight />}
        {showQuote && <QuoteBlock />}
      </div>
    </div>
  );
}

// NLP match helper — reused from App context
function findBestAnswer(userQuery, qnaData) {
  if (!userQuery || userQuery.trim().length === 0) return null;
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

export default function MessageList({ messages, qnaData }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="messages-list">
      {messages.map((msg, i) => {
        if (msg.type === 'user') {
          return <UserMessage key={i} text={msg.text} />;
        }

        // Bot message: resolve answer from qnaData if available
        let displayText = msg.text;
        if (msg.queryFor && qnaData) {
          const found = findBestAnswer(msg.queryFor, qnaData);
          if (found) displayText = found.respuesta;
        }

        return (
          <BotMessage
            key={i}
            text={displayText}
            showSpotlight={msg.showSpotlight}
            showQuote={msg.showQuote}
          />
        );
      })}
      <div ref={endRef} />
    </div>
  );
}
