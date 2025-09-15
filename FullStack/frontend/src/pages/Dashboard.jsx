import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import UserList from '../components/UserList';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUsers = async () => {
    try {
      const res = await api.get('/users');
      setUsers(res.data);
    } catch (e) {
      console.error(e);
    } finally { setLoading(false); }
  };
  useEffect(() => { fetchUsers(); }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link to="/add" className="btn">Add User</Link>
      </div>
      {loading ? <p>Loading...</p> : <UserList users={users} onChange={fetchUsers} />}
    </div>
  );
}
