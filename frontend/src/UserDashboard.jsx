import React from 'react';
import { useAuth } from './AuthContext';

export default function UserDashboard() {
  const { logout } = useAuth();

  return (
    <div>
      <h2>User Dashboard</h2>
      <p>Welcome, User! Here's your tree form and other data.</p>
      {/* Placeholder for tree form */}
      <div style={{ border: '1px dashed gray', padding: '1rem' }}>
        Tree Form Coming Soon...
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
