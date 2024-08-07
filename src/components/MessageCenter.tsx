// components/MessageCenter.js
import { FaEnvelopeOpen, FaPaperPlane } from 'react-icons/fa';

const messages = [
  { id: 1, sender: 'Prof. Smith', subject: 'Upcoming Exam', date: '2024-08-01' },
  { id: 2, sender: 'Study Group', subject: 'Meeting Reminder', date: '2024-08-02' },
  { id: 3, sender: 'Admin', subject: 'Fee Payment Due', date: '2024-08-03' },
];

const MessageCenter = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Messages</h3>
      <ul>
        {messages.map((message) => (
          <li key={message.id} className="mb-2">
            <div className="flex justify-between items-center bg-background p-2 rounded shadow">
              <div className="flex items-center">
                <FaEnvelopeOpen className="mr-3 text-indigo-600" />
                <span>{message.subject}</span>
              </div>
              <span className="text-muted-foreground text-sm">{message.date}</span>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition-colors flex items-center">
        <FaPaperPlane className="mr-2" /> Compose New Message
      </button>
    </div>
  );
};

export default MessageCenter;
