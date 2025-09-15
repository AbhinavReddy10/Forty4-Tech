import React from 'react';
import UserForm from '../components/UserForm';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    try { await api.post('/users', data); navigate('/'); }
    catch (e) { alert(e?.response?.data?.message || 'Create failed'); }
  };

  return <UserForm onSubmit={handleSubmit} />;
}
