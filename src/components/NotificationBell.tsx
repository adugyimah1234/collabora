import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import NotificationDropdown from './NotificationDropdown'; // Adjust the path accordingly

const NotificationBell: React.FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="focus:outline-none">
        <FaBell className="text-xl" />
      </button>
      {isDropdownVisible && (
        <div className="absolute right-0 mt-2">
          <NotificationDropdown className="shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
