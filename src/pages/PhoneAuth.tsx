import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const PhoneAuth = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { signInWithPhone, signInWithGoogle, signInWithFacebook } = useAuth();

  const handleSignInWithPhone = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithPhone(phone, verificationCode);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to sign in. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to sign in with Google. Please try again.');
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithFacebook();
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to sign in with Facebook. Please try again.');
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
        <h2 className="text-2xl font-bold mb-6 text-center text-card-foreground">Phone Authentication</h2>
        <form onSubmit={handleSignInWithPhone}>
          <div className="mb-4">
            <label className="block text-muted-foreground mb-1">Phone Number</label>
            <Input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-muted-foreground mb-1">Verification Code</label>
            <Input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <Button
            type="submit"
            variant="default"
            className="w-full mt-4"
          >
            Sign In with Phone
          </Button>
        </form>
        <Button
          onClick={handleGoogleSignIn}
          variant="default"
          className="w-full mt-4"
        >
          Sign In with Google
        </Button>
        <Button
          onClick={handleFacebookSignIn}
          variant="default"
          className="w-full mt-4"
        >
          Sign In with Facebook
        </Button>
      </motion.div>
    </div>
  );
};

export default PhoneAuth;
