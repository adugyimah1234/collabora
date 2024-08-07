// components/Settings.js
import { FaUserCog, FaLock, FaBell } from 'react-icons/fa';

const Settings = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Settings</h3>
      <ul>
        <li className="mb-2">
          <div className="flex justify-between items-center bg-background p-2 rounded shadow">
            <FaUserCog className="mr-3 text-indigo-600" />
            <span>Profile Settings</span>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex justify-between items-center bg-background p-2 rounded shadow">
            <FaLock className="mr-3 text-indigo-600" />
            <span>Change Password</span>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex justify-between items-center bg-background p-2 rounded shadow">
            <FaBell className="mr-3 text-indigo-600" />
            <span>Notification Settings</span>
          </div>
        </li>
      </ul>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors flex items-center">
        <FaLock className="mr-2" /> Log Out
      </button>
    </div>
  );
};

export default Settings;
