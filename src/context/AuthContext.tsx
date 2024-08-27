/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, ReactNode } from 'react';
import { getAuth, Auth, UserCredential } from 'firebase/auth';
import { signInWithPhone, signInWithGoogle, signInWithFacebook, loginWithEmail, signUpWithEmail } from '../utils/authUtils';

interface AuthContextProps {
  userId: string | null;
  token: string | null;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signInWithPhone: (phone: string, recaptchaContainerId: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth: Auth = getAuth();
  const [userId, setUserId] = React.useState<string | null>(null);
  const [token, setToken] = React.useState<string | null>(null);

  const handleLoginWithEmail = async (email: string, password: string) => {
    try {
      const userCredential: UserCredential = await loginWithEmail(email, password);
      setUserId(userCredential.user.uid);
      const idToken = await userCredential.user.getIdToken();
      setToken(idToken);
    } catch (error) {
      console.error('Error logging in with email:', error);
    }
  };

  const handleSignUpWithEmail = async (email: string, password: string) => {
    try {
      const userCredential: UserCredential = await signUpWithEmail(email, password);
      setUserId(userCredential.user.uid);
      const idToken = await userCredential.user.getIdToken();
      setToken(idToken);
    } catch (error) {
      console.error('Error signing up with email:', error);
    }
  };

  const handleSignInWithPhone = async (phone: string, recaptchaContainerId: string) => {
    if (!phone || !recaptchaContainerId) {
      console.error('Phone number or reCAPTCHA container ID is missing');
      return;
    }

    try {
      const confirmationResult = await signInWithPhone(phone, recaptchaContainerId);
      const code = prompt('Enter the verification code sent to your phone');
      if (code) {
        const userCredential = await confirmationResult.confirm(code);
        setUserId(userCredential.user.uid);
        const idToken = await userCredential.user.getIdToken();
        setToken(idToken);
      } else {
        console.error('Verification code is missing');
      }
    } catch (error) {
      console.error('Error signing in with phone credential:', error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const userCredential: UserCredential = await signInWithGoogle();
      setUserId(userCredential.user.uid);
      const idToken = await userCredential.user.getIdToken();
      setToken(idToken);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleSignInWithFacebook = async () => {
    try {
      const userCredential: UserCredential = await signInWithFacebook();
      setUserId(userCredential.user.uid);
      const idToken = await userCredential.user.getIdToken();
      setToken(idToken);
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
    }
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserId(user.uid);
        user.getIdToken().then(setToken).catch(console.error);
      } else {
        setUserId(null);
        setToken(null);
      }
    });
    return unsubscribe;
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        userId,
        token,
        loginWithEmail: handleLoginWithEmail,
        signUpWithEmail: handleSignUpWithEmail,
        signInWithPhone: handleSignInWithPhone,
        signInWithGoogle: handleSignInWithGoogle,
        signInWithFacebook: handleSignInWithFacebook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
