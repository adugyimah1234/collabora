import React from 'react';
import { motion } from 'framer-motion';

interface Message {
  content: string;
  sender: string;
  timestamp: Date;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => (
  <motion.div
    className="flex-grow overflow-y-auto p-4 bg-background"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {messages.map((msg, index) => (
      <motion.div
        key={index}
        className={`flex mb-4 ${msg.sender === 'You' ? "justify-end" : "justify-start"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`max-w-xs px-4 py-2 rounded-lg shadow-md ${msg.sender === 'You' ? "bg-primary text-white" : "bg-muted-foreground"}`}
        >
          {msg.content}
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default MessageList;