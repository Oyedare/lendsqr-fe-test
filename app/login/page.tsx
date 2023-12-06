"use client"

import React, { useState, SyntheticEvent } from 'react';
import '@/styles/styledLogin.scss';
import Logo from '@/assets/logo';
import illustration from '@/assets/login-illustration.svg';
import Image from 'next/image';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { firebaseApp } from '@/firebaseConfig';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    const auth = getAuth(firebaseApp);
    setLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false)
      toast.success('Logged in successfully');
      router.push('/');
    } catch (error: any) {
      if (error) {
        setLoading(false)
        toast.error(error.message);
      }
    }
  };

  const handlePasswordVisibility = (e: SyntheticEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className='login-container'>
      <div className="flex-container">
        <div className="left">
          <Logo />
          <Image src={illustration} alt="login image" />
        </div>

        <form action="">
          <div className="welcome-text">
            <h3>Welcome!</h3>
            <p>Enter details to login.</p>
          </div>

          <div className="form-input-container">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              type="email"
              name="email"
              id="email"
              placeholder='Email'
            />
            <div className="password-container">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder='Password'
              />
              <button onClick={handlePasswordVisibility}>{showPassword ? "Hide" : "Show"}</button>
            </div>
            <p className='forgot-password'>Forgot Password?</p>
            <button onClick={handleLogin} className='login-btn'>{loading ? "Loading..." : "Log in"}</button>
            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
