// components/UserProfile.js
const UserProfile = () => {
    return (
      <div className="flex flex-col items-center text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">John Doe</h2>
        <p className="text-gray-600">Student</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Edit Profile
        </button>
      </div>
    );
  };
  
  export default UserProfile;
  