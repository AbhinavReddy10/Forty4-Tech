import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import UserDetails from './pages/UserDetails';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/add" element={<AddUser/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
        <Route path="/users/:id" element={<UserDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}
