import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [loginWith, setLoginWith] = useState('email'); // 'email' or 'phone'
  const [email, setEmail] = useState('');
  const [phoneno, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8000/api/user/login',
        { email, phoneno, password },
        { withCredentials: true }
      );
      alert('Login successful!');
      console.log(response.data);

      login(response.data.user);

      navigate('/TreeForm');
    } catch (err) {
      alert('Login failed!');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      {/* Toggle Switch */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          <input
            type="radio"
            value="email"
            checked={loginWith === 'email'}
            onChange={() => setLoginWith('email')}
          />
          Login with Email
        </label>
        &nbsp;&nbsp;
        <label>
          <input
            type="radio"
            value="phone"
            checked={loginWith === 'phone'}
            onChange={() => setLoginWith('phone')}
          />
          Login with Phone
        </label>
      </div>

      {/* Email or Phone Input */}
      {loginWith === 'email' ? (
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      ) : (
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneno}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      )}
      <br />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br />

      <button type="submit">Login</button>
    </form>
  );
}
