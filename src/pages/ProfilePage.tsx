import React, { useState } from 'react';
import { FaCamera, FaEdit } from 'react-icons/fa';

// Define the type for user profile data
interface UserProfile {
  name: string;
  email: string;
  phone: string;
  bio: string;
  profilePicture: string;
}

const ProfilePage: React.FC = () => {
  // Example user data
  const [user, setUser] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    bio: 'Software developer with a passion for creating amazing applications.',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image URL
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<UserProfile>(user);

  const handleEdit = () => {
    setEditMode(!editMode);
    if (editMode) {
      setUser(formData); // Save changes
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser(prev => ({ ...prev, profilePicture: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    document.getElementById('file-input')?.click();
  };

  const handleSettingsAction = (action: string) => {
    switch (action) {
      case 'change-password':
        alert('Change password functionality here');
        break;
      case 'manage-subscriptions':
        alert('Manage subscriptions functionality here');
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-full h-48 object-cover"
          />
          <button
            onClick={handleUpload}
            className="absolute bottom-4 right-4 bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors"
          >
            <FaCamera />
          </button>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePictureChange}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-600 bg-gray-200">
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4 flex-grow">
              {editMode ? (
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="text-2xl font-bold mb-2 p-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="text-gray-600 mb-2 p-2 border border-gray-300 rounded-lg w-full"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="text-gray-600 mb-2 p-2 border border-gray-300 rounded-lg w-full"
                  />
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="text-gray-700 mb-4 p-2 border border-gray-300 rounded-lg w-full"
                    rows={4}
                  />
                </div>
              ) : (
                <div>
                  <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-gray-600">{user.phone}</p>
                  <p className="text-gray-700 mb-6">{user.bio}</p>
                </div>
              )}
              <button
                onClick={handleEdit}
                className="ml-auto bg-indigo-600 text-white p-2 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
              >
                <FaEdit /> {editMode ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleSettingsAction('change-password')}
                className="bg-gray-200 text-gray-800 p-3 rounded-lg shadow-md hover:bg-gray-300 transition-colors"
              >
                Change Password
              </button>
              <button
                onClick={() => handleSettingsAction('manage-subscriptions')}
                className="bg-gray-200 text-gray-800 p-3 rounded-lg shadow-md hover:bg-gray-300 transition-colors"
              >
                Manage Subscriptions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
