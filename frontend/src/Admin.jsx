import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

export default function Admin() {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    const data = await getDocs(collection(db, 'treeForms'));
    setRequests(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const updateStatus = async (id, newStatus) => {
    await updateDoc(doc(db, 'treeForms', id), { status: newStatus });
    fetchRequests();
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {requests.map(req => (
        <div key={req.id} style={{ border: '1px solid black', marginBottom: 10, padding: 10 }}>
          <p><strong>Name:</strong> {req.name}</p>
          <p><strong>Trees:</strong> {req.trees}</p>
          <p><strong>Status:</strong> {req.status}</p>
          <button onClick={() => updateStatus(req.id, "Approved")}>Approve</button>
          <button onClick={() => updateStatus(req.id, "Rejected")}>Reject</button>
        </div>
      ))}
    </div>
  );
}