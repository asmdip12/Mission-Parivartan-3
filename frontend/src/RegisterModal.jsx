import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from './AuthContext.jsx';

function RegisterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  if (!isOpen) return null;

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      login('user'); // same as login modal
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  const modalContent = (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
      }}>
        <h3 style={{color:"black"}}>User Registration</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleRegister}>Register</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default RegisterModal; // <-- This is the critical part
