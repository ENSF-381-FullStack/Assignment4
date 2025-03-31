import React, { useEffect, useState, createContext } from 'react';
import Header from './header'
import Footer from './footer'
import AuthMessage from './AuthMessage';

export const AuthContext = createContext();

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    if (authStatus?.type === 'success') {
      setTimeout(() => {
        window.location.href = '/courses';
      }, 2000);
    }
  }, [authStatus]);

  const handleLogin = async () => {
    if (!username || !password) {
      setAuthStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }
    if (password.length < 8) {
      setAuthStatus({ type: 'error', message: 'Password must be at least 8 characters.' });
      return;
    }

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      const match = users.find(user => user.username === username && user.email === password);
      if (match) {
        setAuthStatus({ type: 'success', message: 'Login successful!' });
      } else {
        setAuthStatus({ type: 'error', message: 'Invalid credentials.' });
      }
    } catch {
      setAuthStatus({ type: 'error', message: 'API error. Try again later.' });
    }
  };

  return (
    <AuthContext.Provider value={{ authStatus }}>
      <Header />
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (use email as password)"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p><a href="#">Forgot Password?</a></p>
        <AuthMessage />
      </div>
      <Footer />
    </AuthContext.Provider>
  );
}

export default LoginForm;
