import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBell, FaCog } from 'react-icons/fa';

const MobileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between p-4 bg-secondary text-secondary-foreground shadow-lg">
        <Link to="/dashboard" className="text-xl font-bold">
          AppName
        </Link>
        <div className="flex items-center space-x-4">
          <FaBell className="text-xl" />
          <FaUser className="text-xl" />
        </div>
      </header>

      <main className="flex-1 p-4 bg-background">{children}</main>

      <footer className="flex justify-around p-4 bg-secondary text-secondary-foreground shadow-lg">
        <Link to="/dashboard">
          <FaHome className="text-xl" />
        </Link>
        <Link to="/profile">
          <FaUser className="text-xl" />
        </Link>
        <Link to="/notifications">
          <FaBell className="text-xl" />
        </Link>
        <Link to="/settings">
          <FaCog className="text-xl" />
        </Link>
      </footer>
    </div>
  );
};

export default MobileLayout;
