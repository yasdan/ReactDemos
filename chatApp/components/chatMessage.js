// ChatMessage.js
import React from 'react';

function ChatMessage({ message }) {
  return (
    <div className={`message ${message.status}`}>
      <p>{message.text}</p>
      <span>{message.status === 'sent' ? '✔️' : '✅'}</span>
    </div>
  );
}

export default ChatMessage;
