import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import useSocket from '../hooks/useSocket';
import { FaSearch, FaVideo, FaPhone, FaInfoCircle, FaSmile, FaMicrophone, FaPaperclip } from 'react-icons/fa';
import { AiOutlineSend, AiOutlineClose } from 'react-icons/ai';
import { formatDistanceToNow } from 'date-fns';
import { EmojiClickData } from 'emoji-picker-react';
import { saveAs } from 'file-saver';

type MessageType = {
  content: string;
  sender: string;
  timestamp: Date;
  type?: string;
  fileName?: string; // Include this
};

const GroupChat: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const socket = useSocket('/groupchat');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [eventDate, setEventDate] = useState<Date | null>(null);
  const [task, setTask] = useState('');
  const [assignedMember, setAssignedMember] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (socket) {
      socket.emit('joinGroup', id);

      socket.on('receiveMessage', (msg: MessageType & { groupId: string }) => {
        if (msg.groupId === id) {
          setMessages(prevMessages => [...prevMessages, msg]);
        }
      });

      return () => {
        socket.off('receiveMessage');
      };
    }
  }, [socket, id]);

  const sendMessage = () => {
    if (message.trim() && socket) {
      const msg: MessageType = { content: message, sender: 'You', timestamp: new Date(), type: 'text' };
      socket.emit('sendMessage', { groupId: id, ...msg });
      setMessages(prevMessages => [...prevMessages, msg]);
      setMessage('');
      setShowEmojiPicker(false);
    }
  };

  const onEmojiClick = (emojiObject: EmojiClickData) => {
    setMessage(prevMessage => prevMessage + emojiObject.emoji);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const msg: MessageType = { content: reader.result as string, sender: 'You', timestamp: new Date(), type: 'file', fileName: file.name };
        socket?.emit('sendMessage', { groupId: id, ...msg });
        setMessages(prevMessages => [...prevMessages, msg]);
      };
      reader.readAsDataURL(file);
    }
  };

  const startRecording = () => {
    if (!isRecording) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorderRef.current = mediaRecorder;
          setAudioChunks([]);
          mediaRecorder.ondataavailable = event => {
            if (event.data.size > 0) {
              setAudioChunks(prev => [...prev, event.data]);
            }
          };
          mediaRecorder.start();
          setIsRecording(true);
        })
        .catch(err => console.error("Error accessing microphone: ", err));
    } else {
      stopRecording();
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'audio/mp3' });
        const url = URL.createObjectURL(blob);
        const msg: MessageType = { content: url, sender: 'You', timestamp: new Date(), type: 'audio' };
        socket?.emit('sendMessage', { groupId: id, ...msg });
        setMessages(prevMessages => [...prevMessages, msg]);
        saveAs(blob, `recording-${new Date().getTime()}.mp3`);
        setIsRecording(false);
        setAudioChunks([]);
      };
    }
  };

  const handleEventCreation = () => {
    setEventDate(null);
  };

  const handleTaskCreation = () => {
    console.log(`Task: ${task}, Assigned to: ${assignedMember}`);
    setTask('');
    setAssignedMember('');
  };

  const filteredMessages = messages.filter((msg) =>
    msg.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <motion.aside
        className="w-80 bg-white border-r border-gray-300 overflow-y-auto p-4"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="relative mb-4">
          <input
            type="text"
            className="flex-grow px-3 py-2 border rounded-lg pr-10"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-2 text-gray-500" />
        </div>
        <h2 className="text-xl font-bold mb-4">Recent Chats</h2>
        <ul>
          <li className="mb-2 border-b border-gray-200 pb-2 flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
            <div>
              <span className="font-bold">Study Group 1</span>
              <p className="text-sm text-gray-500">Last message...</p>
            </div>
          </li>
        </ul>
      </motion.aside>

      <main className="flex-1 p-6 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b border-gray-300 bg-white shadow-md">
          <div className="flex items-center space-x-4">
            <FaInfoCircle className="text-2xl text-gray-600 cursor-pointer" onClick={() => setShowModal(true)} />
            <span className="text-2xl font-bold">Group Chat</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-blue-500 hover:text-blue-700">
              <FaVideo className="text-2xl" />
            </button>
            <button className="text-green-500 hover:text-green-700">
              <FaPhone className="text-2xl" />
            </button>
            <button className="text-gray-500 hover:text-gray-700" onClick={() => fileInputRef.current?.click()}>
              <FaPaperclip className="text-2xl" />
            </button>
            <button className="text-yellow-500 hover:text-yellow-700">
              <FaSmile className="text-2xl" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
            </button>
            <button className={`text-red-500 hover:text-red-700 ${isRecording ? 'animate-pulse' : ''}`} onClick={startRecording}>
              <FaMicrophone className="text-2xl" />
            </button>
          </div>
        </header>

        <motion.div
          className="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-md mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredMessages.map((msg, index) => (
            <motion.div
              key={index}
              className={`flex items-start ${msg.sender === 'You' ? 'justify-end' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`flex items-center space-x-2 ${msg.sender === 'You' ? 'ml-2' : 'mr-2'}`}>
                {msg.type === 'text' && (
                  <p className={`p-2 rounded-lg ${msg.sender === 'You' ? 'bg-blue-100' : 'bg-gray-200'}`}>
                    {msg.content}
                  </p>
                )}
                {msg.type === 'file' && msg.fileName && (
                  <a
                    href={msg.content}
                    download={msg.fileName}
                    className="bg-gray-200 text-blue-500 px-2 py-1 rounded-lg hover:underline"
                  >
                    {msg.fileName}
                  </a>
                )}
                {msg.type === 'audio' && (
                  <audio controls src={msg.content} className="bg-gray-200 p-2 rounded-lg" />
                )}
              </div>
              <span className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(msg.timestamp), { addSuffix: true })}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <footer className="flex items-center space-x-4 mt-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 p-2 border rounded-lg"
            placeholder="Type a message..."
          />
          <button className="text-blue-500" onClick={sendMessage}>
            <AiOutlineSend className="text-2xl" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </footer>

        {showEmojiPicker && (
          <motion.div
            className="absolute bottom-16 right-16 z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* <Picker onEmojiClick={onEmojiClick} /> */}
          </motion.div>
        )}

        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-lg font-bold mb-4">Group Info</h3>
              <button
                className="absolute top-4 right-4 text-red-500"
                onClick={() => setShowModal(false)}
              >
                <AiOutlineClose className="text-xl" />
              </button>
              {/* Modal content */}
              <div>
                <p className="mb-2">Event Date: {eventDate?.toDateString() || 'None'}</p>
                <p className="mb-2">Task: {task}</p>
                <p>Assigned Member: {assignedMember}</p>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
                  onClick={handleEventCreation}
                >
                  Create Event
                </button>
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4"
                  onClick={handleTaskCreation}
                >
                  Assign Task
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default GroupChat;
