import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6">
      <div className="w-full max-w-md p-8 bg-card rounded-lg shadow-lg">
        <div className="flex justify-between mb-8">
          <button
            className={`flex-1 text-lg font-semibold p-2 ${isLogin ? 'text-primary' : 'text-muted-foreground'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 text-lg font-semibold p-2 ${!isLogin ? 'text-primary' : 'text-muted-foreground'}`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        <form>
          {!isLogin && (
            <div className="mb-4">
              <label className="text-sm font-medium text-muted-foreground">Full Name</label>
              <div className="flex items-center border-b border-muted py-2">
                <FaUser className="text-muted mr-2" />
                <Input type="text" placeholder="John Doe" className="w-full" />
              </div>
            </div>
          )}
          <div className="mb-4">
            <label className="text-sm font-medium text-muted-foreground">Email</label>
            <div className="flex items-center border-b border-muted py-2">
              <FaUser className="text-muted mr-2" />
              <Input type="email" placeholder="email@example.com" className="w-full" />
            </div>
          </div>
          <div className="mb-6">
            <label className="text-sm font-medium text-muted-foreground">Password</label>
            <div className="flex items-center border-b border-muted py-2">
              <FaLock className="text-muted mr-2" />
              <Input type="password" placeholder="********" className="w-full" />
            </div>
          </div>
          <Button variant="default" className="w-full py-2 mb-4">
            {isLogin ? 'Login' : 'Signup'}
          </Button>
        </form>
        {isLogin ? (
          <p className="text-sm text-muted-foreground">
            Don't have an account? <Link to="#" onClick={() => setIsLogin(false)} className="text-primary">Sign up</Link>
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Already have an account? <Link to="#" onClick={() => setIsLogin(true)} className="text-primary">Log in</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
