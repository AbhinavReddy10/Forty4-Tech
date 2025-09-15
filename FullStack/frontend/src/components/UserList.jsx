import React from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

export default function UserList({ users, onChange }) {
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this user?')) return;
    try { await api.delete(`/users/${id}`); onChange(); }
    catch (e) { alert('Delete failed'); }
  };

  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Phone</th><th>Company</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u._id}>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.phone}</td>
            <td>{u.company}</td>
            <td>
              <Link to={`/users/${u._id}`}>View</Link>
              {' | '}
              <Link to={`/edit/${u._id}`}>Edit</Link>
              {' | '}
              <button onClick={() => handleDelete(u._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
