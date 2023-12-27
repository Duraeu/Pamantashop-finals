// AuthComponent.js
import React, { useState } from 'react';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real application, send a request to your server for authentication.
    // For simplicity, we'll just log the credentials for now.
    console.log(`Email: ${email}, Password: ${password}, Mode: ${isSignUp ? 'Sign Up' : 'Login'}`);
  };

  return (
    <div className='FormLogin p-4 m-4 bg-plmlogin border-slate-200'>
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <p onClick={handleToggleMode}>
        {isSignUp ? 'Already have an account? Log in.' : 'Don\'t have an account? Sign up.'}
      </p>
    </div>
  );
};

export default AuthComponent;
