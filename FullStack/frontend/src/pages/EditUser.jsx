import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import api from '../api';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
  const { id } = useParams();
  const [initial, setInitial] = useState(null);
  const navigate = useNavigate();
  useEffect(() => { api.get(`/users/${id}`).then(r=>setInitial(r.data)).catch(()=>alert('Not found')); }, [id]);
  const handleSubmit = async (data) => {
    try { await api.put(`/users/${id}`, data); navigate('/'); }
    catch (e) { alert(e?.response?.data?.message || 'Update failed'); }
  };

  if (!initial) return <p>Loading...</p>;
  return <UserForm initial={initial} onSubmit={handleSubmit} />;
}
