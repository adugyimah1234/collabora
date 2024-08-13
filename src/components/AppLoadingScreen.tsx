import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AppLoadingScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Automatically navigate to login/signup after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-primary-foreground">
      <div className="text-4xl font-bold">YourApp</div>
      <div className="mt-4">
        <div className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default AppLoadingScreen;
