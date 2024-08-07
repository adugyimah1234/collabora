import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import useSocket from '../hooks/useSocket';

const GroupChat: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const socket = useSocket('/groupchat');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ content: string }[]>([]);

  useEffect(() => {
    if (socket) {
      // Emit joinGroup event when socket is ready and ID is available
      socket.emit('joinGroup', id);

      // Listen for receiveMessage event
      socket.on('receiveMessage', (msg: { groupId: string; content: string }) => {
        if (msg.groupId === id) {
          setMessages((prevMessages) => [...prevMessages, msg]);
        }
      });

      // Cleanup function to remove the listener when component unmounts
      return () => {
        socket.off('receiveMessage');
      };
    }
  }, [socket, id]);

  const sendMessage = () => {
    if (message.trim() && socket) {
      socket.emit('sendMessage', { groupId: id, content: message });
      setMessage('');
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto mt-10 p-6 bg-background rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Group Chat</h2>
      <div className="h-64 overflow-y-auto mb-4 p-4 border rounded-lg bg-background">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            className="p-2 mb-2 bg-muted-foreground rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {msg.content}
          </motion.div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow px-3 py-2 text-muted-foreground border rounded-lg mr-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="px-3 py-2 bg-blue-500 text-white rounded-lg"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default GroupChat;