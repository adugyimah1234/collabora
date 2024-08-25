import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import MessageDropdown from './MessageDropdown'; // Adjust the path accordingly

const MessageBell: React.FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="focus:outline-none">
        <FaEnvelope className="text-xl" />
      </button>
      {isDropdownVisible && (
        <div className="absolute right-0 mt-2">
          <MessageDropdown className="shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default MessageBell;
