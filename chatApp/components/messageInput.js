// MessageInput.js
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';    
import { database } from '../firebase';
function MessageInput() {
  const [text, setText] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      await addDoc(collection(db, 'messages'), {
        text,
        createdAt: serverTimestamp(),
        status: 'sent',
      });
      setText('');
    }
  };

  return (
    <form onSubmit={sendMessage} className="message-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message"
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageInput;
