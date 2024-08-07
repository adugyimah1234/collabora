import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { motion } from 'framer-motion';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [role, setRole] = useState<string>('student'); // Optional
  const [learningStyle, setLearningStyle] = useState<string>(''); // Optional
  const [availability, setAvailability] = useState<string>(''); // Optional
  const [courses, setCourses] = useState<number[]>([]); // Optional
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Simple validation check
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        'http://localhost:5000/api/users/register',
        { name, email, password, role, learning_style: learningStyle, availability, courses },
        { headers: { 'Content-Type': 'application/json' } }
      );
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
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
        <h2 className="text-2xl font-bold mb-6 text-center text-card-foreground">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-muted-foreground mb-1" htmlFor="name">Name</label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-muted-foreground mb-1" htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-muted-foreground mb-1" htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-muted-foreground mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <Button
            type="submit"
            variant="default"
            className="w-full mt-4"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Signup'}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
