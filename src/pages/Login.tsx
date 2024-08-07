/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);

      // Handle successful login
      const { token, user } = response.data;
      localStorage.setItem('token', token); // Save token to localStorage or handle it as needed
      // Optionally store user info if needed
      localStorage.setItem('user', JSON.stringify(user)); 
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to log in. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-card-foreground">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-muted-foreground mb-1">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-muted-foreground mb-1">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p aria-live="assertive" className="text-red-500 text-sm mt-2">{error}</p>}
          <Button
            type="submit"
            variant="default"
            className="w-full mt-4"
          >
            Login
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
