// ✅ Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      marginTop: '40px',
      padding: '1rem',
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      fontSize: '14px'
    }}>
      © {new Date().getFullYear()} Mission Parivartan. All rights reserved.
    </footer>
  );
}
