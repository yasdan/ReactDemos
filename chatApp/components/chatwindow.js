// ChatWindow.js
import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import ChatMessage from './chatMessage';
import MessageInput from './messageInput';
import '../Styles/ChatWindow.css';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const msgs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(msgs);
        setError(null); // Clear any previous errors
      },
      (error) => {
        console.error("Error fetching messages:", error);
        setError("Unable to load messages. Please try again later.");
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="chat-window">
      {error && <p className="error">{error}</p>}
      {messages.map(msg => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
      <MessageInput />
    </div>
  );
}

export default ChatWindow;

